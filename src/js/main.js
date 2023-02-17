const nav = document.querySelector('[data-navigation]');

const navToggler = document.querySelector('[data-navToggler]');

navToggler.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggler.setAttribute('aria-expanded', true);
    document.body.style.overflowY = "hidden";
  } else {
    nav.setAttribute('data-visible', false);
    navToggler.setAttribute('aria-expanded', false);
    document.body.style.overflowY = "unset";
  }
})