export default function(){
    const spanBurger = document.querySelector(".burger");
    spanBurger.addEventListener('click', openMenu);
}

const nav = document.querySelector("nav");
const spanLogo = document.querySelector("#logo_span");
const ul = document.querySelector("#burger_ul");

const openMenu = () => {
    nav.classList.toggle("active_burger");
        
    if(nav.classList.contains("active_burger")){
        setTimeout(()=>{
            spanLogo.style.display = "inline";
            ul.style.display = "block";
        }, 150)
    } else{
        spanLogo.style.display = "none";
        ul.style.display = "none";         
    }
}