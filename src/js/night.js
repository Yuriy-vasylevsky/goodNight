import '../sass/main.scss';

const btnMore = document.querySelector('.bubbly-button');
console.log('🚀 ~ file: 1.js ~ line 4 ~ btnMore', btnMore);

const p = document.querySelector('.block');
console.log('🚀 ~ file: 1.js ~ line 7 ~ p', p);

btnMore.addEventListener('click', openText);

function openText() {
  p.classList.toggle('block');
}
