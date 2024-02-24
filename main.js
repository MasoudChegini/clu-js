let butClear = document.getElementById("clear");
const numberButtons = document.querySelectorAll("[data-number]");
let view = document.getElementById("disZoom");
let sum = document.getElementById("jam");

function masoud() {
  view.innerHTML += "1";
}
function clearClick() {
  view.innerHTML = "";
}

function clickTow() {
  view.innerHTML += "2";
}
function clickTree() {
  view.innerHTML += "3";
}
function clickFour() {
  view.innerHTML += "4";
}
function clickFive() {
  view.innerHTML += "5";
}
function clickSix() {
  view.innerHTML += "6";
}
function clickSeven() {
  view.innerHTML += "7";
}
function clickEight() {
  view.innerHTML += "8";
}
function clickNine() {
  view.innerHTML += "9";
}
function clickZero() {
  view.innerHTML += "0";
}
function clickDat() {
  view.innerHTML += ".";
}
function sumSum() {
  view.innerHTML += "+";
}
function min() {
  view.innerHTML += "-";
}
function taghsim() {
  view.innerHTML += "/";
}
function equal() {
  view.innerHTML = eval(view.innerHTML);
}
