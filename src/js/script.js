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

