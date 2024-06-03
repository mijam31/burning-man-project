function købBillet() {
  document.querySelector(".billetter").style.display = "none";
  document.querySelector(".købbilletter").style.display = "block";
  document.querySelector(".billd").style.backgroundImage =
    "url(/assets/img/Burning_Man_16.jpg)";
}
let value = document.getElementById("value");
let max = 10;

function plus() {
  var numberValue = value.innerHTML;
  if (numberValue < 10) {
    numberValue++;
  }

  value.innerHTML = numberValue;
}

function minus() {
  var numberValue = value.innerHTML;
  if (numberValue > 0) {
    numberValue--;
  }
  value.innerHTML = numberValue;
}
