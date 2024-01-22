document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".headerWrapper");
  let headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    scrollTop > headerHeight
      ? header.classList.add("headerTransparent")
      : header.classList.remove("headerTransparent");
  });
});

// BURGERBAR

const burgerMenu = document.querySelector(".burgerBarContainer");
const lines = document.querySelector(".line");
const closeBackdrop = document.querySelector(".backdrop");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  lines.classList.toggle("active");
});

closeBackdrop.addEventListener("click", function closeSidebar() {
  burgerMenu.classList.remove("active");
});
