let stringnumber = "20";
let number = 10;
const sum = document.getElementById("mathsumstringandnum");
const sumraw = document.getElementById("mathsumrawdata");

let convertedstring = Number(stringnumber);

let summedup = convertedstring + number;
sum.innerHTML = (summedup)
sumraw.innerHTML = (number + stringnumber)