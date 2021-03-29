export default function animgallery(){
    visibilityOfGallery();
    modalOfGallery();
}

const imgCont = document.querySelectorAll(".img_container");

const visibilityOfGallery = () => {
    window.addEventListener('scroll', ()=>{
        imgCont.forEach(item =>{
            if(item.getBoundingClientRect().top - window.innerHeight <= 0){
                item.classList.add("img_visible");
            }
        });
    });
}

const modalOfGallery = () => {
    const modal = document.querySelector(".hidden_modal");
    const modalImg = document.getElementById("modal_img");

    imgCont.forEach((item, key) =>{
        item.addEventListener('click', ()=>{
            modal.classList.add("visible_modal");
            modalImg.src =`src/img/photo1${key}.jpg`;
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove("visible_modal");
    });
}