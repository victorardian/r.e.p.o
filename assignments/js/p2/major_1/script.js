const greetingtext = document.getElementById("greetingtimeofday");
const timeofdaybackground = document.getElementById("moodybackground");
const button1id = document.getElementById("button1")
const button2id = document.getElementById("button2")

function lightmode() {
    greetingtext.innerHTML = "good morning☀️";
    greetingtext.style.color = "black";
    timeofdaybackground.style.backgroundColor = "white"
    button1id.style.background = "white";
    button1id.style.color = "black";
    button2id.style.background = "white";
    button2id.style.color = "black";
}

function darkmode() {
    greetingtext.innerHTML = "good night🌙";
    greetingtext.style.color = "white";
    timeofdaybackground.style.backgroundColor = "black";
    button1id.style.background = "black";
    button1id.style.color = "white";
    button2id.style.background = "black";
    button2id.style.color = "white";
}