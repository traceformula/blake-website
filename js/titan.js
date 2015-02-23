$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function(){
      $('body,html').animate({scrollTop:0},1000);
    });
});