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
    $('#team-carousel').owlCarousel({
        loop:true,
      margin:0,
      nav:true,
      dots: false,
      navText: ["<img src='../img/arrow-l.png' class='prev'>","<img src='../img/arrow-r.png' class='next'>"],
      stagePadding: 0,
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true,
      autoplaySpeed: 1000,
      items:1
    })
});