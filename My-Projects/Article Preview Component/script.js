const open = document.getElementById('open');

open.addEventListener('click',checkClass);

function addClass() {
  open.classList.add('opened');
}

function removeClass() {
  open.classList.remove('opened');

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