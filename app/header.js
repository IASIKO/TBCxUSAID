document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".headerWrapper");
    let headerHeight = header.offsetHeight;
  
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
  
      if (scrollTop > headerHeight) {
        header.classList.add("headerTransparent");
      } else {
        header.classList.remove("headerTransparent");
      }
    });
  });