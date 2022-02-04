const name__friendstab = document.querySelector("#name__friendstab");
const savedUsername = localStorage.getItem("username");

function paintUsername(savedUsername){
    name__friendstab.innerText = `${savedUsername}`;
}

if(savedUsername !==null) {
    paintUsername(savedUsername);
} else {
    alert("Please set your username in previous link");
};