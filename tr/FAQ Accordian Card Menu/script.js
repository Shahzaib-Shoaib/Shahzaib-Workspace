// DOM 
const btn1 = document.getElementById('btn1');
const answer1 = document.getElementById('answer1');
const btn2 = document.getElementById('btn2');
const answer2 = document.getElementById('answer2');
const btn3 = document.getElementById('btn3');
const answer3 = document.getElementById('answer3');
const btn4 = document.getElementById('btn4');
const answer4 = document.getElementById('answer4');
const btn5 = document.getElementById('btn5');
const answer5 = document.getElementById('answer5');


// 1
btn1.addEventListener('click',checkClass);

function addClass() {
  answer1.classList.add('show');
  btn1.classList.add('invert');
}

function removeClass() {
  answer1.classList.remove('show');
  btn1.classList.remove('invert');

}

function checkClass() {
  const isOpened = answer1.classList.contains('show');
     
  if(isOpened) {
    removeClass();
  }
  else {
    addClass();
  }

}

// 2
btn2.addEventListener('click',checkClass2);

function addClass2() {
  answer2.classList.add('show');
  btn2.classList.add('invert');
}

function removeClass2() {
  answer2.classList.remove('show');
  btn2.classList.remove('invert');
}

function checkClass2() {
  const isOpened2 = answer2.classList.contains('show');
     
  if(isOpened2) {
    removeClass2();
  }
  else {
    addClass2();
  }

}

// 3
btn3.addEventListener('click',checkClass3);

function addClass3() {
  answer3.classList.add('show');
  btn3.classList.add('invert');
}

function removeClass3() {
  answer3.classList.remove('show');
  btn3.classList.remove('invert');
}

function checkClass3() {
  const isOpened3 = answer3.classList.contains('show');
     
  if(isOpened3) {
    removeClass3();
  }
  else {
    addClass3();
  }

}

// 4
btn4.addEventListener('click',checkClass4);

function addClass4() {
  answer4.classList.add('show');
  btn4.classList.add('invert');
}

function removeClass4() {
  answer4.classList.remove('show');
  btn4.classList.remove('invert');
}

function checkClass4() {
  const isOpened4 = answer4.classList.contains('show');
     
  if(isOpened4) {
    removeClass4();
  }
  else {
    addClass4();
  }

}

// 5
btn5.addEventListener('click',checkClass5);

function addClass5() {
  answer5.classList.add('show');
  btn5.classList.add('invert');
}

function removeClass5() {
  answer5.classList.remove('show');
  btn5.classList.remove('invert');
}

function checkClass5() {
  const isOpened5 = answer5.classList.contains('show');
     
  if(isOpened5) {
    removeClass5();
  }
  else {
    addClass5();
  }

}


