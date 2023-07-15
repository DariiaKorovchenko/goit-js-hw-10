import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds } from './cat-api';
import { onChangeBreed } from './cat-api';
//

const breedSelectEl = document.querySelector('.breed-select');
export const catContainerEl = document.querySelector('.cat-info');
export const loaderEl = document.querySelector('.loader');
breedSelectEl.addEventListener('change', onChangeBreed);

export const options = {
  headers: {
    'x-api-key':
      'live_asF3v4MaHmsQqiP638or4dzXTiw8grwZn92uscbMfU0B4Yfezg9VoHoUzhR3UmwA',
  },
};

fetchBreeds().then(renderCatsList).catch(onError);

function renderCatsList(cats) {
  loaderEl.classList.add('visually-hidden');
  const markup = cats
    .map(cats => {
      return `
        <option value="${cats.id}">${cats.name}</option>`;
    })
    .join('');
  breedSelectEl.innerHTML = markup;
}

export function renderCatCard(cat) {
  loaderEl.classList.add('visually-hidden');
  catContainerEl.classList.remove('visually-hidden');
  const markup = cat
    .map(cat => {
      return `
<img src="${cat.url}">
<div class="cat-card">
<p class="cat_name">${cat.breeds[0].name}</p>
<p class="cat_description">${cat.breeds[0].description}</p>
<p class="cat_temperament">Temperament: ${cat.breeds[0].temperament}</p>
</div>
      `;
    })
    .join('');
  catContainerEl.innerHTML = markup;
}

export function onError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
}
