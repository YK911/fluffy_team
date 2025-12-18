import{a as U,i as h,S as V,N as G,P as Q,A as X,R as Y,b as _}from"./assets/vendor-BMg9SRtg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Z=document.querySelector(".header-burger-menu"),T=document.querySelector(".header-modal"),ee=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const te=document.querySelector(".modal-navigation-list"),ne=document.querySelector(".modal-button");function P(e){T.classList.remove("is-open")}document.addEventListener("keydown",e=>{const t=e.key==="Escape",n=T.classList.contains("is-open");t&&n&&clos});ne.addEventListener("click",P);Z.addEventListener("click",e=>{e.preventDefault(),T.classList.add("is-open")});ee.addEventListener("click",P);te.addEventListener("click",e=>{e.target.classList.contains("modal-navigation-link")&&P()});const i={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination"),animalDetailsBackdrop:document.querySelector(".animal-details-backdrop")},w={page:1,limit:6},oe="https://paw-hut.b.goit.study/api",b={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},S=U.create({baseURL:oe});async function ae(e=w.page){try{const t=typeof w.limit=="number"&&w.limit>0?w.limit:6,n=typeof e=="number"&&e>=1?e:1;return(await S.get(`${b.feedbacks}`,{params:{limit:t,page:n}})).data.feedbacks}catch{return null}}function m(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Error saving to LocalStorage:",n)}}function W(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}const x="/fluffy_team/assets/sprite-C5gMIK71.svg";i.animalDetailsBackdrop.addEventListener("click",se);function z(e,t){if(e.target.nodeName!=="BUTTON")return;const r=e.target.closest("li").dataset.id,o=t.find(d=>d._id===r);if(!o)return;re(o),i.animalDetailsBackdrop.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",F),document.querySelector(".details-modal-close-btn").addEventListener("click",I),document.querySelector(".modal-adopt-btn").addEventListener("click",d=>handleAdoptBtnClick(d,o._id))}function re({_id:e,name:t,image:n,species:r,age:o,gender:a,description:l,healthStatus:d,behavior:f}){const g=`
    <div class="animal-modal" data-id="${e}">
    <button
      class="details-modal-close-btn"
      type="button"
      aria-label="Закрити модальне вікно"
    >
      <svg class="details-modal-close-btn-icon" width="24" height="24">
        <use href="${x}#icon-close"></use>
      </svg>
    </button>
    <div class="animal-modal-content">
      <div class="animal-modal-img-wrapper">
        <img class="animal-modal-img" src="${n}" alt="${t}-${r}" />
      </div>
      <div class="animal-modal-info">
        <p class="animal-species">${r}</p>
        <h2 class="animal-name">${t}</h2>
        <div class="age-gender-wrapper">
          <p class="animal-age">${o}</p>
          <p class="animal-gender">${a}</p>
        </div>
        <div class="description-section">
          <h3 class="descriprion-title">Опис:</h3>
          <p class="descriprion-text">${l}</p>
        </div>
        <div class="description-section">
          <h3 class="descriprion-title">Здоров"я:</h3>
          <p class="descriprion-text">${d}</p>
        </div>
        <div class="description-section last">
          <h3 class="descriprion-title">Поведінка:</h3>
          <p class="descriprion-text">${f}</p>
        </div>
        <button class="modal-adopt-btn" type="button">Взяти додому</button>
      </div>
    </div>
  </div>
  `;i.animalDetailsBackdrop.innerHTML=g}function I(){i.animalDetailsBackdrop.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",F)}function F(e){e.code==="Escape"&&I()}function se(e){e.currentTarget===e.target&&I()}let O=ie(),s=W("page"),A,p=W("categoryId")??null;document.addEventListener("DOMContentLoaded",ce);i.petsLoadMoreBtn.addEventListener("click",de);i.categoryList.addEventListener("click",le);i.petsListPagination.addEventListener("click",pe);function ie(){return window.innerWidth>=1440?9:8}function H(){return Math.ceil(A/O)}async function ce(e){k(),s=1,p=null,m("page",1),m("categoryId",null);try{const t=await ue(),n=await E();ge(t),N(n),R(),v(),i.petsList.addEventListener("click",r=>z(r,n))}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{B()}}async function le(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;p=e.target.closest("li").dataset.id,s=1;let r;k(),i.categoryList.querySelectorAll(".category-btn").forEach(a=>{a.classList.remove("current")}),e.target.classList.add("current");try{t!=="Всі"?r=await D(p,s):r=await E(),N(r),v(),R(),i.petsList.addEventListener("click",a=>z(a,r))}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{B(),m("categoryId",p),m("page",s)}}async function de(){s+=1,i.loader.classList.add("loader-center"),k();try{if(p){v();const t=await D(p,s),n=C(t);i.petsList.insertAdjacentHTML("beforeend",n)}else{v();const t=await E(s),n=C(t);i.petsList.insertAdjacentHTML("beforeend",n)}const e=i.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{B(),m("page",s),i.loader.classList.remove("loader-center")}}async function pe(e){const t=e.target.closest("button");if(!t)return;let n;const r=H();t.dataset.action==="prev"&&s>1&&(s-=1),t.dataset.action==="next"&&s<r&&(s+=1),t.dataset.page&&(s=Number(t.dataset.page)),k();try{p?n=await D(p,s):n=await E(s),N(n),R(),window.scrollTo({top:i.petsList.offsetTop-80,behavior:"smooth"})}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{B(),m("page",s)}}async function ue(e){return(await S.get(`${b.categories}`)).data}async function E(e){const t=await S.get(`${b.animals}`,{params:{limit:O,page:e}});return A=t.data.totalItems,t.data.animals}async function D(e,t){const n=await S.get(`${b.animals}?categoryId=${e}`,{params:{limit:O,page:t}});return A=n.data.totalItems,n.data.animals}function me(e){return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn" type="button">${e.name}</button>
      </li>`}function fe(e){return e.reverse().map(me).join("")}function ge(e){const t=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${fe(e)}`;i.categoryList.innerHTML=t}function ye({_id:e,name:t,image:n,species:r,age:o,gender:a,categories:l,description:d}){const f=l.map(g=>`<li class="pets-category-item">${g.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${n}" alt="${t} - ${r}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${r}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${f}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${o}</li>
              <li class="descriprion-item">${a}</li>
            </ul>
            <p class="pets-descriprion">${d}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function C(e){return e.map(ye).join("")}function N(e){const t=C(e);i.petsList.innerHTML=t}function R(){const e=H();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${s===1?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${x}#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,s===1){for(let n=1;n<=Math.min(3,e);n+=1)t+=y(n);e>3&&(t+='<li class="dots">…</li>',t+=y(e))}else{t+=y(1),s>3&&(t+='<li class="dots">…</li>');for(let n=s-1;n<=s+1;n+=1)n>1&&n<e&&(t+=y(n));s<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=y(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${s===e?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${x}#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,i.petsListPagination.innerHTML=t}function y(e){return`
    <li>
      <button
        class="pagination-btn ${s===e?"current":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}function k(){i.loader.classList.remove("loader-hidden")}function B(){i.loader.classList.add("loader-hidden")}function he(){i.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function we(){i.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function v(){const e=H();s>=e?we():he()}new V(".mySwiper",{modules:[G,Q],slidesPerView:1,wrapperClass:"about-swiper-wrapper",slideClass:"about-swiper-slide",navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"},pagination:{el:".about-swiper-pagination",clickable:!0},spaceBetween:0,loop:!1,breakpoints:{0:{slidesPerView:1}}});new X(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(e){const t=e.querySelector(".ac-panel");if(!t)return;const n=t.getBoundingClientRect();if(n.bottom>window.innerHeight){const r=n.bottom-window.innerHeight+20;window.scrollBy({top:r,behavior:"smooth"})}}});const Le=document.querySelectorAll(".faq-question-btn");Le.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-label",t?"Закрити відповідь":"Відкрити відповідь")})});function ve(e){const t=document.querySelector(".swiper-wrapper"),n=e.map(({description:r,rate:o,author:a})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${o}"></div>     
            <p class="storie-text">${r}</p>
            <p class="storie-names">${a}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".star-rating").forEach(r=>{new Y(r,{starType:"svg",readOnly:!0}).init()})}const J=document.querySelector(".stories-loader"),be=document.querySelector(".swiper-controls");function M(e){h.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function L(){J.classList.remove("loader")}function Se(){J.classList.add("loader")}function Ee(){be.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{Se();try{let e=await ae();if(e===null){M("Не вдалося завантажити історії. Спробуйте пізніше"),L();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){M("Нажаль, історії зараз недоступні"),L();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ve(e);const t=new V(".swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});Ee(),L()}catch{M("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".swiper-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),L()}});const u=document.getElementById("order-form"),$=document.getElementById("modal-order"),ke=$.querySelector(".modal-close-btn");function q(){$.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",Be)}function Be(e){e.key==="Escape"&&q()}function $e(e){e.target===$&&q()}ke.addEventListener("click",q);$.addEventListener("click",$e);u.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comments:r}=e.target.elements,o=t.value.trim();let a=n.value.trim();const l=r.value.trim(),d=u.querySelectorAll(".input-error"),f=u.querySelectorAll(".error-text");if(d.forEach(c=>c.classList.remove("input-error")),f.forEach(c=>c.textContent=""),o.length>32){const c=u.querySelector('.modal-form-input[type="text"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Ім'я не повинно перевищувати 32 символи.";return}const g=/^[0-9]{12}$/;if(a[0]==="+"&&(a=a.slice(1)),a.length!==12){const c=u.querySelector('.modal-form-input[type="tel"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Телефон повинен містити 12 цифр.";return}if(!g.test(a)){const c=u.querySelector('.modal-form-input[type="tel"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Телефон повинен містити лише цифри.";return}if(l.length>255){const c=u.querySelector(".modal-form-textarea");c.classList.add("input-error"),c.nextElementSibling.textContent="Коментар не повинен перевищувати 255 символів.";return}const K={name:o,phone:a,animalId:"667ad1b8e4b01a2b3c4d5e55",comment:l.length>0?l:"Без коментарів"};try{const j=(await U.post("https://paw-hut.b.goit.study/api/orders",K)).data;return _.fire({title:"Дякуємо за вашу заявку!",text:`Ваш номер замовлення: ${j._id}`,icon:"success",confirmButtonText:"Закрити"}),e.target.reset(),q(),j}catch(c){_.fire({title:"Помилка!",text:"Сталася помилка при надсиланні заявки. Спробуйте ще раз пізніше.",icon:"error",confirmButtonText:"Закрити"}),console.error("Error submitting order:",c)}});
//# sourceMappingURL=index.js.map
