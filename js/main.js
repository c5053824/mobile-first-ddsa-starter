(function () {
  const burgerMenu = document.querySelector(".burgerMenuContainer img");
  const navBar = document.querySelector("nav");

  // Toggles max-heights for animations

  if (!burgerMenu || !navBar) return; // safety check

  const toggleMenu = () => {
    navBar.classList.toggle("open");
    burgerMenu.classList.toggle("open");
  };

  const updateMenuOnResize = () => {
    console.info(window.getComputedStyle(navBar).overflow);
    if (window.getComputedStyle(navBar).overflow === "hidden") {
      // Mobile mode
      navBar.classList.remove("desktop");
      burgerMenu.style.display = "block";
    } else {
      // Desktop mode
      navBar.classList.add("desktop");
      navBar.classList.remove("open");
      burgerMenu.classList.remove("open");
      burgerMenu.style.display = "none";
    }
  };

  burgerMenu.addEventListener("click", toggleMenu); // EventListener captures the event
  window.addEventListener("resize", updateMenuOnResize);

  // initial setup
  updateMenuOnResize();
})();
