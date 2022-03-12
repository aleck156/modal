'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const toggleHidden = function (objectName) {
  objectName.classList.toggle('hidden');
};

btnOpenModal.forEach(element => {
  element.addEventListener('click', () => {
    toggleHidden(modal);
    toggleHidden(overlay);
  });
});

overlay.addEventListener('click', () => {
  toggleHidden(modal);
  toggleHidden(overlay);
});

btnCloseModal.addEventListener('click', () => {
  toggleHidden(modal);
  toggleHidden(overlay);
});

document.onkeydown = function (evt) {
  if (evt.key === 'Escape' && !overlay.classList.contains('hidden')) {
    toggleHidden(modal);
    toggleHidden(overlay);
  }
};
