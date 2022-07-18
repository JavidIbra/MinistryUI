$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    animateIn: "linear",
  });

  $(".topbar__left").on("click", function () {
    $(".lang-list").toggleClass("open-list");
    $(".topbar__left").toggleClass("bck");
  });

  $(".click").on("click", function () {
    $(".burger-div").toggleClass("open");
  });

  $(".burger_close-btn").on("click", function () {
    $(".burger-div").toggleClass("open");
  });

  $(".burger_close-btn").on("click", function () {
    $(".burger-right-block-item").toggleClass("active-item");
  });

  $(".searching").on("click", function () {
    $(".header__search").toggleClass("opened");
    $(".searching").addClass("none");
  });

  $(".header__close-btn").on("click", function () {
    $(".header__search").toggleClass("opened");
    $(".searching").removeClass("none");
  });
});
