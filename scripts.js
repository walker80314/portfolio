$(document).ready(function () {
  setupListeners()
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
  $('#intro-ct a').hover(
    function() {
      $('#intro-ct a').stop(true, true);
      $('#intro-ct a').animate({bottom: '5px'}, 150, 'easeInCubic');
    }, 
    function() {
      $('#intro-ct a').stop(true, true);
      $('#intro-ct a').animate({bottom: '0px'}, 150, 'easeInCubic');
    }
  );

  //
  $('#sidebar-about').hover(
    function() {
      $('#sidebar-work, #sidebar-illus').stop(true, true);
      $('#sidebar-work, #sidebar-illus').animate({opacity: '0.3'}, 50, 'easeInCubic');
    }, 
    function() {
      $('#sidebar-work, #sidebar-illus').stop(true, true);
      $('#sidebar-work, #sidebar-illus').animate({opacity: '1.0'}, 50, 'easeInCubic');
    }
  );
  $('#sidebar-work').hover(
    function() {
      $('#sidebar-about, #sidebar-illus').stop(true, true);
      $('#sidebar-about, #sidebar-illus').animate({opacity: '0.3'}, 50, 'easeInCubic');
    }, 
    function() {
      $('#sidebar-about, #sidebar-illus').stop(true, true);
      $('#sidebar-about, #sidebar-illus').animate({opacity: '1.0'}, 50, 'easeInCubic');
    }
  );
  $('#sidebar-illus').hover(
    function() {
      $('#sidebar-work, #sidebar-about').stop(true, true);
      $('#sidebar-work, #sidebar-about').animate({opacity: '0.3'}, 50, 'easeInCubic');
    }, 
    function() {
      $('#sidebar-work, #sidebar-about').stop(true, true);
      $('#sidebar-work, #sidebar-about').animate({opacity: '1.0'}, 50, 'easeInCubic');
    }
  );
}
