(()=>{"use strict";console.log("Ok"),window.addEventListener("load",(()=>{!function(){let e=document.querySelector(".burger"),t=document.querySelector("nav"),l=document.querySelector("#logo_span"),o=document.querySelector("#burger_ul");e.addEventListener("click",(()=>{console.log(1),t.classList.toggle("activ_burger"),t.classList.contains("activ_burger")?setTimeout((()=>{l.style.display="inline",o.style.display="block"}),150):(l.style.display="none",o.style.display="none")}))}()}))})();