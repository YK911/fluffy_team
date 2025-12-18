import{a as j,i as u,A as x,R as N,S as D}from"./assets/vendor-CwR7vHLq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const U=document.querySelector(".header-burger-menu"),$=document.querySelector(".header-modal"),_=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const z=document.querySelector(".modal-navigation-list"),F=document.querySelector(".modal-button");function B(e){$.classList.remove("is-open")}document.addEventListener("keydown",e=>{const t=e.key==="Escape",o=$.classList.contains("is-open");t&&o&&clos});F.addEventListener("click",B);U.addEventListener("click",e=>{e.preventDefault(),$.classList.add("is-open")});_.addEventListener("click",B);z.addEventListener("click",e=>{e.target.classList.contains("modal-navigation-link")&&B()});const i={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination")},p={page:1,limit:6},J="https://paw-hut.b.goit.study/api",y={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},h=j.create({baseURL:J});async function K(e=p.page){try{const t=typeof p.limit=="number"&&p.limit>0?p.limit:6,o=typeof e=="number"&&e>=1?e:1;return(await h.get(`${y.feedbacks}`,{params:{limit:t,page:o}})).data.feedbacks}catch{return null}}function f(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(o){console.error("Error saving to LocalStorage:",o)}}function A(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}const P="/fluffy_team/assets/sprite-C5gMIK71.svg";let k=W(),a=A("page")||1,q,c=A("categoryId")??null;document.addEventListener("DOMContentLoaded",V);i.petsLoadMoreBtn.addEventListener("click",Q);i.categoryList.addEventListener("click",G);i.petsListPagination.addEventListener("click",X);function W(){return window.innerWidth>=1440?9:8}function M(){return Math.ceil(q/k)}async function V(e){w(),a=1;try{const t=await Y(),o=await L();te(t),T(o),C(),g()}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b()}}async function G(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;c=e.target.closest("li").dataset.id,a=1;let n;w(),i.categoryList.querySelectorAll(".category-btn").forEach(s=>{s.classList.remove("current")}),e.target.classList.add("current");try{t!=="Всі"?n=await E(c,a):(c=null,n=await L()),T(n),g(),C()}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),f("categoryId",c),f("page",a)}}async function Q(){a+=1,i.loader.classList.add("loader-center"),w();try{if(c){g();const t=await E(c,a),o=S(t);i.petsList.insertAdjacentHTML("beforeend",o)}else{g();const t=await L(a),o=S(t);i.petsList.insertAdjacentHTML("beforeend",o)}const e=i.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),f("page",a),i.loader.classList.remove("loader-center")}}async function X(e){const t=e.target.closest("button");if(!t)return;let o;const n=M();t.dataset.action==="prev"&&a>1&&(a-=1),t.dataset.action==="next"&&a<n&&(a+=1),t.dataset.page&&(a=Number(t.dataset.page)),w();try{c?o=await E(c,a):o=await L(a),T(o),C(),window.scrollTo({top:i.petsList.offsetTop-80,behavior:"smooth"})}catch{u.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{b(),f("page",a)}}async function Y(e){return(await h.get(`${y.categories}`)).data}async function L(e){const t=await h.get(`${y.animals}`,{params:{limit:k,page:e}});return q=t.data.totalItems,t.data.animals}async function E(e,t){const o=await h.get(`${y.animals}?categoryId=${e}`,{params:{limit:k,page:t}});return q=o.data.totalItems,o.data.animals}function Z(e){return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn" type="button">${e.name}</button>
      </li>`}function ee(e){return e.map(Z).join("")}function te(e){const t=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${ee(e)}`;i.categoryList.innerHTML=t}function oe({_id:e,name:t,image:o,species:n,age:r,gender:s,categories:l,description:I}){const H=l.map(R=>`<li class="pets-category-item">${R.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${o}" alt="${t} - ${n}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${n}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${H}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${r}</li>
              <li class="descriprion-item">${s}</li>
            </ul>
            <p class="pets-descriprion">${I}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function S(e){return e.map(oe).join("")}function T(e){const t=S(e);i.petsList.innerHTML=t}function C(){const e=M();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${a===1?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${P}#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,a===1){for(let o=1;o<=Math.min(3,e);o+=1)t+=d(o);e>3&&(t+='<li class="dots">…</li>',t+=d(e))}else{t+=d(1),a>3&&(t+='<li class="dots">…</li>');for(let o=a-1;o<=a+1;o+=1)o>1&&o<e&&(t+=d(o));a<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=d(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${a===e?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${P}#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,i.petsListPagination.innerHTML=t}function d(e){return`
    <li>
      <button
        class="pagination-btn ${a===e?"current":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}function w(){i.loader.classList.remove("loader-hidden")}function b(){i.loader.classList.add("loader-hidden")}function ae(){i.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function re(){i.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function g(){const e=M();a>=e?re():ae()}new x(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(e){const t=e.querySelector(".ac-panel");if(!t)return;const o=t.getBoundingClientRect();if(o.bottom>window.innerHeight){const n=o.bottom-window.innerHeight+20;window.scrollBy({top:n,behavior:"smooth"})}}});const ne=document.querySelectorAll(".faq-question-btn");ne.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-label",t?"Закрити відповідь":"Відкрити відповідь")})});function se(e){const t=document.querySelector(".swiper-wrapper"),o=e.map(({description:n,rate:r,author:s})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
            <p class="storie-text">${n}</p>
            <p class="storie-names">${s}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".star-rating").forEach(n=>{new N(n,{starType:"svg",readOnly:!0}).init()})}const O=document.querySelector(".stories-loader"),ie=document.querySelector(".swiper-controls");function v(e){u.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function m(){O.classList.remove("loader")}function ce(){O.classList.add("loader")}function le(){ie.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{ce();try{let e=await K();if(e===null){v("Не вдалося завантажити історії. Спробуйте пізніше"),m();const o=document.querySelector(".swiper-wrapper");o&&(o.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){v("Нажаль, історії зараз недоступні"),m();const o=document.querySelector(".swiper-wrapper");o&&(o.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}se(e);const t=new D(".swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});le(),m()}catch{v("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".swiper-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),m()}});
//# sourceMappingURL=index.js.map
