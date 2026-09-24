const date = new Date().toISOString().split("T")[0]
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const form = document.getElementById("dateform");
form.setAttribute("min", date);