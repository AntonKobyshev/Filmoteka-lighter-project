// import fetchMovies from './api/firebase/fetchMovies';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { API_service } from './api/apiService';
import fetchGenres from './api/fetchGenres';
import '../sass/components/_movie-gallery.scss';
import { renderPagination } from './pagination';
import * as spiner from './features/auth/spiner';
const apiMovies = new API_service();

const refs = {
  galleryMovies: document.querySelector('.movie__gallery'),
};

async function init() {
  try {
    let spinerSelector = spiner.spinerInit('.gallery');
    // Loading.pulse({
    //   svgColor: 'orange',
    // });

    const genreObj = await fetchGenres();
    renderGenre(genreObj);
    const movie = await apiMovies.fetchTrending();
    localStorage.setItem('fetchType', 'trending');
    localStorage.setItem('totalPages', movie.total_pages);
    const totalPages = localStorage.getItem('totalPages');
    renderPagination(totalPages);
    renderMovie(movie.results);

    spiner.removeSpiner(spinerSelector);
  } catch (error) {
    console.log(error);
  }
}

init();

let LOCALSTORAGE_KEY = ``;
let genreName = ``;
function renderGenre(genreObj) {
  genreObj.genres.map(genre => {
    LOCALSTORAGE_KEY = `${genre.id}`;
    genreName = `${genre.name}`;

    return localStorage.setItem(LOCALSTORAGE_KEY, genreName);
  });
}

export function renderMovie(movie) {
  const changedMovie = movie.map(movieCard => {
    for (let i = 0; i < movieCard.genre_ids.length; i++) {
      movieCard.genre_ids[i] = localStorage.getItem(movieCard.genre_ids[i]);
    }
    return movieCard;
  });
  let movieList = changedMovie
    .map(({ poster_path, genre_ids, title, release_date, id }) => {
      var releaseYear = release_date.slice(0, 4);
      if (genre_ids.length > 2) {
        return `
      <li class="movie-card" data-id="${id}">
          <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="There is no poster for this movie" loading="lazy" />
          <div class="movie-card__info">
            <p class="movie-card__title">${title}</p>
            <p class="movie-card__additionaly">${genre_ids[0]},${genre_ids[1]},Other | ${releaseYear}</p>
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

  refs.galleryMovies.innerHTML = movieList;
}
