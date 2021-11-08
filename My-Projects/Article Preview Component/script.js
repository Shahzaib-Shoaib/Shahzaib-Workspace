const open = document.getElementById('open');
const box = document.getElementById('box');
const mobilesection = document.getElementById('bio-mobile');
const profile = document.getElementById('profile');


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

open.addEventListener('click',checkClassMobile);

function addClassMobile() {
  mobilesection.classList.add('show-mobile');
  profile.classList.add('hide')
}

function removeClassMobile() {
  mobilesection.classList.remove('show-mobile');
  profile.classList.remove('hide')


}

function checkClassMobile() {
    const isOpenedMobile = mobilesection.classList.contains('show-mobile');

    if(isOpenedMobile) {
        removeClassMobile();
      }
      else {
        addClassMobile();
}};

/*const isOpened = answer1.classList.contains('show');
     
  if(isOpened) {
    removeClass();
  }
  else {
    addClass();
  } */