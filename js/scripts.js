var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

if(!isMobile) {
    $(window).bind('resize', function(e)
    {
      if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function()
        {
        this.location.reload(false); /* false to get page from cache */
      }, 100);
    }); 
}

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
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
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


