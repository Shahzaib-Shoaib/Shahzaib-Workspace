const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const button = document.querySelector('input');



// 2. Listen for click on open button
open.addEventListener('click', () => modal.classList.add('show-modal') );

// 3. Listen for click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal') );
shop.addEventListener('click', () => modal.classList.remove('show-modal') );

// 4. Listen for click outside of modal
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
)



