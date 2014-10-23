$(document).ready(function() {
  $('.slider').superSlider({
    timer_on: false,
    mobile_width: 500,
    desktop_width: 900,
    left_offset_desktop: 64.5,
    pagination: true,
    callback: function(slide) {
      $('.largebg').css('background-image', 'url(' + $(slide).find('img').attr('src') + ')')
    }
  });

  $(window).scroll(function() {
    $('[class*="bg_"]').each(function() {
      $(this).css('background-image', $(this).css('background-image'))
    });

  })
  

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});