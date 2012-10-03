$(document).ready(function(){

  var $container = $('.media-grid-sheet');
  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector : '.box',
      columnWidth : 106
    });
  });

  $('.timeline-controls .button').click(function(e) {
    e.preventDefault();
    var classToToggle = $(this).data('toggle');
    $('.container').toggleClass(classToToggle)
  });



  $('.title-slide').on("click", function() {
    $('.media-grid-sheet').addClass('visible');
    $('.media-grid-titlebar').addClass('visible');
    $('.container').css({"height" : "480px"})
  })

  $('.media-grid-titlebar .button').on("click", function() {
    $('.media-grid-sheet').removeClass('visible');
    $('.media-grid-titlebar').removeClass('visible');
    $('.container').css({"height" : "auto"})
    window.scrollTo(0,0);
  })

  $('.geo-slide').on("click", function() {
    $('.map-sheet').addClass('visible');
    $('.map-titlebar').addClass('visible');
    $('.photo-footer').addClass('visible');
    $('.container').css({"height" : "480px"})
  })

  $('.map-titlebar .button').on("click", function() {
    $('.map-sheet').removeClass('visible');
    $('.map-titlebar').removeClass('visible');
    $('.photo-footer').removeClass('visible');
    $('.container').css({"height" : "auto"})
  })

  $('.tps-slide').on("click", function() {
    $('.tps-sheet').addClass('visible');
    $('.tps-titlebar').addClass('visible');
    $('.container').css({"height" : "480px"})
  })

  $('.tps-titlebar .button').on("click", function() {
    $('.tps-sheet').removeClass('visible');
    $('.tps-titlebar').removeClass('visible');
    $('.container').css({"height" : "auto"})
  })

  var mediaGridHeight;

  $('.box').on("click", function() {
    $('.photo-sheet').addClass('visible');
    $('.photo-footer').addClass('visible');
    $('.photo-titlebar').addClass('visible');
    mediaGridHeight = $('.media-grid-sheet').css("height");
    $('.media-grid-sheet').css({"height" : "480px"})
  });

  $('.tweet-embed').on("click", function(e) {
     e.preventDefault();
    $('.photo-sheet').addClass('visible');
    $('.photo-footer').addClass('visible');
    $('.photo-titlebar').addClass('visible');
  });

  $('.photo-titlebar .button').on("click", function() {
    $('.photo-sheet').removeClass('visible');
    $('.photo-footer').removeClass('visible');
    $('.photo-titlebar').removeClass('visible');
    if($('.media-grid-sheet').hasClass('visible')) {
      $('.media-grid-sheet').css({"height" : mediaGridHeight})
    } else {
      $('.container').css({"height" : "auto"})
    }
  })

  $('.photo-sheet').on("click", function() {
    $('.photo-footer').toggleClass('visible');
    $('.photo-titlebar').toggleClass('visible');
  });





// button clicked with data-modal=".classname"
// find sheet with .classname and add class visible
// titlebar button finds immediate parent sheet and remove class visible



  $('[data-sheet-link]').click(function(e) {
    e.preventDefault();
    var sheetClass = $(this).data('sheet-link');
    var leSheet = $("."+sheetClass).addClass('visible')
    if(leSheet.hasClass('what-sheet')) {
      leSheet.find('textarea').focus();
    }
  });

  $('.sheet .titlebar .button').click(function(e) {
    e.preventDefault();
    $(this).parents('.sheet').removeClass('visible')
  })

})

window.mySwipe = new Swipe(document.getElementById('eventSlider'), {
    callback: function(event, index, elem) {
      $('.header-pips li')
        .removeClass('active')
        .eq(index)
        .addClass('active');
    }
});


window.addEventListener('orientationchange', handleOrientation, false);
function handleOrientation() {
  scrollTo(0,0)
}

// document.addEventListener('touchmove', function(event) {
//     event.preventDefault();
//     var touch = event.touches[0];
//     alert("Touch x:" + touch.pageX + ", y:" + touch.pageY);
// }, false);