const isodate = new Date().toISOString().split("T")[0];

const form = document.getElementById("dateform");
form.setAttribute("min", isodate);