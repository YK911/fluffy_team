import{a as U,i as h,S as V,N as Q,P as X,A as Y,R as Z,b as _}from"./assets/vendor-BMg9SRtg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const W=document.querySelector(".header-burger-menu"),P=document.querySelector(".header-modal"),ee=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const te=document.querySelector(".modal-navigation-list"),ne=document.querySelector(".modal-button");function b(e){P.classList.remove("is-open")}document.addEventListener("keydown",e=>{const t=e.key==="Escape",n=P.classList.contains("is-open");t&&n&&(b(),W.blur())});ne.addEventListener("click",b);W.addEventListener("click",e=>{e.preventDefault(),P.classList.add("is-open")});ee.addEventListener("click",b);te.addEventListener("click",e=>{e.target.classList.contains("modal-navigation-link")&&b()});const i={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination"),animalDetailsBackdrop:document.querySelector(".animal-details-backdrop")},w={page:1,limit:6},ae="https://paw-hut.b.goit.study/api",S={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},E=U.create({baseURL:ae});async function oe(e=w.page){try{const t=typeof w.limit=="number"&&w.limit>0?w.limit:6,n=typeof e=="number"&&e>=1?e:1;return(await E.get(`${S.feedbacks}`,{params:{limit:t,page:n}})).data.feedbacks}catch{return null}}function m(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Error saving to LocalStorage:",n)}}function z(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}const C="/fluffy_team/assets/sprite-C5gMIK71.svg";i.animalDetailsBackdrop.addEventListener("click",se);function F(e,t){if(e.target.nodeName!=="BUTTON")return;const r=e.target.closest("li").dataset.id,a=t.find(d=>d._id===r);if(!a)return;re(a),i.animalDetailsBackdrop.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",J),document.querySelector(".details-modal-close-btn").addEventListener("click",I),document.querySelector(".modal-adopt-btn").addEventListener("click",d=>handleAdoptBtnClick(d,a._id))}function re({_id:e,name:t,image:n,species:r,age:a,gender:o,description:l,healthStatus:d,behavior:f}){const g=`
    <div class="animal-modal" data-id="${e}">
    <button
      class="details-modal-close-btn"
      type="button"
      aria-label="Закрити модальне вікно"
    >
      <svg class="details-modal-close-btn-icon" width="24" height="24">
        <use href="${C}#icon-close"></use>
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
          <p class="animal-age">${a}</p>
          <p class="animal-gender">${o}</p>
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
  `;i.animalDetailsBackdrop.innerHTML=g}function I(){i.animalDetailsBackdrop.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",J)}function J(e){e.code==="Escape"&&I()}function se(e){e.currentTarget===e.target&&I()}let O=ie(),s=z("page"),A,p=z("categoryId")??null;document.addEventListener("DOMContentLoaded",ce);i.petsLoadMoreBtn.addEventListener("click",de);i.categoryList.addEventListener("click",le);i.petsListPagination.addEventListener("click",pe);function ie(){return window.innerWidth>=1440?9:8}function H(){return Math.ceil(A/O)}async function ce(e){B(),s=1,p=null,m("page",1),m("categoryId",null);try{const t=await ue(),n=await k();ge(t),N(n),R(),v(),i.petsList.addEventListener("click",r=>F(r,n))}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{$()}}async function le(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;p=e.target.closest("li").dataset.id,s=1;let r;B(),i.categoryList.querySelectorAll(".category-btn").forEach(o=>{o.classList.remove("current")}),e.target.classList.add("current");try{t!=="Всі"?r=await D(p,s):r=await k(),N(r),v(),R(),i.petsList.addEventListener("click",o=>F(o,r))}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{$(),m("categoryId",p),m("page",s)}}async function de(){s+=1,i.loader.classList.add("loader-center"),B();try{if(p){v();const t=await D(p,s),n=T(t);i.petsList.insertAdjacentHTML("beforeend",n)}else{v();const t=await k(s),n=T(t);i.petsList.insertAdjacentHTML("beforeend",n)}const e=i.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{$(),m("page",s),i.loader.classList.remove("loader-center")}}async function pe(e){const t=e.target.closest("button");if(!t)return;let n;const r=H();t.dataset.action==="prev"&&s>1&&(s-=1),t.dataset.action==="next"&&s<r&&(s+=1),t.dataset.page&&(s=Number(t.dataset.page)),B();try{p?n=await D(p,s):n=await k(s),N(n),R(),window.scrollTo({top:i.petsList.offsetTop-80,behavior:"smooth"})}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{$(),m("page",s)}}async function ue(e){return(await E.get(`${S.categories}`)).data}async function k(e){const t=await E.get(`${S.animals}`,{params:{limit:O,page:e}});return A=t.data.totalItems,t.data.animals}async function D(e,t){const n=await E.get(`${S.animals}?categoryId=${e}`,{params:{limit:O,page:t}});return A=n.data.totalItems,n.data.animals}function me(e){return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn" type="button">${e.name}</button>
      </li>`}function fe(e){return e.reverse().map(me).join("")}function ge(e){const t=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${fe(e)}`;i.categoryList.innerHTML=t}function ye({_id:e,name:t,image:n,species:r,age:a,gender:o,categories:l,description:d}){const f=l.map(g=>`<li class="pets-category-item">${g.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}">
     <div class="pets-img-wrapper"><img class="pets-img" src="${n}" alt="${t} - ${r}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${r}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${f}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${a}</li>
              <li class="descriprion-item">${o}</li>
            </ul>
            <p class="pets-descriprion">${d}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function T(e){return e.map(ye).join("")}function N(e){const t=T(e);i.petsList.innerHTML=t}function R(){const e=H();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${s===1?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${C}#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,s===1){for(let n=1;n<=Math.min(3,e);n+=1)t+=y(n);e>3&&(t+='<li class="dots">…</li>',t+=y(e))}else{t+=y(1),s>3&&(t+='<li class="dots">…</li>');for(let n=s-1;n<=s+1;n+=1)n>1&&n<e&&(t+=y(n));s<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=y(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${s===e?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${C}#icon-arrow-forward"></use>
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
  `}function B(){i.loader.classList.remove("loader-hidden")}function $(){i.loader.classList.add("loader-hidden")}function he(){i.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function we(){i.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function v(){const e=H();s>=e?we():he()}new V(".mySwiper",{modules:[Q,X],slidesPerView:1,wrapperClass:"about-swiper-wrapper",slideClass:"about-swiper-slide",navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"},pagination:{el:".about-swiper-pagination",clickable:!0},spaceBetween:0,loop:!1,breakpoints:{0:{slidesPerView:1}}});new Y(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(e){const t=e.querySelector(".ac-panel");if(!t)return;const n=t.getBoundingClientRect();if(n.bottom>window.innerHeight){const r=n.bottom-window.innerHeight+20;window.scrollBy({top:r,behavior:"smooth"})}}});const Le=document.querySelectorAll(".faq-question-btn");Le.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-label",t?"Закрити відповідь":"Відкрити відповідь")})});function ve(e){const t=document.querySelector(".swiper-wrapper"),n=e.map(({description:r,rate:a,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${a}"></div>     
            <p class="storie-text">${r}</p>
            <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".star-rating").forEach(r=>{new Z(r,{starType:"svg",readOnly:!0}).init()})}const K=document.querySelector(".stories-loader"),be=document.querySelector(".swiper-controls");function x(e){h.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function L(){K.classList.remove("loader")}function Se(){K.classList.add("loader")}function Ee(){be.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{Se();try{let e=await oe();if(e===null){x("Не вдалося завантажити історії. Спробуйте пізніше"),L();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){x("Нажаль, історії зараз недоступні"),L();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ve(e);const t=new V(".swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});Ee(),L()}catch{x("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".swiper-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),L()}});const u=document.getElementById("order-form"),q=document.getElementById("modal-order"),ke=q.querySelector(".modal-close-btn");function M(){q.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",Be)}function Be(e){e.key==="Escape"&&M()}function $e(e){e.target===q&&M()}ke.addEventListener("click",M);q.addEventListener("click",$e);u.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comments:r}=e.target.elements,a=t.value.trim();let o=n.value.trim();const l=r.value.trim(),d=u.querySelectorAll(".input-error"),f=u.querySelectorAll(".error-text");if(d.forEach(c=>c.classList.remove("input-error")),f.forEach(c=>c.textContent=""),a.length>32){const c=u.querySelector('.modal-form-input[type="text"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Ім'я не повинно перевищувати 32 символи.";return}const g=/^[0-9]{12}$/;if(o[0]==="+"&&(o=o.slice(1)),o.length!==12){const c=u.querySelector('.modal-form-input[type="tel"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Телефон повинен містити 12 цифр.";return}if(!g.test(o)){const c=u.querySelector('.modal-form-input[type="tel"]');c.classList.add("input-error"),c.nextElementSibling.textContent="Телефон повинен містити лише цифри.";return}if(l.length>255){const c=u.querySelector(".modal-form-textarea");c.classList.add("input-error"),c.nextElementSibling.textContent="Коментар не повинен перевищувати 255 символів.";return}const G={name:a,phone:o,animalId:"667ad1b8e4b01a2b3c4d5e55",comment:l.length>0?l:"Без коментарів"};try{const j=(await U.post("https://paw-hut.b.goit.study/api/orders",G)).data;return _.fire({title:"Дякуємо за вашу заявку!",text:`Ваш номер замовлення: ${j._id}`,icon:"success",confirmButtonText:"Закрити"}),e.target.reset(),M(),j}catch(c){_.fire({title:"Помилка!",text:"Сталася помилка при надсиланні заявки. Спробуйте ще раз пізніше.",icon:"error",confirmButtonText:"Закрити"}),console.error("Error submitting order:",c)}});
//# sourceMappingURL=index.js.map
