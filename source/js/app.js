const nojs = document.querySelector('.nojs');
const toggle = document.querySelector('.js-toggle');
const body = document.querySelector('body');

const onToggleClick = (evt) => {
  evt.preventDefault();

  body.classList.toggle('show-menu');
}

if (nojs) {
  nojs.classList.remove('nojs');
}

if (toggle) {
  toggle.addEventListener('click', onToggleClick);
}
