let largeImg = document.querySelector("img.large");

let smallImgs = document.querySelectorAll("img.small");

for (let index = 0; index < smallImgs.length; index++) {
  smallImgs[index].addEventListener("click", (data) => {
    largeImg.src = data.target.src;

    document.querySelector(".active").classList.remove("active");

    data.target.classList.add("active");
  });
}
