'use strict';

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

openModal.addEventListener('click', () => {
  modal.showModal();
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 20) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {  
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');  
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});