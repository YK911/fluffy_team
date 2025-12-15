import{a as O,i as m}from"./assets/vendor-B4ZCAipb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const E="https://paw-hut.b.goit.study/api",v={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},$=O.create({baseURL:E}),i={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")};function p(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error("Error saving to LocalStorage:",a)}}function P(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}let S=j(),o=P("page")||1,B,n=P("categoryId")??null;document.addEventListener("DOMContentLoaded",q);i.petsLoadMoreBtn.addEventListener("click",R);i.categoryList.addEventListener("click",N);i.petsListPagination.addEventListener("click",H);function j(){return window.innerWidth>=1440?9:8}function T(){return Math.ceil(B/S)}async function q(e){L();try{if(n){const t=await M(),a=await h(n,o);A(t),g(a),f(),u()}else{const t=await M(),a=await y();A(t),g(a),f(),u()}}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b()}}async function N(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;n=e.target.closest("li").dataset.id,o=1,L(),i.categoryList.querySelectorAll(".category-btn").forEach(s=>{s.classList.remove("current")}),e.target.classList.add("current");try{let s=await y();t!=="Всі"&&(s=await h(n,o)),g(s),u(),f()}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),p("categoryId",n),p("page",o)}}async function R(){o+=1,i.loader.classList.add("loader-center"),L();try{if(n){u();const t=await h(n,o),a=w(t);i.petsList.insertAdjacentHTML("beforeend",a)}else{u();const t=await y(o),a=w(t);i.petsList.insertAdjacentHTML("beforeend",a)}const e=i.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),p("page",o),i.loader.classList.remove("loader-center")}}async function H(e){const t=e.target.closest("button");if(!t)return;let a;const c=T();t.dataset.action==="prev"&&o>1&&(o-=1),t.dataset.action==="next"&&o<c&&(o+=1),t.dataset.page&&(o=Number(t.dataset.page)),L();try{n?a=await h(n,o):a=await y(o),g(a),f(),window.scrollTo({top:i.petsList.offsetTop-160,behavior:"smooth"})}catch{m.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),p("page",o)}}async function M(e){return(await $.get(`${v.categories}`)).data}async function y(e){const t=await $.get(`${v.animals}`,{params:{limit:S,page:e}});return B=t.data.totalItems,t.data.animals}async function h(e,t){const a=await $.get(`${v.animals}?categoryId=${e}`,{params:{limit:S,page:t}});return B=a.data.totalItems,a.data.animals}function x(e){const t=e._id===n;return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn ${t?"current":""}" type="button">${e.name}</button>
      </li>`}function U(e){return e.reverse().map(x).join("")}function A(e){const a=` <li class="category-item">
        <button class="category-btn ${!n?"current":""}" type="button">Всі</button>
      </li>${U(e)}`;i.categoryList.innerHTML=a}function _({_id:e,name:t,image:a,species:c,age:s,gender:r,categories:l,description:C}){const I=l.map(k=>`<li class="pets-category-item">${k.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${a}" alt="${t} - ${c}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${c}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${I}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${s}</li>
              <li class="descriprion-item">${r}</li>
            </ul>
            <p class="pets-descriprion">${C}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function w(e){return e.map(_).join("")}function g(e){const t=w(e);i.petsList.innerHTML=t}function f(){const e=T();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev aria-label="Попередня сторінка"" ${o===1?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,o===1){for(let a=1;a<=Math.min(3,e);a+=1)t+=d(a);e>3&&(t+='<li class="dots">…</li>',t+=d(e))}else{t+=d(1),o>3&&(t+='<li class="dots">…</li>');for(let a=o-1;a<=o+1;a+=1)a>1&&a<e&&(t+=d(a));o<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=d(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${o===e?"disabled":""}>
        <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,i.petsListPagination.innerHTML=t}function d(e){return`
    <li>
      <button
        class="pagination-btn ${o===e?"current":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}function L(){i.loader.classList.remove("loader-hidden")}function b(){i.loader.classList.add("loader-hidden")}function D(){i.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function F(){i.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function u(){const e=T();o>=e?F():D()}
//# sourceMappingURL=index.js.map
