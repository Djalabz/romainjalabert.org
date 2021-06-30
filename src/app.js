// TAGLINE AND BANNER FADE

window.onscroll = function() {


  var tagline = $('.tagline');
  var banner = $('.banner');
  var menu = $('.header-wrapper');
  var three = $('#bg')

  if ((window.pageYOffset) > 25 && (window.pageYOffset) < 400) {
    tagline.addClass("fade-out")
    banner.removeClass('fade-out')
  } 
  else if ((window.pageYOffset) <= 25) {
    tagline.removeClass("fade-out")  
  }
  else if ((window.pageYOffset) > 399) {
    banner.addClass('fade-out')
  }
  else if ((window.pageYOffset) < 600) {
    three.hide()
  }        
}

