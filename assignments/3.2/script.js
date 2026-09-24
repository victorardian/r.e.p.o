const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const date = new Date().toLocaleDateString("timezone");

const form = document.getElementById("dateform");
form.setAttribute("min", date);