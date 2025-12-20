import{a as V,i as h,S as W,N as oe,P as ae,A as re,R as se,b as F}from"./assets/vendor-DfcDIlvk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const s={categoryList:document.querySelector(".js-category-list"),petsList:document.querySelector(".js-pets-list"),loader:document.querySelector(".js-loader"),petsLoadMoreBtn:document.querySelector(".js-pets-load-more-btn"),petsListPagination:document.querySelector(".pagination"),animalDetailsBackdrop:document.querySelector(".animal-details-backdrop")},w={page:1,limit:6},P="/fluffy_team/assets/sprite-C5gMIK71.svg";let ie=null;function le(){return ie}s.animalDetailsBackdrop.addEventListener("click",ue);function ce(e){const n=loadFromLS("animals").find(o=>o._id===e);if(!n)return;de(n),s.animalDetailsBackdrop.classList.add("is-open"),document.body.style.overflow="hidden";const r=document.querySelector(".details-modal-close-btn");window.addEventListener("keydown",z),r.addEventListener("click",O);const a=document.querySelector(".modal-adopt-btn");a&&a.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("open-order-modal",{detail:{animalId:n._id}}))})}function de({_id:e,name:t,image:n,species:r,age:a,gender:o,description:u,healthStatus:l,behavior:c}){const p=`
    <div class="animal-modal" data-id="${e}" tabindex="-1" role="dialog">
    <button
      class="details-modal-close-btn"
      type="button"
      aria-label="Закрити модальне вікно"
    >
      <svg class="details-modal-close-btn-icon" width="24" height="24">
        <use href="${P}#icon-close"></use>
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
          <p class="descriprion-text">${u}</p>
        </div>
        <div class="description-section">
          <h3 class="descriprion-title">Здоров'я:</h3>
          <p class="descriprion-text">${l}</p>
        </div>
        <div class="description-section last">
          <h3 class="descriprion-title">Поведінка:</h3>
          <p class="descriprion-text">${c}</p>
        </div>
        <button class="modal-adopt-btn" type="button">Взяти додому</button>
      </div>
    </div>
  </div>
  `;s.animalDetailsBackdrop.innerHTML=p}function O(){s.animalDetailsBackdrop.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",z)}function z(e){e.code==="Escape"&&O()}function ue(e){e.currentTarget===e.target&&O()}function J(e){e.focus();const n=e.querySelectorAll(`
    a[href],
    button:not([disabled]),
    textarea,
    input,
    select,
    [tabindex]:not([tabindex="-1"])
  `),r=n[0],a=n[n.length-1];e.addEventListener("keydown",o=>{o.key==="Tab"&&(o.shiftKey&&document.activeElement===r&&(o.preventDefault(),a.focus()),!o.shiftKey&&document.activeElement===a&&(o.preventDefault(),r.focus()))})}const Y=document.querySelector(".header-burger-menu"),I=document.querySelector(".header-modal"),pe=document.querySelector(".modal-close-button");document.querySelector(".modal-navigation-item");const me=document.querySelector(".modal-navigation-list"),fe=document.querySelector(".modal-button");function B(e){I.classList.remove("is-open"),document.body.classList.remove("is-modal-open"),document.removeEventListener("keydown",G),Y.blur()}function G(e){e.key==="Escape"&&B()}fe.addEventListener("click",B);Y.addEventListener("click",e=>{e.preventDefault(),I.classList.add("is-open"),document.body.classList.add("is-modal-open"),document.addEventListener("keydown",G),J(I)});pe.addEventListener("click",B);me.addEventListener("click",e=>{e.target.classList.contains("modal-navigation-link")&&B()});const ge="https://paw-hut.b.goit.study/api",$={animals:"/animals",categories:"/categories",orders:"/orders",feedbacks:"/feedbacks"},q=V.create({baseURL:ge});async function ye(e=w.page){try{const t=typeof w.limit=="number"&&w.limit>0?w.limit:6,n=typeof e=="number"&&e>=1?e:1;return(await q.get(`${$.feedbacks}`,{params:{limit:t,page:n}})).data.feedbacks}catch{return null}}function g(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Error saving to LocalStorage:",n)}}function Q(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from LocalStorage:",t),null}}let H=ve(),i=Q("page"),N,m=Q("categoryId")??null;document.addEventListener("DOMContentLoaded",he);s.petsLoadMoreBtn.addEventListener("click",Le);s.categoryList.addEventListener("click",be);s.petsListPagination.addEventListener("click",we);s.petsList.addEventListener("click",Se);function ve(){return window.innerWidth>=1440?9:8}function R(){return Math.ceil(N/H)}async function he(e){C(),i=1,m=null,g("page",1),g("categoryId",null);try{const t=await Ee(),n=await x();$e(t),U(n),_(),k()}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{M()}}async function be(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;m=e.target.closest("li").dataset.id,i=1;let r;C(),s.categoryList.querySelectorAll(".category-btn").forEach(o=>{o.classList.remove("current")}),e.target.classList.add("current");try{t!=="Всі"?r=await j(m,i):r=await x(),U(r),k(),_()}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{M(),g("categoryId",m),g("page",i)}}async function Le(){i+=1,s.loader.classList.add("loader-center"),C();try{if(m){k();const t=await j(m,i),n=D(t);s.petsList.insertAdjacentHTML("beforeend",n)}else{k();const t=await x(i),n=D(t);s.petsList.insertAdjacentHTML("beforeend",n)}const e=s.petsList.querySelector("li");if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.height,behavior:"smooth"})}}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{M(),g("page",i),s.loader.classList.remove("loader-center")}}async function we(e){const t=e.target.closest("button");if(!t)return;let n;s.loader.classList.add("loader-center"),C();const r=R();t.dataset.action==="prev"&&i>1&&(i-=1),t.dataset.action==="next"&&i<r&&(i+=1),t.dataset.page&&(i=Number(t.dataset.page));try{m?n=await j(m,i):n=await x(i),U(n),_(),window.scrollTo({top:s.petsList.offsetTop-80,behavior:"smooth"});const a=s.petsList.querySelector("li");a&&a.focus()}catch{h.error({title:"Помилка",message:"Щось пішло не так",position:"topRight"})}finally{M(),s.loader.classList.remove("loader-center"),g("page",i)}}function Se(e){const t=e.target.closest(".pets-button");if(!t)return;const n=t.closest("li");if(!n)return;const r=n.dataset.id;ce(r)}async function Ee(e){return(await q.get(`${$.categories}`)).data}async function x(e){const t=await q.get(`${$.animals}`,{params:{limit:H,page:e}});return N=t.data.totalItems,t.data.animals}async function j(e,t){const n=await q.get(`${$.animals}?categoryId=${e}`,{params:{limit:H,page:t}});return N=n.data.totalItems,n.data.animals}function ke(e){return`
     <li class="category-item" data-id="${e._id}">
        <button class="category-btn" data-text="${e.name}" type="button">${e.name}</button>
      </li>`}function Be(e){return e.reverse().map(ke).join("")}function $e(e){const t=` <li class="category-item">
        <button class="category-btn current" type="button">Всі</button>
      </li>${Be(e)}`;s.categoryList.innerHTML=t}function qe({_id:e,name:t,image:n,species:r,age:a,gender:o,categories:u,description:l}){const c=u.map(p=>`<li class="pets-category-item">${p.name}</li>`).join("");return`
     <li class="pets-item" data-id="${e}" tabindex="0">
     <div class="pets-img-wrapper"><img class="pets-img" src="${n}" alt="${t} - ${r}" /></div>
        <div class="pets-list-wrapper">
          <p class="pets-category">${r}</p>
          <h3 class="pets-name">${t}</h3>
          <ul class="pets-category-list">${c}</ul>
          <div class="descriprion-wrapper">
            <ul class="descriprion-list">
              <li class="descriprion-item">${a}</li>
              <li class="descriprion-item">${o}</li>
            </ul>
            <p class="pets-descriprion">${l}</p>
            <button class="pets-button" type="button">Дізнатись більше</button>
          </div>
        </div>
      </li>`}function D(e){return e.map(qe).join("")}function U(e){const t=D(e);s.petsList.innerHTML=t,g("animals",e)}function _(){const e=R();if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${i===1?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${P}#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,i===1){for(let n=1;n<=Math.min(3,e);n+=1)t+=y(n);e>3&&(t+='<li class="dots">…</li>',t+=y(e))}else{t+=y(1),i>3&&(t+='<li class="dots">…</li>');for(let n=i-1;n<=i+1;n+=1)n>1&&n<e&&(t+=y(n));i<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=y(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${i===e?"disabled":""}>
        <svg class="arrow-icon" aria-hidden="true" width="24" height="24">
          <use href="${P}#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,s.petsListPagination.innerHTML=t}function y(e){return`
    <li>
      <button
        class="pagination-btn ${i===e?"current":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}function C(){s.loader.classList.remove("loader-hidden")}function M(){s.loader.classList.add("loader-hidden")}function xe(){s.petsLoadMoreBtn.classList.remove("pets-load-more-btn-hidden")}function Ce(){s.petsLoadMoreBtn.classList.add("pets-load-more-btn-hidden")}function k(){const e=R();i>=e?Ce():xe()}let S=null;function v(e){var u,l;let t=null,n=null;const r=(u=e==null?void 0:e.navigation)==null?void 0:u.prevEl,a=(l=e==null?void 0:e.navigation)==null?void 0:l.nextEl;r&&(t=Array.isArray(r)?r[0]:r),a&&(n=Array.isArray(a)?a[0]:a);const o=(e==null?void 0:e.el)||(e==null?void 0:e.$el)||null;if(o){const c=o.closest(".about-swiper-parent");c&&(t=t||c.querySelector(".about-swiper-button-prev"),n=n||c.querySelector(".about-swiper-button-next"))}if(t){const c=!!(e!=null&&e.isBeginning);t.disabled=c,t.classList.toggle("swiper-button-disabled",c),t.setAttribute("aria-disabled",c?"true":"false")}if(n){const c=!!(e!=null&&e.isEnd);n.disabled=c,n.classList.toggle("swiper-button-disabled",c),n.setAttribute("aria-disabled",c?"true":"false")}}function Me(){const e=document.querySelector(".mySwiper");if(!e)return null;if(e.swiper)try{e.swiper.destroy(!0,!0)}catch{}const t=e.closest(".about-swiper-parent");if(!t)return null;const n=t.querySelector(".about-swiper-button-next"),r=t.querySelector(".about-swiper-button-prev"),a=t.querySelector(".about-swiper-pagination"),o=new W(e,{modules:[oe,ae],loop:!1,wrapperClass:"about-swiper-wrapper",slideClass:"about-swiper-slide",pagination:{el:a,clickable:!0},slidesPerView:1,spaceBetween:0,breakpoints:{768:{slidesPerView:1}},on:{init(l){v(l)},slideChange(){v(o)}}}),u=(l,c,p)=>{if(!l)return;const L=l[c];if(L)try{l.removeEventListener("click",L)}catch{}l[c]=p,l.addEventListener("click",p)};return u(n,"_aboutUsNext",l=>{l.preventDefault(),o.slideNext(),v(o)}),u(r,"_aboutUsPrev",l=>{l.preventDefault(),o.slidePrev(),v(o)}),v(o),o}function K(){if(S){try{S.destroy(!0,!0)}catch{}S=null}S=Me()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K();new re(".accordion-container",{showMultiple:!1,collapse:!0,duration:300,onOpen(e){const t=e.querySelector(".ac-panel");if(!t)return;const n=t.getBoundingClientRect();if(n.bottom>window.innerHeight){const r=n.bottom-window.innerHeight+20;window.scrollBy({top:r,behavior:"smooth"})}}});const Te=document.querySelectorAll(".faq-question-btn");Te.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-label",t?"Закрити відповідь":"Відкрити відповідь")})});function Ae(e){const t=document.querySelector(".swiper-wrapper"),n=e.map(({description:r,rate:a,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${a}"></div>     
            <p class="storie-text">${r}</p>
            <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".star-rating").forEach(r=>{new se(r,{starType:"svg",readOnly:!0}).init()})}const X=document.querySelector(".stories-loader"),Pe=document.querySelector(".swiper-controls");function A(e){h.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function E(){X.classList.remove("loader")}function Ie(){X.classList.add("loader")}function De(){Pe.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{Ie();try{let e=await ye();if(e===null){A("Не вдалося завантажити історії. Спробуйте пізніше"),E();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){A("Нажаль, історії зараз недоступні"),E();const n=document.querySelector(".swiper-wrapper");n&&(n.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}Ae(e);const t=new W(".swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});De(),E()}catch{A("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".swiper-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),E()}});let Z;const f=document.getElementById("order-form"),b=document.getElementById("modal-order"),Oe=b.querySelector(".modal-close-btn");window.addEventListener("open-order-modal",e=>{var r;const t=(r=e==null?void 0:e.detail)==null?void 0:r.animalId;if(!t)return;Z=t,s&&s.animalDetailsBackdrop&&s.animalDetailsBackdrop.classList.remove("is-open"),document.body.style.overflow="",b.classList.remove("visually-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",ee);const n=document.querySelector(".modal-order");J(n)});function T(){b.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",ee)}function ee(e){e.key==="Escape"&&T()}function He(e){e.target===b&&T()}Oe.addEventListener("click",T);b.addEventListener("click",He);f.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comments:r}=e.target.elements,a=t.value.trim();let o=n.value.trim();const u=r.value.trim(),l=f.querySelectorAll(".input-error"),c=f.querySelectorAll(".error-text");if(l.forEach(d=>d.classList.remove("input-error")),c.forEach(d=>d.textContent=""),a.length>32){const d=f.querySelector('.modal-form-input[type="text"]');d.classList.add("input-error"),d.nextElementSibling.textContent="Ім'я не повинно перевищувати 32 символи.";return}const p=/^[0-9]{12}$/;if(o[0]==="+"&&(o=o.slice(1)),o.length!==12){const d=f.querySelector('.modal-form-input[type="tel"]');d.classList.add("input-error"),d.nextElementSibling.textContent="Телефон повинен містити 12 цифр.";return}if(!p.test(o)){const d=f.querySelector('.modal-form-input[type="tel"]');d.classList.add("input-error"),d.nextElementSibling.textContent="Телефон повинен містити лише цифри.";return}if(u.length>255){const d=f.querySelector(".modal-form-textarea");d.classList.add("input-error"),d.nextElementSibling.textContent="Коментар не повинен перевищувати 255 символів.";return}const L={name:a,phone:o,animalId:Z,comment:u.length>0?u:"Без коментарів"};try{const te=(await V.post("https://paw-hut.b.goit.study/api/orders",L)).data;return T(),F.fire({title:"Дякуємо за вашу заявку!",icon:"success",confirmButtonText:"Закрити"}).then(()=>{const ne=le()}),e.target.reset(),te}catch(d){F.fire({title:"Помилка!",text:"Сталася помилка при надсиланні заявки. Спробуйте ще раз пізніше.",icon:"error",confirmButtonText:"Закрити"}),console.error("Error submitting order:",d)}});function Ne(){const e=document.getElementById("scrollTopBtn"),t=document.querySelector("#hero");if(!e||!t)return;const n=t.offsetHeight;window.addEventListener("scroll",()=>{window.scrollY>n?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}window.addEventListener("load",Ne);
//# sourceMappingURL=index.js.map
