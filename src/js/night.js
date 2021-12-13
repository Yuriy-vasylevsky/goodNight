import '../sass/main.scss';

const btnMore = document.querySelector('.bubbly-button');

const p = document.querySelector('.block');

btnMore.addEventListener('click', openText);

function openText() {
  console.log(`Клик`);
  p.classList.toggle('block');
}
