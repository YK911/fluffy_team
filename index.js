import{a as C,i as m,A as O}from"./assets/vendor-ezcAIXsn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const I=document.querySelector(".header-burger-menu"),u=document.querySelector(".header-modal"),j=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const R=document.querySelector(".modal-navigation-list"),H=document.querySelector(".modal-button");function b(t){u.classList.remove("is-open")}document.addEventListener("keydown",t=>{const e=t.key==="Escape",o=u.classList.contains("is-open");e&&o&&u.classList.remove("is-open")});H.addEventListener("click",b);I.addEventListener("click",t=>{t.preventDefault(),u.classList.add("is-open")});j.addEventListener("click",b);R.addEventListener("click",b);const N="https://paw-hut.b.goit.study/api",w={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},v=C.create({baseURL:N}),s={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")};function p(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(o){console.error("Error saving to LocalStorage:",o)}}function M(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error("Error loading from LocalStorage:",e),null}}let S=x(),a=M("page")||1,B,c=M("categoryId")??null;document.addEventListener("DOMContentLoaded",D);s.petsLoadMoreBtn.addEventListener("click",F);s.categoryList.addEventListener("click",U);s.petsListPagination.addEventListener("click",J);function x(){return window.innerWidth>=1440?9:8}function $(){return Math.ceil(B/S)}async function D(t){y(),a=1;try{const e=await _(),o=await f();W(e),q(o),E(),g()}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{h()}}async function U(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;c=t.target.closest("li").dataset.id,a=1,y(),s.categoryList.querySelectorAll(".category-btn").forEach(n=>{n.classList.remove("current")}),t.target.classList.add("current");try{let n=await f();e!=="Всі"&&(n=await k(c,a)),q(n),g(),E()}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{h(),p("categoryId",c),p("page",a)}}async function F(){a+=1,s.loader.classList.add("loader-center"),y();try{if(c){g();const e=await k(c,a),o=L(e);s.petsList.insertAdjacentHTML("beforeend",o)}else{g();const e=await f(a),o=L(e);s.petsList.insertAdjacentHTML("beforeend",o)}const t=s.petsList.querySelector("li");if(t){const e=t.getBoundingClientRect();window.scrollBy({top:e.height,behavior:"smooth"})}}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{h(),p("page",a),s.loader.classList.remove("loader-center")}}async function J(t){const e=t.target.closest("button");if(!e)return;let o;const r=$();e.dataset.action==="prev"&&a>1&&(a-=1),e.dataset.action==="next"&&a<r&&(a+=1),e.dataset.page&&(a=Number(e.dataset.page)),y();try{c?o=await k(c,a):o=await f(a),q(o),E(),window.scrollTo({top:s.petsList.offsetTop-160,behavior:"smooth"})}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{h(),p("page",a)}}async function _(t){return(await v.get(`${w.categories}`)).data}async function f(t){const e=await v.get(`${w.animals}`,{params:{limit:S,page:t}});return B=e.data.totalItems,e.data.animals}async function k(t,e){const o=await v.get(`${w.animals}?categoryId=${t}`,{params:{limit:S,page:e}});return B=o.data.totalItems,o.data.animals}function z(t){return`
     <li class="category-item" data-id="${t._id}">
        <button class="category-btn" type="button">${t.name}</button>
      </li>`}function K(t){return t.map(z).join("")}function W(t){const e=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${K(t)}`;s.categoryList.innerHTML=e}function G({_id:t,name:e,image:o,species:r,age:n,gender:i,categories:l,description:T}){const A=l.map(P=>`<li class="pets-category-item">${P.name}</li>`).join("");return`
     <li class="pets-item" data-id="${t}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${o}" alt="${e} - ${r}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${r}</p>
          <h3 class="pets-name">${e}</h3>
          <ul class="pets-category-list">${A}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${n}</li>
              <li class="descriprion-item">${i}</li>
            </ul>
            <p class="pets-descriprion">${T}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function L(t){return t.map(G).join("")}function q(t){const e=L(t);s.petsList.innerHTML=e}function E(){const t=$();if(t<=1)return;let e="";if(e+=`<li>
      <button class="pagination-btn-arrow" data-action="prev aria-label="Попередня сторінка"" ${a===1?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,a===1){for(let o=1;o<=Math.min(3,t);o+=1)e+=d(o);t>3&&(e+='<li class="dots">…</li>',e+=d(t))}else{e+=d(1),a>3&&(e+='<li class="dots">…</li>');for(let o=a-1;o<=a+1;o+=1)o>1&&o<t&&(e+=d(o));a<t-2&&(e+='<li class="dots">…</li>'),t>1&&(e+=d(t))}e+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${a===t?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,s.petsListPagination.innerHTML=e}function d(t){return`
    <li>
      <button
        class="pagination-btn ${a===t?"current":""}"
        aria-label="Сторінка ${t}"
        data-page="${t}">
        ${t}
      </button>
    </li>
  `}function y(){s.loader.classList.remove("loader-hidden")}function h(){s.loader.classList.add("loader-hidden")}function Q(){s.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function V(){s.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function g(){const t=$();a>=t?V():Q()}new O(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(t){const e=t.querySelector(".ac-panel");if(!e)return;const o=e.getBoundingClientRect();if(o.bottom>window.innerHeight){const r=o.bottom-window.innerHeight+20;window.scrollBy({top:r,behavior:"smooth"})}}});const X=document.querySelectorAll(".faq-question-btn");X.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-label",e?"Закрити відповідь":"Відкрити відповідь")})});
//# sourceMappingURL=index.js.map
