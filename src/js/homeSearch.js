import Notiflix from 'notiflix';

import * as spiner from './features/auth/spiner';

import { API_service } from './api/apiService';
const newFetch = new API_service();
import { renderPagination } from './pagination';

const homeSearchForm = document.querySelector('.header__search');
const homeSearchInput = document.querySelector('.header__search-input');
const gallery = document.querySelector('.movie__gallery');
let searchQuery = '';
let totalPages = '';
// homeSearchForm.addEventListener('submit', movieSearch);
if (homeSearchForm) {
  homeSearchForm.addEventListener('submit', movieSearch);
}

async function movieSearch(e) {
  e.preventDefault();
  searchQuery = homeSearchInput.value;
  if (searchQuery !== '') {
    let spinerSelector = spiner.spinerInit('.gallery');
    newFetch.page = 1;
    newFetch.searchQuery = searchQuery;
    const response = await newFetch.fetchMoviesByKeyword();

    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('fetchType', 'search');
    localStorage.setItem('totalPages', response.total_pages);
    totalPages = localStorage.getItem('totalPages');
    renderPagination(localStorage.getItem('totalPages'));
    renderMovie(response.results);
    spiner.removeSpiner(spinerSelector);
  } else {
    Notiflix.Notify.failure('Please enter the name of the movie.');
  }
}

// Search result not successful. Enter the correct movie name.
function renderMovie(response) {
  if (response.length === 0) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
    return;
  }
  const changedMovie = response.map(movieCard => {
    for (let i = 0; i < movieCard.genre_ids.length; i++) {
      movieCard.genre_ids[i] = localStorage.getItem(movieCard.genre_ids[i]);
    }
    return movieCard;
  });
  console.log(changedMovie);
  let movieList = changedMovie
    .map(({ poster_path, genre_ids, title, release_date, id }) => {
      var releaseYear = release_date.slice(0, 4);
      if (genre_ids.length > 2) {
        return `
      <li class="movie-card" data-id="${id}">
          <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="There is no poster for this movie" loading="lazy" />
          <div class="movie-card__info">
            <p class="movie-card__title">${title}</p>
            <p class="movie-card__additionaly">${genre_ids[0]},&nbsp;${genre_ids[1]},&nbsp;Other | ${releaseYear}</p>
          </div>
      </li>
      `;
      } else {
        return `
      <li class="movie-card" data-id="${id}">
          <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="There is no poster for this movie" loading="lazy" />
          <div class="movie-card__info">
            <p class="movie-card__title">${title}</p>
            <p class="movie-card__additionaly">${genre_ids} | ${releaseYear}</p>
          </div>
      </li>
      `;
      }
    })
    .join('');

  // console.log(fuck);
  gallery.innerHTML = movieList;
}
