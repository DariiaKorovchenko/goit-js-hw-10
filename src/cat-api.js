import breedSelectEl from './index.js';
export default function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.json();
    })
    .then(renderCatsList);
}

function renderCatsList(cats) {
  const markup = cats
    .map(cats => {
      return `
        <option value="${cats.id}">${cats.name}</option>`;
    })
    .join('');
  breedSelectEl.innerHTML = markup;
}
