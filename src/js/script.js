$(document).ready(function(){
  $(".rest-tabs-type-1").click(function () {
          $("#tab-family").addClass("rest-tabs__switcher-link--active");
      $("#tab-corporate").removeClass("rest-tabs__switcher-link--active");
  });
  $(".rest-tabs-type-2").click(function () {
          $("#tab-corporate").addClass("rest-tabs__switcher-link--active");
      $("#tab-family").removeClass("rest-tabs__switcher-link--active");
});
});

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  // toggler.classList.toggle('toggler--close');
  document.getElementById('main-nav').classList.toggle('main-nav--active');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--active');
  document.getElementById('page-header').classList.toggle('page-header--active');
  // document.getElementById('main-nav__item').classList.toggle('main-nav__item--active');
}




$(document).ready(function () {
   $('#gallery').owlCarousel({
    loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        //autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$(document).ready(function () {
   $('#offers').owlCarousel({
    loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        //nav: false, //Отключил навигацию
        //pagination: false,
        // navText: ["<", ">"],
        //navText: false,
        // dots: true,
        //autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$(document).ready(function(){
  $(".form__place-type-1").click(function () {
      $(".form__place-types-item--hotel").addClass("form__place-types-item--active");
      $(".form__place-types-item--cottage").removeClass("form__place-types-item--active");
  });
  $(".form__place-type-2").click(function () {
      $(".form__place-types-item--cottage").addClass("form__place-types-item--active");
      $(".form__place-types-item--hotel").removeClass("form__place-types-item--active");
});
});


$(document).ready(function(){
  $(".form__payment-type-1").click(function () {

      $(".form__payment-on-place-title").addClass("form__payment-on-place-title--active");
      $(".form__payment-now-title").removeClass("form__payment-now-title--active");
  });
  $(".form__payment-type-2").click(function () {
      $(".form__payment-now-title").addClass("form__payment-now-title--active");
      $(".form__payment-on-place-title").removeClass("form__payment-on-place-title--active");
});
});

$(document).ready(function(){
  $("#form__hotel-type-1").click(function () {

      $("label[for='form__hotel-type-1']").addClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-2']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-3']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-4']").removeClass("form__hotel-types-item--active");
  });
  $("#form__hotel-type-2").click(function () {
      $("label[for='form__hotel-type-2']").addClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-1']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-3']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-4']").removeClass("form__hotel-types-item--active");
});
   $("#form__hotel-type-3").click(function () {
      $("label[for='form__hotel-type-3']").addClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-1']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-2']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-4']").removeClass("form__hotel-types-item--active");
});
    $("#form__hotel-type-4").click(function () {
      $("label[for='form__hotel-type-4']").addClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-1']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-2']").removeClass("form__hotel-types-item--active");
      $("label[for='form__hotel-type-3']").removeClass("form__hotel-types-item--active");
});
});


