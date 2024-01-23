document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".headerWrapper");
  const headerHeight = header.offsetHeight;
  const body = document.body;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    scrollTop > headerHeight
      ? header.classList.add("headerTransparent")
      : header.classList.remove("headerTransparent");
  });

  // BURGERBAR
  const burgerMenu = document.querySelector(".burgerMenuContainer");
  const lines = document.querySelectorAll(".line");
  const closeBackdrop = document.querySelector(".backdrop");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    lines.forEach((line) => line.classList.toggle("active"));

    body.classList.toggle("disable-scroll");
  });

  closeBackdrop.addEventListener("click", function closeSidebar() {
    burgerMenu.classList.remove("active");
    lines.forEach((line) => line.classList.remove("active"));

    body.classList.remove("disable-scroll");
  });
});
