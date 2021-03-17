export default function(){
    const accordion = document.querySelectorAll(".acc_section");
    
    accordion.forEach(section => {
        section.addEventListener('click',()=>{
            let activeAcc = document.querySelector(".acc_active");
            activeAcc.classList.remove("acc_active");
            section.classList.add("acc_active");
        });
    });
}