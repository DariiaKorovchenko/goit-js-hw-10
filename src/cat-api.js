import { loaderEl } from './index.js';
import { catContainerEl } from './index.js';
import { options } from './index.js';
import { renderCatCard } from './index.js';
import { onError } from './index.js';

export function fetchBreeds() {
  loaderEl.classList.remove('visually-hidden');
  return fetch('https://api.thecatapi.com/v1/breeds', options).then(
    response => {
      return response.json();
    }
  );
}

export function onChangeBreed(catId) {
  loaderEl.classList.remove('visually-hidden');
  catContainerEl.classList.add('visually-hidden');
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${catId.currentTarget.value}`,
    options
  )
    .then(response => {
      return response.json();
    })
    .then(renderCatCard)
    .catch(onError);
}
