const d = document;

import { filterCards } from './cards.js';
import { scrollNavbar } from './scroll.js';

/*====== SCROLL REVEAL SECTION ======*/
const st = new ScrollReveal({
  duration: 1800,
  reset: false,
});

/*====== MENU =====*/
const showMenu = (toggleID, navID) => {
  const $toggle = d.getElementById(toggleID),
    $nav = d.getElementById(navID);

  if ($toggle && $nav) {
    $toggle.addEventListener('click', () => {
      $nav.classList.toggle('show');
    });
  }
};

/*====== CONTENT LOADED ======*/
d.addEventListener('DOMContentLoaded', () => {
  showMenu('nav-toggle', 'nav-menu');
  scrollNavbar();
  filterCards();

  // Add hero image animation.
  st.reveal('.hero-image-opacity', {
    distance: '0px',
    opacity: 0.1,
    duration: 300,
  });
});

const $filterSelect = document.getElementById('status-filter');
$filterSelect.addEventListener('change', () => {
  filterCards();
});

/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {
  opacity: 0,
  duration: 2,
  delay: 0.3,
  y: 30,
  ease: 'expo.out',
});

gsap.from('.nav__toggle', {
  opacity: 0,
  duration: 2,
  delay: 0.4,
  y: 30,
  ease: 'expo.out',
});

gsap.from('.nav__item', {
  opacity: 0,
  duration: 2,
  delay: 0.7,
  y: 35,
  ease: 'expo.out',
  stagger: 0.2,
});

/*Text*/
gsap.from('.home__title', {
  opacity: 0,
  duration: 2,
  delay: 1.1,
  y: 35,
  ease: 'expo.out',
});

gsap.from('.home__subtitle', {
  opacity: 0,
  duration: 2,
  delay: 1.2,
  y: 35,
  ease: 'power3.inOut',
});

/*Scroll*/
gsap.from('.home__scroll', {
  opacity: 0,
  duration: 2,
  delay: 1.1,
  y: 25,
  ease: 'expo.out',
});

/*Data*/
st.reveal('.section__data', { origin: 'left', distance: '70px' });

/*Imgs*/
st.reveal('.section__img', { origin: 'left', distance: '90px', delay: 200 });
st.reveal('.level-image', { origin: 'left', distance: '200px' });
st.reveal('.level', { origin: 'left', delay: 100 });
st.reveal('.skills-text', { origin: 'left', distance: '70px' });
