export function scrollNavbar() {
  const $navigation = document.querySelector('.app-header');

  window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    if (scroll > 200) {
      $navigation.classList.add('scroll');
    } else {
      $navigation.classList.remove('scroll');
    }
  });
}
