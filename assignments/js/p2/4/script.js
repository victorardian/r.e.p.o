let ageprompt = prompt("wanneer ben je geboren?")
const calculatedagetext = document.getElementById("agecalculator")

if (ageprompt != null) {
    let age = 2026 - ageprompt;
    calculatedagetext.innerHTML = "Je bent ongeveer " + age + " jaar oud.";
}