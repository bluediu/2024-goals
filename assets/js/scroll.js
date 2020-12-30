export class Scroll {
  constructor() {
    this.$navigation = document.querySelector('.l-header');
  }

  scrollNavbar() {
    window.addEventListener('scroll', (e) => {
      let scroll = window.pageYOffset;

      if (scroll > 200) {
        this.$navigation.classList.add('scroll');
      } else {
        this.$navigation.classList.remove('scroll');
      }
    });
  }
}
