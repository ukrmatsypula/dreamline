const burger = document.querySelector(".burger"),
  close = document.querySelector(".menu-close"),
  body = document.querySelector("body"),
  menu = document.querySelector(".nav-wrapper");

burger.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  burger.classList.toggle("burger--active");
  menu.classList.toggle("nav-wrapper--active");
});

import $ from "jquery";

$(function () {
  let header = $("header");
  let nav = $(".nav-wrapper__item-link");

  if (nav) {
    nav.on("click", function (e) {
      e.preventDefault();

      nav.each((index, item) => {
        $(item).removeClass("nav-wrapper__item-link--active");
      });

      $(this).addClass("nav-wrapper__item-link--active");

      let href = $(this).attr("href");
      let offset = $(href).offset().top;

      $("html, body").animate(
        {
          scrollTop: offset - header.outerHeight(),
        },
        500
      );
    });
  }
});
