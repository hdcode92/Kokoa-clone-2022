const inputMsg = document.querySelector("#inputmsg");
const reply = inputMsg.querySelector("input");
const replys = document.querySelector("#replys");
const MSGS_KEY = "msgs";

let msgs = [];



function paintReply(newReply) {
    const date = new Date();
    const hours =String(date.getHours()).padStart(2, "0");
    const minutes =String(date.getMinutes()).padStart(2, "0");

const li = document.createElement("li");
const span = document.createElement("span");
const spantime = document.createElement("span");
span.className = "message__bubble"
spantime.className = "message__time"
li.appendChild(spantime);
li.appendChild(span);
span.innerText = newReply;
spantime.innerText = (`${hours}:${minutes}`);
replys.appendChild(li);
}

function replyMsg(event) {
    event.preventDefault();
    const newReply = reply.value;
/*console.log(reply.value); */
    reply.value = "";
/*    console.log(newReply, reply.value); */
    paintReply(newReply);
}

inputMsg.addEventListener("submit", replyMsg)