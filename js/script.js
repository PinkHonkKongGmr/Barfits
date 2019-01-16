var smoothlys = document.querySelectorAll('.smoothly');

$('.wrapper').scroll(function() {
  var edge = $('.wrapper').height() - $('img').height() + $('.wrapper').offset().top;
  console.log(edge);
  console.log($('img').offset().top);

  if ($('img').offset().top == edge) {

    $('img').addClass('capture');
    $('.question').addClass('goUp');
    $('.menu').addClass('goUp2');
    $('.wrapper').addClass('noScroll');
$('.smoothly').addClass('lines');
    $('.question').animate({
      opacity: 0.8
    }, 200, "linear");

    setTimeout(function() {
      $('#disign').animate({
        fontSize: '75px'
      }, 200, "linear");
    }, 600)

    setTimeout(function() {
      $('#safety').animate({
        fontSize: '75px'
      }, 400, "linear");
    }, 700)
    setTimeout(function() {
      $('#price').animate({
        fontSize: '75px'
      }, 600, "linear");
    }, 800)
    setTimeout(function() {
      $('#functional').animate({
        fontSize: '75px'
      }, 800, "linear");
    }, 900)

    setTimeout(function() {
      for (var i = 0; i < smoothlys.length; i++) {
        smoothlys[i].classList.add('smoothlyOn');
      }
    }, 1600)


  }
});
