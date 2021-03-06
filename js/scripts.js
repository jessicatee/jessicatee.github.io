// vertically center the logo div according to window sizes
$(window).bind('resize', function(e)
    {
       $('#logo').css({
          position:'absolute',
          left: ($(window).width() - $('#logo').outerWidth())/2,
          top: ($(window).height() - $('#logo').outerHeight())/2
        }); 
    }); 

$(window).resize();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
          // };
        });
      }
    }
  });

if ( $(window).width() > 770) {
    $(".fade").mouseenter(function() {
        $("#" + this.id).prev().css("opacity", 0.25);
    });

    $(".fade").mouseleave(function() {
        $("#" + this.id).prev().css("opacity", 1);
    });      
}

if (/Mobi/.test(navigator.userAgent)) {
    // mobile!
}


