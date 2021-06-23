
// Stocky Menu/header //

// TAGLINE

window.onscroll = function() {
  var tagline = $('.tagline');
  if ((window.pageYOffset) > 25) {
    tagline.addClass("tagline-fade-out")  
  } 
  else if ((window.pageYOffset) <= 25) {
    tagline.removeClass("tagline-fade-out")  
    tagline.addClass(".tagline")
  }
}

// $('.code-icons').fadeIn;


// var banner = document.getElementById('main-banner');







// $(function() {
  // console.log(window.pageYOffset)
// });
