const d = document;

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
});

/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');

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

/*====== SCROLL REVEAL SECTION ======*/
const st = ScrollReveal({
  duration: 2500,
  reset: true,
});

/*Data*/
st.reveal('.section__data', { origin: 'left', distance: '70px' });
/*Imgs*/
st.reveal('.section__img', { origin: 'left', distance: '90px', delay: 200 });
