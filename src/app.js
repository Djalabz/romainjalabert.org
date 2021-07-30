// TAGLINE AND BANNER FADE

window.onscroll = function() {

  var tagline = $('.tagline');
  var banner = $('.banner');
  var headerTitle = $('.header-title');
  var three = $('#bg');

  if ((window.pageYOffset) > 25 && (window.pageYOffset) < 400) {
    tagline.addClass("fade-out")
    three.addClass("fade-out")
    banner.removeClass('fade-out')
    headerTitle.addClass("fade-out")  
  } 
  else if ((window.pageYOffset) <= 25) {
    tagline.removeClass("fade-out")
    three.removeClass("fade-out")
    headerTitle.removeClass("fade-out") 
  }

  else if ((window.pageYOffset) > 399) {
    banner.addClass('fade-out')
    three.addClass("fade-out")
  }
};

$('.logo').on("click", function() {

  var menu = $('.menu');
  var closeButton = $('')
  var logo = $('.logo')  

  if (menu.hasClass("mopen")) {
    menu.removeClass("open")
    logo.removeClass('logo-bounce')
  }

  else {
    menu.addClass("open")
    logo.addClass('logo-bounce')
  }
});
