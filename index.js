import{a as C,i as g,A as k}from"./assets/vendor-ezcAIXsn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const E="https://paw-hut.b.goit.study/api",L={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},b=C.create({baseURL:E}),r={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")};function u(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(a){console.error("Error saving to LocalStorage:",a)}}function T(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error("Error loading from LocalStorage:",e),null}}let w=I(),o=T("page")||1,v,c=T("categoryId")??null;document.addEventListener("DOMContentLoaded",O);r.petsLoadMoreBtn.addEventListener("click",R);r.categoryList.addEventListener("click",j);r.petsListPagination.addEventListener("click",H);function I(){return window.innerWidth>=1440?9:8}function $(){return Math.ceil(v/w)}async function O(t){m(),o=1;try{const e=await N(),a=await f();D(e),B(a),M(),p()}catch{g.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{y()}}async function j(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;c=t.target.closest("li").dataset.id,o=1,m(),r.categoryList.querySelectorAll(".category-btn").forEach(i=>{i.classList.remove("current")}),t.target.classList.add("current");try{let i=await f();e!=="Всі"&&(i=await S(c,o)),B(i),p(),M()}catch{g.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{y(),u("categoryId",c),u("page",o)}}async function R(){o+=1,r.loader.classList.add("loader-center"),m();try{if(c){p();const e=await S(c,o),a=h(e);r.petsList.insertAdjacentHTML("beforeend",a)}else{p();const e=await f(o),a=h(e);r.petsList.insertAdjacentHTML("beforeend",a)}const t=r.petsList.querySelector("li");if(t){const e=t.getBoundingClientRect();window.scrollBy({top:e.height,behavior:"smooth"})}}catch{g.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{y(),u("page",o),r.loader.classList.remove("loader-center")}}async function H(t){const e=t.target.closest("button");if(!e)return;let a;const s=$();e.dataset.action==="prev"&&o>1&&(o-=1),e.dataset.action==="next"&&o<s&&(o+=1),e.dataset.page&&(o=Number(e.dataset.page)),m();try{c?a=await S(c,o):a=await f(o),B(a),M(),window.scrollTo({top:r.petsList.offsetTop-160,behavior:"smooth"})}catch{g.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{y(),u("page",o)}}async function N(t){return(await b.get(`${L.categories}`)).data}async function f(t){const e=await b.get(`${L.animals}`,{params:{limit:w,page:t}});return v=e.data.totalItems,e.data.animals}async function S(t,e){const a=await b.get(`${L.animals}?categoryId=${t}`,{params:{limit:w,page:e}});return v=a.data.totalItems,a.data.animals}function x(t){return`
     <li class="category-item" data-id="${t._id}">
        <button class="category-btn" type="button">${t.name}</button>
      </li>`}function U(t){return t.map(x).join("")}function D(t){const e=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${U(t)}`;r.categoryList.innerHTML=e}function F({_id:t,name:e,image:a,species:s,age:i,gender:n,categories:l,description:A}){const P=l.map(q=>`<li class="pets-category-item">${q.name}</li>`).join("");return`
     <li class="pets-item" data-id="${t}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${a}" alt="${e} - ${s}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${s}</p>
          <h3 class="pets-name">${e}</h3>
          <ul class="pets-category-list">${P}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${i}</li>
              <li class="descriprion-item">${n}</li>
            </ul>
            <p class="pets-descriprion">${A}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function h(t){return t.map(F).join("")}function B(t){const e=h(t);r.petsList.innerHTML=e}function M(){const t=$();if(t<=1)return;let e="";if(e+=`<li>
      <button class="pagination-btn-arrow" data-action="prev aria-label="Попередня сторінка"" ${o===1?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,o===1){for(let a=1;a<=Math.min(3,t);a+=1)e+=d(a);t>3&&(e+='<li class="dots">…</li>',e+=d(t))}else{e+=d(1),o>3&&(e+='<li class="dots">…</li>');for(let a=o-1;a<=o+1;a+=1)a>1&&a<t&&(e+=d(a));o<t-2&&(e+='<li class="dots">…</li>'),t>1&&(e+=d(t))}e+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${o===t?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,r.petsListPagination.innerHTML=e}function d(t){return`
    <li>
      <button
        class="pagination-btn ${o===t?"current":""}"
        aria-label="Сторінка ${t}"
        data-page="${t}">
        ${t}
      </button>
    </li>
  `}function m(){r.loader.classList.remove("loader-hidden")}function y(){r.loader.classList.add("loader-hidden")}function J(){r.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function _(){r.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function p(){const t=$();o>=t?_():J()}new k(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(t){const e=t.querySelector(".ac-panel");if(!e)return;const a=e.getBoundingClientRect();if(a.bottom>window.innerHeight){const s=a.bottom-window.innerHeight+20;window.scrollBy({top:s,behavior:"smooth"})}}});const z=document.querySelectorAll(".faq-question-btn");z.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-label",e?"Закрити відповідь":"Відкрити відповідь")})});
//# sourceMappingURL=index.js.map
