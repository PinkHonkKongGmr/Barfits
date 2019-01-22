var headerBot_itemWithPops = document.querySelectorAll('.headerBot_itemWithPop');
var popupHBIs = document.querySelectorAll('.popupHBI');
var tiangles = document.querySelectorAll('.triangle');
for (let i = 0; i < headerBot_itemWithPops.length; i++) {
  headerBot_itemWithPops[i].onclick = function() {
    console.log('aa');
    popupHBIs[i].classList.toggle('void');
    tiangles[i].classList.toggle('void');
  }
}
