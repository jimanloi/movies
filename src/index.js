import data from './data.js';
import filterMovie from './utils/filter.js';

//DOM

const dom = {
    container: document.getElementById('movies-container'),
    searchInput: document.getElementById('search-bar')
};

//Component functions
const createCard = (movie) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
  <img class="movie-poster" src="./src/${movie.src}" alt="${movie.dataName}">
  <h6>${movie.title}</h6>
  `;
    return card;
};

//Handler
const loadHandler = () => {
    let filtered = [...data.images];
    filtered = filterMovie(filtered, dom.searchInput.value);

    dom.container.innerHTML = '';

    filtered.forEach((movie) => {
        const card = createCard(movie);
        dom.container.append(card);
    });
};

//Events
window.addEventListener('load', loadHandler);
dom.searchInput.addEventListener('input', loadHandler);
