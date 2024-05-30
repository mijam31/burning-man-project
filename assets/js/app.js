var billede1 = document.getElementById("billede1");
var billede2 = document.getElementById("billede2");
var billede3 = document.getElementById("billede3");
var billede4 = document.getElementById("billede4");
var billede5 = document.getElementById("billede5");
var billede6 = document.getElementById("billede6");
var billede7 = document.getElementById("billede7");

function next() {
  if (
    billede1.classList.contains("active") &
    billede2.classList.contains("active") &
    billede3.classList.contains("active")
  ) {
    billede1.classList.remove("active");
    billede1.classList.add("none");
    billede4.classList.remove("none");
    billede4.classList.add("active");
  } else if (
    billede2.classList.contains("active") &
    billede3.classList.contains("active") &
    billede4.classList.contains("active")
  ) {
    billede2.classList.remove("active");
    billede2.classList.add("none");
    billede5.classList.remove("none");
    billede5.classList.add("active");
  } else if (
    billede3.classList.contains("active") &
    billede4.classList.contains("active") &
    billede5.classList.contains("active")
  ) {
    billede3.classList.remove("active");
    billede3.classList.add("none");
    billede6.classList.remove("none");
    billede6.classList.add("active");
  } else if (
    billede4.classList.contains("active") &
    billede5.classList.contains("active") &
    billede6.classList.contains("active")
  ) {
    billede4.classList.remove("active");
    billede4.classList.add("none");
    billede7.classList.remove("none");
    billede7.classList.add("active");
  }
}

function previous() {
  if (
    billede2.classList.contains("active") &
    billede3.classList.contains("active") &
    billede4.classList.contains("active")
  ) {
    billede1.classList.remove("none");
    billede1.classList.add("active");
    billede4.classList.remove("active");
    billede4.classList.add("none");
  } else if (
    billede3.classList.contains("active") &
    billede4.classList.contains("active") &
    billede5.classList.contains("active")
  ) {
    billede2.classList.remove("none");
    billede2.classList.add("active");
    billede5.classList.remove("active");
    billede5.classList.add("none");
  } else if (
    billede4.classList.contains("active") &
    billede5.classList.contains("active") &
    billede6.classList.contains("active")
  ) {
    billede3.classList.remove("none");
    billede3.classList.add("active");
    billede6.classList.remove("active");
    billede6.classList.add("none");
  } else if (
    billede5.classList.contains("active") &
    billede6.classList.contains("active") &
    billede7.classList.contains("active")
  ) {
    billede4.classList.remove("none");
    billede4.classList.add("active");
    billede7.classList.remove("active");
    billede7.classList.add("none");
  }
}
