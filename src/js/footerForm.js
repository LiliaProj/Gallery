export default function footerForm(){
    validation();
    sendMessage();
    renderComments();
    removeComments();
} 

const validation = () => {
    // let comm = /^[\w\s\]+$/;
    let comm = /^[^\\\"]+$/;

    const textArea = document.getElementById("text_area");
    textArea.addEventListener('input', () => {
        if(!comm.test(textArea.value) && textArea.value.length >=50 && textArea.value.length <=200){
            console.log(comm.test(textArea.value))
            textArea.setCustomValidity("Your message may not include a slash and quotes \\ \"");
        }else if(comm.test(textArea.value) && textArea.value.length >=50 && textArea.value.length <=200){
            textArea.setCustomValidity("");  
        }
    });
}

const sendMessage = () => {
    const form =document.getElementById("footer_form");
    form.addEventListener('submit', () => {
        const comment = document.getElementById("text_area").value;
        const name = document.getElementById("name_inp").value;
        const surname = document.getElementById("surname_inp").value;
        const email = document.getElementById("email_inp").value;

        let key = 0;
        if(sessionStorage.length !== 0){

            Object.keys(sessionStorage).forEach((keyStor) => {
                if(keyStor > key){
                    key = keyStor;
                }
            });

            ++key;
        }
        let itemStor = {comment, name, surname, email};
        sessionStorage.setItem(key, JSON.stringify(itemStor));
    });
}

const renderComments = () => {
    const commBox = document.getElementById("comments");
    if(sessionStorage.length !== 0){
        commBox.style.display = "block";

        Object.keys(sessionStorage).forEach((key) => {
            let item = JSON.parse(sessionStorage.getItem(key));

            let boxItem = document.createElement("div");
            boxItem.classList.add("box_item");
            boxItem.dataset.commentNumber = `${key}`;
            commBox.append(boxItem);

            let commIcon = document.createElement("div");
            commIcon.classList.add("comm_icon");
            commIcon.innerHTML = item.name[0];
            boxItem.append(commIcon)

            let commText = document.createElement("div");
            commText.classList.add("comm_text");
            boxItem.append(commText);

            let commHead = document.createElement("div");
            commHead.classList.add("comm_head");
            commText.append(commHead);

            let commName = document.createElement("p");
            commName.classList.add("comm_name");
            commName.innerHTML = item.name + " " + item.surname;
            commHead.append(commName);

            let commEmail = document.createElement("p");
            commEmail.classList.add("comm_email");
            commEmail.innerHTML = item.email;
            commHead.append(commEmail);

            let closeButton = document.createElement("div");
            closeButton.classList.add("close_button");
            closeButton.innerHTML = "X";
            commHead.append(closeButton);

            let commMain = document.createElement("p");
            commMain.classList.add("comm_main");
            commMain.innerHTML = item.comment;
            commText.append(commMain);
        });
    }
}

const removeComments = () => {
    const comments = document.querySelectorAll(".box_item");
    comments.forEach(item => {
        item.addEventListener('click', (event)=>{
            
            if(event.target.classList.contains("close_button")){
                let confirm = window.confirm("Are you sure, that you want to delete this comment?");
                
                if(confirm){
                    let removeKey = item.dataset.commentNumber;
                    sessionStorage.removeItem(removeKey);
                    item.remove();

                    if(sessionStorage.length === 0){
                        const allSection = document.querySelector("#comments");
                        allSection.style.display = "none";
                    }
                }
            }
        });
    });
}