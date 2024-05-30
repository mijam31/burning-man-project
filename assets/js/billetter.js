function købBillet() {
  document.querySelector(".billetter").style.display = "none";
  document.querySelector(".købbilletter").style.display = "block";
  document.querySelector(".billd").style.backgroundImage =
    "url(/assets/img/Burning_Man_16.jpg)";
}

function plus() {
  if (document.getElementById("value").innerText === "1") {
    document.getElementById("value").innerText = "2";
  }
  if (document.getElementById("value").innerText === "2") {
    document.getElementById("value").innerText = "2";
  } else {
    document.getElementById("value").innerText = "1";
  }
}

function minus() {
  if (document.getElementById("value").innerText === "2") {
    document.getElementById("value").innerText = "1";
  } else {
    document.getElementById("value").innerText = "0";
  }
}
