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

  function createNavList() {
    const screenWidth = window.innerWidth;

    const navContainer = document.querySelector(".navList");
    const sidebarContainer = document.querySelector(".sidebarNavList");

    if (navContainer && sidebarContainer) {
      navContainer.innerHTML = "";
      sidebarContainer.innerHTML = "";

      screenWidth > 600
        ? createListItems(navContainer, "pageName")
        : createListItems(sidebarContainer, "sidebarPageName");
    }
  }

  function createListItems(container, className) {
    const pages = ["მთავარი", "TBC IT", "TBC x USAID", "რისკები"];

    pages.forEach((page) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = "#";
      a.textContent = page;
      a.classList.add(className);

      page === "TBC x USAID" && a.classList.add("activePage");

      li.appendChild(a);
      container.appendChild(li);
    });
  }

  createNavList();

  window.addEventListener("resize", createNavList);
});
