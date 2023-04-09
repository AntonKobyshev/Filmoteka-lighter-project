import { getData } from './api/firebase/api';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('#search-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = document.querySelector('#search-input');
  const query = searchInput.value;

  search(query);
});

export function searchMovies(query) {
  return getData().then(data => {
    const watched = data?.watched || [];
    const queue = data?.queue || [];

    // search in watched movies
    const watchedResults = watched.filter(movie => {
      const title = movie.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });

    // search in movies to watch
    const queueResults = queue.filter(movie => {
      const title = movie.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });

    return { watched: watchedResults, queue: queueResults };
  });
}

function renderSearchResults(results) {
  const resultList = document.querySelector('#search-results');
  resultList.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const resultItem = document.createElement('li');
      resultItem.textContent = result.title;
      resultList.appendChild(resultItem);
    });
  } else {
    Notify.warning('No results found.');
  }
}
