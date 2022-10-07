const nav = document.querySelector('.header__navigation');

const navToggler = document.querySelector('.header__nav__toggler');

navToggler.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggler.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-sisible', false);
    navToggler.setAttribute('aria-expanded', false);
  }
})