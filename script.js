'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const toggleHidden = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpenModal.forEach(element => {
  element.addEventListener('click', () => {
    toggleHidden();
  });
});

overlay.addEventListener('click', () => {
  toggleHidden();
});

btnCloseModal.addEventListener('click', () => {
  toggleHidden();
});

document.onkeydown = function (evt) {
  if (evt.key === 'Escape' && !overlay.classList.contains('hidden')) {
    toggleHidden();
  }
};
