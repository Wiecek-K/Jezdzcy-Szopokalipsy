const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.mobile-menu--toggle');
const openMenuBtn = document.querySelector('.mobile-menu--open');
const navLinks = document.querySelectorAll('.nav-link');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('d-none');
});

closeMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});

navLinks.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});
