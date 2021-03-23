const sliderItem = document.querySelectorAll(".slider_item");
const pagination = document.querySelectorAll(".pagination");
let i = 0;

export default function(){
    const leftArrow = document.querySelector(".fa-chevron-left");
    const rightArrow = document.querySelector(".fa-chevron-right");

    setInterval(() => rightClick(), 10000);
    rightArrow.addEventListener('click', rightClick);
    leftArrow.addEventListener('click', leftClick);
}

const rightClick = ()=>{
    sliderItem[i].classList.remove("active_slider");
    pagination[i].classList.remove("active_pagination");

    if(i+1<sliderItem.length){
        i++;
    }
    else{
        i = 0;
    }

    sliderItem[i].classList.add("active_slider");
    pagination[i].classList.add("active_pagination");
}
const leftClick = ()=>{
    sliderItem[i].classList.remove("active_slider");
    pagination[i].classList.remove("active_pagination");

    if(i>0){
        i--;
    }
    else{
        i = sliderItem.length - 1;
    }

    sliderItem[i].classList.add("active_slider");
    pagination[i].classList.add("active_pagination");
}