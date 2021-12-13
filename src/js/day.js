import '../sass/main.scss';

// const refs = {
//   nav: document.querySelector('.site-nav'),
//   navMob: document.querySelector('.site-nav-mobile'),
//   div1: document.querySelector(`.heart-bg`),
//   div2: document.querySelector(`.heart-main`),
// };

// refs.nav.addEventListener(`click`, () => {
//   console.log('добавили клас');
//   refs.div1.classList.add(`heart`);
//   refs.div2.classList.add(`heart`);
// });

// refs.navMob.addEventListener(`click`, () => {
//   console.log('добавили клас');
//   refs.div1.classList.add(`heart`);
//   refs.div2.classList.add(`heart`);
// });

const btnMore = document.querySelector('.bubbly-button');
console.log('🚀 ~ file: 1.js ~ line 4 ~ btnMore', btnMore);

const p = document.querySelector('.block');
console.log('🚀 ~ file: 1.js ~ line 7 ~ p', p);

btnMore.addEventListener('click', openText);

function openText() {
  p.classList.toggle('block');
}

const btnMore2 = document.querySelector('.button2');
console.log(btnMore2);
const p2 = document.querySelector('.block2');

btnMore2.addEventListener('click', openText2);
function openText2() {
  console.log(`Клик`);
  p2.classList.toggle('block2');
}
