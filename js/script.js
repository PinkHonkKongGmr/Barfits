var shots = document.querySelectorAll('.menu li');

function screenSizeAndFs(fs) {
  let a = 200;
  b = 600;
  for (let i = 0; i < shots.length; i++) {

    setTimeout(function() {
      $(shots[i]).animate({
        fontSize: fs
      }, a, "linear");
      a += 200;
      b += 100;
    }, b)
  }
}

$('.wrapper').scroll(function() {
  var edge = $('.wrapper').height() - $('img').height() + $('.wrapper').offset().top;
  if ($('img').offset().top == edge) {

    $('img').animate({
      width: '10000px'
    }, 75, "linear");;
    $('.question').addClass('goUp');
    $('.menu').addClass('goUp2');
    $('.wrapper').addClass('noScroll');

    $('.question').animate({
      opacity: 0.8
    }, 200, "linear");
    if ($(document).width() > 1399) {
      screenSizeAndFs('75px');
    }
    if ($(document).width() > 1260 && $(document).width() < 1399) {
      screenSizeAndFs('65px');
    }
    if ($(document).width() > 768 && $(document).width() < 1260) {
      screenSizeAndFs('50px');
    }
    if ($(document).width() < 790) {
      console.log('yes');
      screenSizeAndFs('45px');
    }
    setTimeout(function() {
      $('.smoothly').addClass('lines smoothlyOn');
    }, 1600)
  }
});
