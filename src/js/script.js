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




// $(document).ready(function () {
//    $('#gallery').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:7
//         },
//         1000:{
//             items:7
//         }
//     }
// })
// });

