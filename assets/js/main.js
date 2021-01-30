const d = document;
/* Cards */
import {Card} from './cards.js';
import {Scroll} from './scroll.js';

// Invoked my class Card from Card(import)
const c = new Card();
// Invoked my class Scroll from Scroll(import)
const s = new Scroll();

/*====== SCROLL REVEAL SECTION ======*/
const st = new ScrollReveal({
  duration: 2500,
  reset: true,
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

d.addEventListener('DOMContentLoaded', () => {
  showMenu('nav-toggle', 'nav-menu');
  c.showCard();
  s.scrollNavbar();

  // Animacion al cargar los post de manera dinamica
  st.reveal('.hero-image-opacity', {
    distance: '0px',
    opacity: 0.1,
    duration: 2000,
  });
  st.reveal('.card-name', {origin: 'left', distance: '20px', duration: 1900});
  st.reveal('.card-svg-logo', {
    origin: 'right',
    distance: '10px',
    duration: 1800,
  });
});

/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {
  opacity: 0,
  duration: 3,
  delay: 0.5,
  y: 30,
  ease: 'expo.out',
});

gsap.from('.nav__toggle', {
  opacity: 0,
  duration: 3,
  delay: 0.7,
  y: 30,
  ease: 'expo.out',
});

gsap.from('.nav__item', {
  opacity: 0,
  duration: 3,
  delay: 0.7,
  y: 35,
  ease: 'expo.out',
  stagger: 0.2,
});

/*Text*/
gsap.from('.home__title', {
  opacity: 0,
  duration: 3,
  delay: 1.3,
  y: 35,
  ease: 'expo.out',
});

gsap.from('.home__subtitle', {
  opacity: 0,
  duration: 3,
  delay: 1.1,
  y: 35,
  ease: 'power3.inOut',
});

/*Scroll*/
gsap.from('.home__scroll', {
  opacity: 0,
  duration: 3,
  delay: 1.5,
  y: 25,
  ease: 'expo.out',
});

/*Data*/
st.reveal('.section__data', {origin: 'left', distance: '70px'});
/*Imgs*/
st.reveal('.section__img', {origin: 'left', distance: '90px', delay: 200});

st.reveal('.level-image', {origin: 'left', distance: '200px'});
st.reveal('.level', {origin: 'left', delay: 100});
st.reveal('.skills-text', {origin: 'left', distance: '70px'});
