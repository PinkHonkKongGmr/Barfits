var humburger = document.querySelectorAll('.humburger');
var mobMunu = document.querySelector('.mobMunu')


var line1 = document.querySelectorAll('.ln1');
var line2 = document.querySelectorAll('.ln2');
var line3 = document.querySelectorAll('.ln3');

var tohide = document.querySelectorAll('.displayResolutionHide')



for (let i = 0; i < humburger.length; i++) {
  humburger[i].addEventListener('click', function humburgerToggle() {
    humburger[i].classList.toggle('on');
    line1[i].classList.toggle('cross');
    line2[i].classList.toggle('void');
    line3[i].classList.toggle('cross2');
    tohide[i].classList.toggle('displayResolutionHide');
    mobMunu.classList.toggle('hallowDarknessMyOldFriend');
  });
}
