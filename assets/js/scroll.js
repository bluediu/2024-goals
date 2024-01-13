/**
 * Add or removes a CSS class to the navigation element based on
 * the scroll position.
 */
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
