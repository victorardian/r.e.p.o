const greetingtext = document.getElementById("greetingtimeofday");
const timeofdaybackground = document.getElementById("moodybackground");

function greetmorning() {
    greetingtext.innerHTML = "Goedemorgen!";
    greetingtext.style.color = "black";
    timeofdaybackground.style.backgroundColor = "lightyellow"
}

function greetafternoonornoon() {
    greetingtext.innerHTML = "Goedemiddag!";
    greetingtext.style.color = "black";
    timeofdaybackground.style.backgroundColor = "lightsalmon";
}

function greetevening() {
    greetingtext.innerHTML = "Goedenavond!";
    greetingtext.style.color = "white";
    timeofdaybackground.style.backgroundColor = "darkblue";
}