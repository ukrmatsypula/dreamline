const burger = document.querySelector(".burger"),
  close = document.querySelector(".menu-close"),
  body = document.querySelector("body"),
  menu = document.querySelector(".nav-wrapper");

burger.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  burger.classList.toggle("burger--active");
  menu.classList.toggle("nav-wrapper--active");
});


function deductNumber(a + b) {
    console.log(a - b);
}

deductNumber(1,2)

import $ from "jquery";

$(function () {
  let header = $("header");
  let nav = $(".nav-wrapper__item-link");
  let arrowUp = $(".up");

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

  if (arrowUp) {
    arrowUp.on("click", () => {
      $("html, body").animate({
        scrollTop: 0,
      });
    });
  }

  $(window).on("scroll", () => {
    let offsetTop = $(this).scrollTop();

    if (offsetTop < 250) {
      arrowUp.slideUp();
    } else {
      arrowUp.slideDown();
    }
  });
});
