export default function fetchgrid(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        inpData(data);
    })
    .catch((err) => {
        console.log("API has no access\n"+ err);
    });
}

const inpData = (data) => {
    const namePost = document.querySelectorAll(".name");
    const mailPost = document.querySelectorAll(".mail");
    const bodyPost = document.querySelectorAll(".post");

    namePost.forEach((item, key) => {
        item.innerHTML = data[key].name;
    });
    mailPost.forEach((item, key) => {
        item.innerHTML = data[key].email;
        item.href = `mailto:${data[key].email}`;
    });
    bodyPost.forEach((item, key) => {
        for(let i=0; i<data[key].body.length; i++){
            if(i===0){
                item.innerHTML = data[key].body[i].toUpperCase();
            } else{
                item.innerHTML += data[key].body[i];
            }
        }
    });
}