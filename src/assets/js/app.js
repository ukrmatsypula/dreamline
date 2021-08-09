const burger = document.querySelector(".burger"),
  close = document.querySelector(".menu-close"),
  body = document.querySelector("body"),
  menu = document.querySelector(".nav-wrapper");

burger.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  burger.classList.toggle("burger--active");
  menu.classList.toggle("nav-wrapper--active");
});
