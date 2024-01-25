// toggle category Browse
const showCategory = document.querySelector(".drop-cate");
const openCate = document.getElementById("openCate");

openCate.addEventListener("click", function () {
  showCategory.classList.toggle("add-cate");
});
// toggle category Browse

// open aside
const showAside = document.querySelector(".aside-tablet");
const closeAside = document.getElementById("close-side");
const openAside = document.querySelector(".openSide");
const closeFixed = document.querySelector(".close-fixed-tablet");

openAside.addEventListener("click", function () {
  showAside.classList.add("showSideTablet");
});
closeAside.addEventListener("click", function () {
  showAside.classList.remove("showSideTablet");
});
closeFixed.addEventListener("click", function () {
  showAside.classList.remove("showSideTablet");
});
// open aside
