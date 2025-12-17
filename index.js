import{a as R,i as u,A as j,R as x,S as N}from"./assets/vendor-CwR7vHLq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const D=document.querySelector(".header-burger-menu"),g=document.querySelector(".header-modal"),U=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const z=document.querySelector(".modal-navigation-list"),F=document.querySelector(".modal-button");function B(e){g.classList.remove("is-open")}document.addEventListener("keydown",e=>{const t=e.key==="Escape",o=g.classList.contains("is-open");t&&o&&g.classList.remove("is-open")});F.addEventListener("click",B);D.addEventListener("click",e=>{e.preventDefault(),g.classList.add("is-open")});U.addEventListener("click",B);z.addEventListener("click",B);const s={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")},p={page:1,limit:6},J="https://paw-hut.b.goit.study/api",L={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},h=R.create({baseURL:J});async function W(e=p.page){try{const t=typeof p.limit=="number"&&p.limit>0?p.limit:6,o=typeof e=="number"&&e>=1?e:1;return(await h.get(`${L.feedbacks}`,{params:{limit:t,page:o}})).data.feedbacks}catch{return null}}function f(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(o){console.error("Error saving to LocalStorage:",o)}}function P(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}let q=_(),a=P("page")||1,k,c=P("categoryId")??null;document.addEventListener("DOMContentLoaded",K);s.petsLoadMoreBtn.addEventListener("click",G);s.categoryList.addEventListener("click",V);s.petsListPagination.addEventListener("click",Q);function _(){return window.innerWidth>=1440?9:8}function E(){return Math.ceil(k/q)}async function K(e){b(),a=1;try{const t=await X(),o=await w();ee(t),T(o),C(),y()}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{v()}}async function V(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;c=e.target.closest("li").dataset.id,a=1,b(),s.categoryList.querySelectorAll(".category-btn").forEach(r=>{r.classList.remove("current")}),e.target.classList.add("current");try{let r=await w();t!=="Всі"&&(r=await M(c,a)),T(r),y(),C()}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{v(),f("categoryId",c),f("page",a)}}async function G(){a+=1,s.loader.classList.add("loader-center"),b();try{if(c){y();const t=await M(c,a),o=$(t);s.petsList.insertAdjacentHTML("beforeend",o)}else{y();const t=await w(a),o=$(t);s.petsList.insertAdjacentHTML("beforeend",o)}const e=s.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{v(),f("page",a),s.loader.classList.remove("loader-center")}}async function Q(e){const t=e.target.closest("button");if(!t)return;let o;const n=E();t.dataset.action==="prev"&&a>1&&(a-=1),t.dataset.action==="next"&&a<n&&(a+=1),t.dataset.page&&(a=Number(t.dataset.page)),b();try{c?o=await M(c,a):o=await w(a),T(o),C(),window.scrollTo({top:s.petsList.offsetTop-160,behavior:"smooth"})}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{v(),f("page",a)}}async function X(e){return(await h.get(`${L.categories}`)).data}async function w(e){const t=await h.get(`${L.animals}`,{params:{limit:q,page:e}});return k=t.data.totalItems,t.data.animals}async function M(e,t){const o=await h.get(`${L.animals}?categoryId=${e}`,{params:{limit:q,page:t}});return k=o.data.totalItems,o.data.animals}function Y(e){return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn" type="button">${e.name}</button>
      </li>`}function Z(e){return e.map(Y).join("")}function ee(e){const t=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${Z(e)}`;s.categoryList.innerHTML=t}function te({_id:e,name:t,image:o,species:n,age:r,gender:i,categories:l,description:O}){const H=l.map(I=>`<li class="pets-category-item">${I.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${o}" alt="${t} - ${n}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${n}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${H}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${r}</li>
              <li class="descriprion-item">${i}</li>
            </ul>
            <p class="pets-descriprion">${O}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function $(e){return e.map(te).join("")}function T(e){const t=$(e);s.petsList.innerHTML=t}function C(){const e=E();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev aria-label="Попередня сторінка"" ${a===1?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,a===1){for(let o=1;o<=Math.min(3,e);o+=1)t+=d(o);e>3&&(t+='<li class="dots">…</li>',t+=d(e))}else{t+=d(1),a>3&&(t+='<li class="dots">…</li>');for(let o=a-1;o<=a+1;o+=1)o>1&&o<e&&(t+=d(o));a<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=d(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${a===e?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,s.petsListPagination.innerHTML=t}function d(e){return`
    <li>
      <button
        class="pagination-btn ${a===e?"current":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}function b(){s.loader.classList.remove("loader-hidden")}function v(){s.loader.classList.add("loader-hidden")}function oe(){s.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function re(){s.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function y(){const e=E();a>=e?re():oe()}new j(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(e){const t=e.querySelector(".ac-panel");if(!t)return;const o=t.getBoundingClientRect();if(o.bottom>window.innerHeight){const n=o.bottom-window.innerHeight+20;window.scrollBy({top:n,behavior:"smooth"})}}});const ae=document.querySelectorAll(".faq-question-btn");ae.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-label",t?"Закрити відповідь":"Відкрити відповідь")})});function se(e){const t=document.querySelector(".swiper-wrapper"),o=e.map(({description:n,rate:r,author:i})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
            <p class="storie-text">${n}</p>
            <p class="storie-names">${i}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".star-rating").forEach(n=>{new x(n,{starType:"svg",readOnly:!0}).init()})}const A=document.querySelector(".stories-loader"),ne=document.querySelector(".swiper-controls");function S(e){u.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function m(){A.classList.remove("loader")}function ie(){A.classList.add("loader")}function ce(){ne.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{ie();try{let e=await W();if(e===null){S("Не вдалося завантажити історії. Спробуйте пізніше"),m();const o=document.querySelector(".swiper-wrapper");o&&(o.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){S("Нажаль, історії зараз недоступні"),m();const o=document.querySelector(".swiper-wrapper");o&&(o.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}se(e);const t=new N(".swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});ce(),m()}catch{S("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".swiper-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),m()}});
//# sourceMappingURL=index.js.map
