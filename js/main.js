$(document).ready(function() {

    $('.nav-collapse').on('click', function(){
        $('nav ul').toggleClass('showing');
        $('#nav-icon').toggleClass('open');
    });

	$('#logos').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});