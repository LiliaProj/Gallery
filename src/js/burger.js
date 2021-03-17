export default function(){
    let spanBurger = document.querySelector(".burger");
    let nav = document.querySelector("nav");
    let spanLogo = document.querySelector("#logo_span");
    let ul = document.querySelector("#burger_ul");
    spanBurger.addEventListener('click', ()=>{
        console.log(1);
        nav.classList.toggle("activ_burger");
        
        if(nav.classList.contains("activ_burger")){
            setTimeout(()=>{
                spanLogo.style.display = "inline";
                ul.style.display = "block";
            }, 150)
        } else{
            spanLogo.style.display = "none";
            ul.style.display = "none";         
        }
    });
}