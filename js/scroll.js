var shots = document.querySelectorAll('.menu li');
var resolutionPairs = [
  [1399, "75px"],
  [1260, "65px"],
  [790, "55px"],
  ["45px"]
]

function fontSizegenerator(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      if ($(document).width() > arr[i][0]) {
        screenSizeAndFs(arr[i][1]);
      }
    }
    if (i != 0 && i != arr.length - 1) {
      if ($(document).width() > arr[i][0] && $(document).width() < arr[i - 1][0]) {
        screenSizeAndFs(arr[i][1]);
      }
    }
    if (i == arr.length - 1) {
      if ($(document).width() < arr[i - 1][0]) {
        screenSizeAndFs(arr[i][0]);
      }
    }
  }
}

function screenSizeAndFs(fs) {
  let a = 200,
    b = 600;
  for (let i = 0; i < shots.length; i++) {
    setTimeout(function() {
      $(shots[i]).animate({
        fontSize: fs
      }, a, "linear");
      a += 200;
    }, b)
    b += 100;
  }
}

$('.wrapper_sunrise').scroll(function() {
  if ($('.wrapper_sunrise').scrollTop() > 300) {
    $('.sunrise').animate({
      width: '10000px'
    }, 75, "linear");
    $('.handle').addClass('moreHandle');
    $('.question').addClass('goUp');
    $('.Scroll').addClass('void');
    $('.menu').addClass('goUp2');
    $(".wrapper_sunrise").animate({
      "scrollTop": 0
    }, 1);
    $('.wrapper_sunrise').addClass('noScroll');
    $('.question').animate({
      opacity: 0.8
    }, 200, "linear");

    fontSizegenerator(resolutionPairs);

    setTimeout(function() {
      $('.smoothly').addClass('lines smoothlyOn');
      $('.handle').addClass('void');
    }, 1600)
  }
});

$('.menu li').click(function() {
  $('.sunrise,.question,.headerToHide').addClass('void');
  $('.menu,.sunRiseNav,.sunRiseUl').addClass('static gadgetVoid');
  $('.sunRiseUl').addClass('paddingTopCalibrator');
  $('.focus').css('display', 'block');
  $('header').css('height', '150px');
  $('.wrapper_sunrise').removeClass('noScroll');
  $('.wrapper_sunrise').addClass('typicalScroll');
  $('.smoothly').removeClass('lines');
  $('.smoothly').addClass('newlines');
})
