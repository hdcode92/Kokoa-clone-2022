const loginForm = document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form__username");


function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);}

function onLoginsubmitMove(event){
    event.preventDefault();
    window.location.href ="friends.html";
};

const savedUsername = localStorage.getItem("username");

loginForm.addEventListener("submit", onLoginSubmit);

loginForm.addEventListener("submit", onLoginsubmitMove);
