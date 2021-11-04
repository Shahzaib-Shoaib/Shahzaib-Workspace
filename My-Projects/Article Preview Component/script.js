const open = document.getElementById('open');
const box = document.getElementById('box');

open.addEventListener('click',checkClass);

function addClass() {
  open.classList.add('opened');
  box.classList.add('show');
}

function removeClass() {
  open.classList.remove('opened');
  box.classList.remove('show');

}

function checkClass() {
    const isOpened = open.classList.contains('opened');

    if(isOpened) {
        removeClass();
      }
      else {
        addClass();
}};

/*const isOpened = answer1.classList.contains('show');
     
  if(isOpened) {
    removeClass();
  }
  else {
    addClass();
  } */