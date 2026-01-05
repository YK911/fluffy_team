import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import FullReload from 'vite-plugin-full-reload';
import handlebars from 'vite-plugin-handlebars';
import { createHtmlPlugin } from 'vite-plugin-html';
import Beasties from 'beasties';

const myBeastiesPlugin = () => ({
  name: 'beasties-plugin',
  async closeBundle() {
    const fs = await import('fs/promises');
    const path = await import('path');
    const htmlPath = path.resolve(__dirname, 'dist/index.html');
    const assetsDir = path.resolve(__dirname, 'dist/assets');

    try {
      const html = await fs.readFile(htmlPath, 'utf8');

      // Знаходимо назву CSS файлу (бо Vite додає хеш, як-от main-C0SILCN0.css)
      const files = await fs.readdir(assetsDir);
      const cssFile = files.find(file => file.endsWith('.css'));

      const beasties = new Beasties({
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        // Явно вказуємо файл, який треба обробити
        additionalStylesheets: [cssFile ? `/assets/${cssFile}` : []].flat(),
        preload: 'swap',
        pruneSource: true,
        inlineThreshold: 4000,
        reduceInlineStyles: true,
      });

      // ХАК: Щоб Beasties не сварився на відсутність файлу в HTML,
      // ми тимчасово зробимо шлях у HTML відносним (приберемо /fluffy_team/)
      const tempHtml = html.replace(/\/fluffy_team\//g, '');

      let optimizedHtml = await beasties.process(tempHtml);

      optimizedHtml = optimizedHtml.replace(/(href|src)="\//g, '$1="/fluffy_team/');

      await fs.writeFile(htmlPath, optimizedHtml);
      console.log('\x1b[32m%s\x1b[0m', '✓ Critical CSS generated successfully!');
    } catch (error) {
      console.error('\x1b[31m%s\x1b[0m', '✗ Beasties failed:', error);
    }
  },
});

export default defineConfig(() => {
  return {
    root: 'src',

    server: {
      port: 5410,
      open: true,
      watch: {
        ignored: ['**/.stylelintcache', '**/.eslintcache'],
      },
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/index.html'),
        },
      },
    },

    plugins: [
      handlebars({
        partialDirectory: path.resolve(__dirname, 'src/partials'),
      }),

      myBeastiesPlugin(),

      createHtmlPlugin({ minify: true }),

      FullReload(['./src/**/**.html', './src/partials/**/**.hbs']),

      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        verbose: false,
      }),
    ],
  };
});
