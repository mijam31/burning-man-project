document.addEventListener("DOMContentLoaded", () => {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
  });

  splide.mount();
});
