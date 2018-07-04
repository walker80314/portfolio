$(document).ready(function () {
  setupListeners()
  console.log("1")
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

    $('#intro-ct').hover(
    function() {
      $('#intro-ct').stop(true, true);
      $('#intro-ct').animate({bottom: '5px'}, 150, 'easeInCubic');
    }, 
    function() {
      $('#intro-ct').stop(true, true);
      $('#intro-ct').animate({bottom: '0px'}, 150, 'easeInCubic');
    }
  );
}
