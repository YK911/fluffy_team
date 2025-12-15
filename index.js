import{a as S,i as p}from"./assets/vendor-B4ZCAipb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const k="https://paw-hut.b.goit.study/api",h={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},L=S.create({baseURL:k}),o={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")};let b=j(),i=1,w,c;document.addEventListener("DOMContentLoaded",A);o.petsLoadMoreBtn.addEventListener("click",q);o.categoryList.addEventListener("click",O);o.petsListPagination.addEventListener("click",E);function j(){return window.innerWidth>=1440?9:8}function v(){return Math.ceil(w/b)}async function A(t){f();try{const e=await I(),a=await g();H(e),B(a),M(),u()}catch{p.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{m()}}async function O(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;c=t.target.closest("li").dataset.id,i=1,f(),o.categoryList.querySelectorAll(".category-btn").forEach(s=>{s.classList.remove("current")}),t.target.classList.add("current");try{let s=await g();e!=="Всі"&&(s=await $(c,i)),B(s),u(),M()}catch{p.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{m()}}async function q(){i+=1,o.loader.classList.add("loader-center"),f();try{if(c){u();const e=await $(c,i),a=y(e);o.petsList.insertAdjacentHTML("beforeend",a)}else{u();const e=await g(i),a=y(e);o.petsList.insertAdjacentHTML("beforeend",a)}const t=o.petsList.querySelector("li");if(t){const e=t.getBoundingClientRect();window.scrollBy({top:e.height,behavior:"smooth"})}}catch{p.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{m(),o.loader.classList.remove("loader-center")}}async function E(t){const e=t.target.closest("button");if(!e)return;let a;const r=v();e.dataset.action==="prev"&&i>1&&(i-=1),e.dataset.action==="next"&&i<r&&(i+=1),e.dataset.page&&(i=Number(e.dataset.page)),f();try{c?a=await $(c,i):a=await g(i),B(a),M(),window.scrollTo({top:o.petsList.offsetTop-80,behavior:"smooth"})}catch{p.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{m()}}async function I(t){return(await L.get(`${h.categories}`)).data}async function g(t){const e=await L.get(`${h.animals}`,{params:{limit:b,page:t}});return w=e.data.totalItems,e.data.animals}async function $(t,e){const a=await L.get(`${h.animals}?categoryId=${t}`,{params:{limit:b,page:e}});return w=a.data.totalItems,a.data.animals}function R(t){return`
     <li class="category-item" data-id="${t._id}">
        <button class="category-btn" type="button">${t.name}</button>
      </li>`}function N(t){return t.reverse().map(R).join("")}function H(t){const e=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${N(t)}`;o.categoryList.innerHTML=e}function x({_id:t,name:e,image:a,species:r,age:s,gender:n,categories:l,description:T}){const P=l.map(C=>`<li class="pets-category-item">${C.name}</li>`).join("");return`
     <li class="pets-item" data-id="${t}">
        <img class="pets-img" src="${a}" alt="${e} - ${r}" />
        <div class="pets-list-wrapper">
          <p class="pets-category">${r}</p>
          <h3 class="pets-name">${e}</h3>
          <ul class="pets-category-list">${P}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${s}</li>
              <li class="descriprion-item">${n}</li>
            </ul>
            <p class="pets-descriprion">${T}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function y(t){return t.map(x).join("")}function B(t){const e=y(t);o.petsList.innerHTML=e}function M(){const t=v();if(t<=1)return;let e="";if(e+=`<li>
      <button class="pagination-btn-arrow" data-action="prev aria-label="Попередня сторінка"" ${i===1?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="../img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,i===1){for(let a=1;a<=Math.min(3,t);a+=1)e+=d(a);t>3&&(e+='<li class="dots">…</li>',e+=d(t))}else{e+=d(1),i>3&&(e+='<li class="dots">…</li>');for(let a=i-1;a<=i+1;a+=1)a>1&&a<t&&(e+=d(a));i<t-2&&(e+='<li class="dots">…</li>'),t>1&&(e+=d(t))}e+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${i===t?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="../img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,o.petsListPagination.innerHTML=e}function d(t){return`
    <li>
      <button
        class="pagination-btn ${i===t?"current":""}"
        aria-label="Сторінка ${t}"
        data-page="${t}">
        ${t}
      </button>
    </li>
  `}function f(){o.loader.classList.remove("loader-hidden")}function m(){o.loader.classList.add("loader-hidden")}function U(){o.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function D(){o.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function u(){const t=v();i>=t?D():U()}
//# sourceMappingURL=index.js.map
