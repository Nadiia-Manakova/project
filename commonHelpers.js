import{i as G,g as Y,c as V,u as X,s as Z,a as J,N as B,b as U,d as Q,r as j,e as ee,f as te,h as g,j as oe}from"./assets/vendor-3c72ad27.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const a={body:document.querySelector("body"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme"};function se(){a.checkbox.checked===!0&&(localStorage.setItem(a.THEME_KEY,a.themeValueDark),a.body.classList.add("dark-theme")),a.checkbox.checked===!1&&(localStorage.getItem(a.THEME_KEY,a.themeValueLight),a.body.classList.remove("dark-theme"))}a.checkbox.addEventListener("click",se);const ne={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"};G(ne);const u=Y(),l={signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".js-sign-out-btn"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop")};l.signInBtn.addEventListener("click",ie);l.signUpBtn.addEventListener("click",le);l.signUpForm.addEventListener("submit",ae);l.signInForm.addEventListener("submit",re);l.openModalBtn.addEventListener("click",y);l.closeModalBtn.addEventListener("click",y);l.exitBtn.addEventListener("click",ue);function y(){l.modal.classList.toggle("auth-backdrop-hidden")}function ie(e){e.preventDefault(),l.signUpBox.classList.add("auth-hidden"),l.signInBox.classList.remove("auth-hidden"),l.signUpBtn.classList.remove("active"),l.signInBtn.classList.add("active")}function le(e){e.preventDefault(),l.signUpBox.classList.remove("auth-hidden"),l.signInBox.classList.add("auth-hidden"),l.signUpBtn.classList.add("active"),l.signInBtn.classList.remove("active")}function ae(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),ce(o.email,o.password,o.username)}function re(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),de(o.email,o.password)}function ce(e,t,o){V(u,e,t).then(()=>X(u.currentUser,{displayName:o})).then(()=>{console.log(`Welcome, ${o}!`),alert(`Welcome, ${o}!`),console.log(k()),y()}).catch(s=>{const n=s.code,i=s.message;console.log(n,i),alert(n,i)})}function de(e,t){Z(u,e,t).then(o=>{const s=o.user;console.log(`Welcome, ${s.displayName}!`),alert(`Welcome, ${s.displayName}!`),console.log(k()),y()}).catch(o=>{const s=o.code,n=o.message;console.log(s,n),alert(s,n)})}function ue(){J(u).then(()=>{console.log("Sign-out successful."),B.Notify.success("Sign-out successful."),console.log("Sign-out successful."),alert("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`),console.log(`An error happened. ${e}`),alert(`An error happened. ${e}`)})}function k(){const e=u.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid}}function ge(e){if(!e){console.log("No data to write!");return}const t=k();if(!t){console.log("User is not authorized!"),alert("User is not authorized!");return}const o=t.uid,s=U();Q(j(s,"users/"+o),{books:e}),console.log("Success!"),alert("Success!")}function me(){const e=k();if(!e){console.log("User is not authorized!"),alert("User is not authorized!");return}const t=e.uid,o=j(U());ee(te(o,`users/${t}`)).then(s=>{if(s.exists())return console.log(s.val()),alert("Success!"),s.val();console.log("No data available"),alert("No data available")}).catch(s=>{console.log(s),alert(s)})}const pe=document.querySelector(".dbw");pe.addEventListener("click",he);function he(){ge([])}const fe=document.querySelector(".dbr");fe.addEventListener("click",me);const N="https://books-backend.p.goit.global/books/";async function D(){const e=`${N}top-books`;return(await g.get(e)).data}const be="https://books-backend.p.goit.global/books/";async function H(e){const t=`${be}category?category=${e}`;return(await g.get(t)).data}async function ye(){const e=`${N}category-list`;return await g.get(e)}const L=document.querySelector(".list_general"),ke=document.querySelector(".title_best_sellers");let p=0,_=window.innerWidth;_>=1440?p=5:_>=720?p=3:_>=240&&(p=1);D().then(e=>{console.log(e),Se(e)}).catch(e=>{B.Notify.failure("An error occurred while fetching images. Please try again.")});function Le(){let e=this.getAttribute("data-my-attribute");H(e).then(t=>{ke.style.display="none",L.innerHTML="",F(t)}).catch(t=>{B.Notify.failure("An error occurred while fetching images. Please try again.")})}function ve(e){return e.books.slice(0,p).map(t=>{let o=O(t),s=R(t);return`
      <li class="list_five_books" data-id="${t._id}">
        <img src="${t.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function Ee(e){return e.map(t=>{const o=ve(t);return`
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${t.list_name}</p>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function Se(e){window.scrollTo(0,0);const t=Ee(e);L.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",Le)})}function we(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function O(e){return e.title.length>17?e.title.substring(0,17)+"...":e.title}function R(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function _e(e){return e.map(t=>{let o=O(t),s=R(t);return`<li class="list_five_books">
        <img src="${t.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function Be(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function F(e){window.scrollTo(0,0);const t=_e(e),o=we(e),s=Be(o,t);L.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",$e)}function $e(){location.reload()}const f={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title")};function qe(e){ye().then(t=>{const o=t.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),Ae(o)})}function Ae(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);f.filterListEl.insertAdjacentHTML("beforeend",t.join(""))}qe();f.filterListEl.addEventListener("click",Ce);function Ce(e){Me(e);const t=e.target.textContent;H(t).then(o=>{L.innerHTML="",F(o)}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function Me(e){if(e.target.tagName==="LI"){const t=f.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}f.categoriesTitle.style.color="var(--text-color)"}const Te=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],b=document.querySelector(".support-list");function xe(e){return e.map(({title:t,url:o,img:s},n)=>`<li class="support-item">
        <span class='support-item-num'>0${n+1}</span>
        <a class="support-link" target='blank' href="${o}">
          <img
            class="support-img"
            src="${s}"
            alt="${t}"
          />
        </a>
      </li>`).join("")}b.innerHTML=xe(Te);const h=document.querySelector(".support-slide-btn"),C=document.querySelector(".support-slide-down-btn"),M=document.querySelector(".support-slide-up-btn");h.addEventListener("click",Ie);function Ie(){h.classList.contains("top")?(h.classList.remove("top"),M.style.display="none",C.style.display="block",Ue()):(je(),h.classList.add("top"),C.style.display="none",M.style.display="block")}function Ue(){b.scrollTop=0}function je(){b.scrollTop=b.scrollHeight}g.defaults.baseURL="https://books-backend.p.goit.global/books/";async function T(e){const{data:t}=await g(e);return console.log(t),t}document.querySelector(".list");const x=document.querySelector("body"),m=[];document.addEventListener("click",Ne);function Ne(e){if(console.log(e),!e.target.closest(".list_five_books"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".list_five_books").dataset.id;console.log(o),T(o).then(s=>{console.log(m);const{_id:n,author:i,book_image:r,title:$,description:z,buy_links:Re}=s,v=oe.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="../img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${r}" alt="${$}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${$}</h1>
          <h2 class="modal-book-autor">${i}</h2>
          <p class="modal-book-description">${z}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li>
             <a href="" target="_blank" class="">
             <img crs="./img/amazon.png" alt="" widht="62" height="19"/> 
             </a>
            </li>
            <li>
             <a href="#" target="_blank" class="">
             <img crs="./img/apple-books.png" alt="" widht="62" height="19"/> 
             </a>
             </li>
            <li>Barnes and Noble</li>
            <li>bookshop</li>
            </div>
          </ul>
          </div>
          <button type="button" class="modal-book-btn hidden btn-add" id="add">
          add to shopping list</button>
          <button type="button" class="modal-book-btn hidden" id="remove">
          remove from the shopping list</button>
          <p class="txt-remove hidden">Сongratulations! You have added the book 
          to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",q),x.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",q),x.style.overflow="auto"}});function q(S){const w="Escape";S.code===w&&v.close()}v.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{v.close()});const A="booklist";m.push(s);const c=document.querySelector("#add"),d=document.querySelector("#remove"),E=document.querySelector(".txt-remove");T(o).then(S=>{const w=S.id;localStorage.getItem({idBook:w})!==null?(c.classList.add("hidden"),d.classList.remove("hidden")):(c.classList.remove("hidden"),d.classList.add("hidden"),E.classList.add("hidden")),c.addEventListener("click",()=>{localStorage.setItem(A,JSON.stringify(m)),c.classList.add("hidden"),d.classList.remove("hidden"),E.classList.remove("hidden")}),d.addEventListener("click",()=>{localStorage.removeItem(A,JSON.stringify(m)),c.classList.remove("hidden"),d.classList.add("hidden"),E.classList.add("hidden")})})})}const W=document.querySelector(".hamburger"),I=document.querySelector(".hamburger-overlay"),De=document.querySelector("body"),K=document.querySelector(".mob-menu-gallery-list");W.addEventListener("click",He);function He(){W.classList.toggle("close"),I.classList.toggle("active"),De.classList.add("menu-open"),document.body.classList.toggle("menu-open",I.classList.contains("active"))}D().then(e=>{const o=e.reduce((s,n)=>s.concat(n.books),[]).map(s=>`
      <li class="mob-menu-gallery-item">
        <img class="mob-menu-image" src="${s.book_image}" alt="${s.title}" >
      </li>`).join("");K.insertAdjacentHTML("afterbegin",o),Oe()}).catch(e=>{console.log(e)});function P(e,t){e+=.2*t;const o=-1e3,s=0;(e<=o||e>=s)&&(t*=-1),K.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>{P(e,t)})}function Oe(){P(0,-1)}
//# sourceMappingURL=commonHelpers.js.map
