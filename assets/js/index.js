const body = document.querySelector("body");
const buttonNav = document.querySelector(".toggle-menu-nav");
const listNav = document.querySelector(".list-nav");
const nav = document.querySelector("nav");
const btnDarkMode = document.querySelector("#btn-dark-mode");
const iconDarkMode = document.querySelector("#icon-dark-mode");
const html = document.querySelector("html");

setInterval(() => {
  if ($(window).width() <= 768) {
    listNav.classList.add("small-device");
    $(".toggle-menu-nav").show(500);
  } else {
    $(".toggle-menu-nav").hide(500);
    listNav.classList.remove("small-device");
  }
}, 500);

buttonNav.addEventListener("click", () => {
  listNav.classList.toggle("active");
});

$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");

  $(".page-scroll").removeClass("active");
  $(this).addClass("active");
  $(".ul-menu").removeClass("active");
  $("body").removeClass("menu-active");

  var elemenTujuan = $(tujuan);

  $("html , body").animate({
    scrollTop: elemenTujuan.offset().top - 120,
  });

  e.preventDefault();
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  if (wScroll >= 300) {
    if (html.classList.contains("dark")) {
      nav.classList.add("dark:bg-slate-800");
      nav.classList.remove("bg-white");
    } else {
      nav.classList.remove("dark:bg-slate-800");
      nav.classList.add("bg-white");
    }
    nav.classList.add("nav-active");
    nav.classList.remove("bg-transparent");
  } else {
    if (html.classList.contains("dark")) {
      nav.classList.remove("dark:bg-slate-800");
    } else {
      nav.classList.remove("bg-white");
    }
    nav.classList.remove("nav-active");
    nav.classList.add("bg-transparent");
  }
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".detail-project").hide(500);
$("#project1").on("click", () => {
  $("#project1").toggleClass("fa-window-minimize");
  $("#project1").toggleClass("fa-info-circle");
  $("#detailp-1").toggle(500);
});
$("#project2").on("click", () => {
  $("#project2").toggleClass("fa-window-minimize");
  $("#project2").toggleClass("fa-info-circle");
  $("#detailp-2").toggle(500);
});
$("#project3").on("click", () => {
  $("#project3").toggleClass("fa-window-minimize");
  $("#project3").toggleClass("fa-info-circle");
  $("#detailp-3").toggle(500);
});
$("#project4").on("click", () => {
  $("#project4").toggleClass("fa-window-minimize");
  $("#project4").toggleClass("fa-info-circle");
  $("#detailp-4").toggle(500);
});

btnDarkMode.addEventListener("click", () => {
  html.classList.toggle("dark");
  iconDarkMode.classList.toggle("fa-moon");
  iconDarkMode.classList.toggle("fa-sun");
});
