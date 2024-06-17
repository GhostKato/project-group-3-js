import{A as l,a as x,S as k,i as j,b as w}from"./assets/vendor-ba8a5d49.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{l.init({reverse:!0}),l.refresh()});document.addEventListener("DOMContentLoaded",()=>{l.init()});const E="/project-group-3-js/assets/image1-0ed2761b.jpg",M="/project-group-3-js/assets/image1_2x-740c20eb.jpg",_="/project-group-3-js/assets/image2-96ad393f.jpg",q="/project-group-3-js/assets/image2_2x-6a73ed1a.jpg",O="/project-group-3-js/assets/image3-6715c577.jpg",J="/project-group-3-js/assets/image3_2x-864f83b0.jpg",B="/project-group-3-js/assets/image4-a834c8e6.jpg",I="/project-group-3-js/assets/image4_2x-0977c6c6.jpg",N="/project-group-3-js/assets/image5-ff75b5f0.jpg",A="/project-group-3-js/assets/image5_2x-d087946a.jpg",P="/project-group-3-js/assets/image6-8f5a885d.jpg",C="/project-group-3-js/assets/image6_2x-be851095.jpg",R="/project-group-3-js/assets/image7-28da063c.jpg",T="/project-group-3-js/assets/image7_2x-f788309d.jpg",$="/project-group-3-js/assets/image8-716d397e.jpg",D="/project-group-3-js/assets/image8_2x-d80eaaa3.jpg",G="/project-group-3-js/assets/image9-869e4ba5.jpg",V="/project-group-3-js/assets/image9_2x-07a8c75b.jpg",z="/project-group-3-js/assets/image10-ea6702b8.jpg",F="/project-group-3-js/assets/image10_2x-ccbc9206.jpg",H="/project-group-3-js/assets/icons-e7e34544.svg";document.addEventListener("DOMContentLoaded",function(){const e=[{title:"Wallet webservice",image:E,image2x:M,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"Green harvest webservice",image:_,image2x:q,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-4-html-css/"},{title:"English Exellence website",image:O,image2x:J,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"mimino website",image:B,image2x:I,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"power pulse webservice",image:N,image2x:A,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"chego jewelry website",image:P,image2x:C,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"energy flow webservice",image:R,image2x:T,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"fruitbox online store",image:$,image2x:D,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"vyshyvanka vibes Landing Page",image:G,image2x:V,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"starlight studio landing page",image:z,image2x:F,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"}];let o=0;const n=3,i=document.getElementById("project-list"),t=document.getElementById("load-more");function s(){t.classList.add("loading"),setTimeout(()=>{for(let a=0;a<n;a++){if(o>=e.length){t.style.display="none";break}const r=e[o],d=document.createElement("li");d.innerHTML=`
                    <picture data-aos="zoom-in">
                        <source srcset="${r.image2x} 2x, ${r.image} 1x">
                        <img class="project-image" src="${r.image}" alt="${r.title}">
                    </picture>
                    <div class="project-info">
                        <p class="project-technologies">${r.technologies}</p>
                        <div class="project-title-btn">
                            <p class="project-title">${r.title}</p>
                            <button class="project-btn" onclick="window.open('${r.link}', '_blank')">VISIT
                                <svg class="arrow-up-right" width="14.5" height="14.5">
                                    <use xlink:href="${H}#icon-visit"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                `,i.appendChild(d),o++}t.classList.remove("loading"),l.refresh()},1500)}t.addEventListener("click",s),s()});new x(".accordion-container",{duration:1e3,showMultiple:!1,openOnInit:[0]});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-header").forEach(o=>{o.addEventListener("click",function(){const n=document.querySelectorAll(".accordion-item"),i=document.querySelectorAll(".accordion-content");n.forEach(a=>{a.classList.remove("active")}),i.forEach(a=>{a!==this.nextElementSibling&&(a.style.display="none")});const t=this.parentElement,s=this.nextElementSibling;s.style.display==="block"?s.style.display="none":(s.style.display="block",t.classList.add("active"))})})});document.addEventListener("DOMContentLoaded",()=>{l.init({offset:15})});const v=document.querySelector(".reviews-list");async function Y(){const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await w(e)).data}catch{throw new Error("Failed to fetch reviews")}}async function Z(){try{const o=(await Y()).map(i=>`
        <li class='reviews-item swiper-slide' data-aos='fade-right' id='${i._id}'>
        
          <p class='author-review'>${i.review}</p>
    <div class='author-info'>
      <img class='reviews-photo' src="${i.avatar_url}" alt="author_photo">
      <h3 class='author-name'>${i.author}</h3>
  
        </div>
  
</li>`).join("");v.insertAdjacentHTML("beforeend",o);const n=new k(".review-swiper",{watchOverflow:!0,keyboard:!0,navigation:{nextEl:".right-btn",prevEl:".left-btn"},direction:"horizontal",slidesPerView:1,breakpoints:{320:{slidesPerView:1,spaceBetween:16},360:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:32}}})}catch{v.textContent="NOT FOUND",j.warning({title:"Caution",message:"NOT FOUND ANY REVIEWS"})}}Z();const b=document.querySelector(".together-form"),p=document.getElementById("together-modal"),U=document.querySelector(".together-modal-close"),m=document.querySelector(".together-text-error"),h=document.querySelector(".together-icon-ok");document.querySelector(".together-text");b.addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".together-email").value,n=document.querySelector(".together-text").value;if(!o.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){h.style.display="none",m.style.display="block",j.info({title:"Hey!",message:"Please enter a valid email address!",position:"topCenter"});return}W(o,n)});function W(e,o){const n={email:e,comment:o};w.post("https://portfolio-js.b.goit.study/api/requests",n,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(i=>{i.data&&(p.style.display="flex",b.reset())}).catch(i=>{j.error({title:"Error",message:"Failed to submit your request. Please try again later.",position:"topCenter"})})}const K=document.querySelector(".together-email");K.addEventListener("input",function(e){const o=e.target.value.trim();o===""?(h.style.display="none",m.style.display="none"):o.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?(h.style.display="block",m.style.display="none"):(h.style.display="none",m.style.display="block")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(p.style.display="none")});U.addEventListener("click",()=>{p.style.display="none"});window.addEventListener("click",e=>{e.target===p&&(p.style.display="none")});document.addEventListener("DOMContentLoaded",()=>{l.init()});document.addEventListener("DOMContentLoaded",function(){const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let t=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}function o(t,s){let a=document.querySelector(t);if(!a){console.log("Елемент куди скролити не знайдено:",t);return}let r=a.getBoundingClientRect().top+window.pageYOffset,d=window.pageYOffset,f=null;const S=function(c,g,u,L){return c/=L/2,c<1?u/2*c*c+g:(c--,-u/2*(c*(c-2)-1)+g)},y=function(c){f===null&&(f=c);const g=c-f,u=S(g,d,r-d,s);window.scrollTo(0,u),g<s&&requestAnimationFrame(y)};requestAnimationFrame(y)}const n=document.querySelectorAll("a.scroll-to");n&&n.forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const a=this.getAttribute("href");e.modal&&e.modal.classList.contains("is-open")&&e.modal.classList.remove("is-open"),o(a,1e3)})});const i=document.querySelector(".scroll-to-top");i&&(window.addEventListener("scroll",()=>{window.scrollY>300?i.style.display="block":i.style.display="none"}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))});function Q(){const e=new Date().getHours(),o=document.getElementById("toggle-night-mode"),n=localStorage.getItem("nightMode");n?n==="enabled"?(document.body.classList.add("night-mode"),o.checked=!0):(document.body.classList.remove("night-mode"),o.checked=!1):e>=18||e<6?(document.body.classList.add("night-mode"),o.checked=!0,localStorage.setItem("nightMode","enabled")):(document.body.classList.remove("night-mode"),o.checked=!1,localStorage.setItem("nightMode","disabled"))}document.getElementById("toggle-night-mode").addEventListener("change",function(){document.body.classList.toggle("night-mode"),document.body.classList.contains("night-mode")?localStorage.setItem("nightMode","enabled"):localStorage.setItem("nightMode","disabled")});window.onload=Q;
//# sourceMappingURL=commonHelpers.js.map
