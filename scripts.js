(function() {
  // Change CSS values too.
  var UNDERLINE_AMIATION_TIME_MS = 1000;
  var isUnderlineAnimated = false;

  $(document).ready(function () {
    setupListeners();
    setupScrollListener();


  });

  function setupListeners() {
    //
    $('#intro-amika').hover(
      function() {
        $('#intro-amika').stop(true, true);
        $('#intro-amika').animate({bottom: '5px'}, 150, 'easeInCubic');
      }, 
      function() {
        $('#intro-amika').stop(true, true);
        $('#intro-amika').animate({bottom: '0px'}, 150, 'easeInCubic');
      }
    );

    //
    $('#intro-ct-a').hover(
      function() {
        $('#intro-ct-a').stop(true, true);
        $('#intro-ct-a').animate({bottom: '5px'}, 150, 'easeInCubic');
      }, 
      function() {
        $('#intro-ct-a').stop(true, true);
        $('#intro-ct-a').animate({bottom: '0px'}, 150, 'easeInCubic');
      }
    );

    //
    $('.navbar-about').hover(
      function() {
        $('.navbar-work, .navbar-illus').stop(true, true);
        $('.navbar-work, .navbar-illus').animate({opacity: '0.3'}, 50, 'easeInCubic');
      }, 
      function() {
        $('.navbar-work, .navbar-illus').stop(true, true);
        $('.navbar-work, .navbar-illus').animate({opacity: '1.0'}, 50, 'easeInCubic');
      }
    );
    $('.navbar-work').hover(
      function() {
        $('.navbar-about, .navbar-illus').stop(true, true);
        $('.navbar-about, .navbar-illus').animate({opacity: '0.3'}, 50, 'easeInCubic');
      }, 
      function() {
        $('.navbar-about, .navbar-illus').stop(true, true);
        $('.navbar-about, .navbar-illus').animate({opacity: '1.0'}, 50, 'easeInCubic');
      }
    );
    $('.navbar-illus').hover(
      function() {
        $('.navbar-work, .navbar-about').stop(true, true);
        $('.navbar-work, .navbar-about').animate({opacity: '0.3'}, 50, 'easeInCubic');
      }, 
      function() {
        $('.navbar-work, .navbar-about').stop(true, true);
        $('.navbar-work, .navbar-about').animate({opacity: '1.0'}, 50, 'easeInCubic');
      }
    );
  }

  function setupScrollListener() {
    $(window).scroll(function() {

      // Handle 'insta-famous' underline animation. Animate once 'more info' is visible.
      if (!isUnderlineAnimated) {
        if (isVisible($('#insta-famous').get(0))) {
          isUnderlineAnimated = true;
          $('.underline-svg-path').css('visibility', 'visible');
          $('.underline-svg-path').addClass('underline-svg-path-animation');
          $('#instagram-handle').css('visibility', 'visible'); 
          $('#instagram-handle')
          setTimeout(
            function(){ 
              $('#instagram-handle').fadeTo(200, 1); 
            }, 
            UNDERLINE_AMIATION_TIME_MS
          );
        }
      }


    });
  }

  /* Util functions */
  function isVisible(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
  }

})();
