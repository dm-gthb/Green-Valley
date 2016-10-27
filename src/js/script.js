$(document).ready(function () {
   $('#gallery').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:7
        },
        1000:{
            items:7
        }
    }
})
});

