let slideIndex = 0;

let billedeElementer = [
  document.getElementById("billede1"),
  document.getElementById("billede2"),
  document.getElementById("billede3"),
];

let billeder = [
  "/assets/img/IMG_1613.JPG",
  "/assets/img/krug-diner.jpg",
  "/assets/img/9JHZN5A.jpg",
];

function prev() {}

function next() {
  for (let i = 0; i < billedeElementer.length; i++) {
    const element = billedeElementer[i];

    if (i + 1 + slideIndex == billedeElementer.length) {
      element.src = billeder[0];
      slideIndex = 0;
    } else element.src = billeder[i + 1 + slideIndex];
  }
  slideIndex++;
}
