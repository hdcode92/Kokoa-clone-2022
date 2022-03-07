const name__friendstab = document.querySelector(".name__friendstab");
const name__friendstab__name = document.querySelector(".name__friendstab__name");
const savedUsername = localStorage.getItem("username");

function paintUsername(savedUsername){
    name__friendstab.innerText = `${savedUsername}`;
    name__friendstab__name.innerText = `${savedUsername}`;
}


if(savedUsername !==null) {
    paintUsername(savedUsername);
} else {
    window.alert("Please set your name in Login link")
    window.location.href="index.html"
};

