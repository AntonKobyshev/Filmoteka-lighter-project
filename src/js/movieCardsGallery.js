import fetchMovies from './api/firebase/fetchMovies';
import fetchGenres from './api/firebase/fetchGenres';
import '../sass/components/_movie-gallery.scss';
import { data } from 'infinite-scroll';

const refs = {
  galleryMovies: document.querySelector('.movie__gallery'),
};   

fetchGenres().then(genreObj => renderGenre(genreObj));
fetchMovies().then(movie => renderMovie(movie));

let LOCALSTORAGE_KEY = ``;
let genreName = ``;
function renderGenre(genreObj) {
  // console.log(genreObj.genres);
  genreObj.genres.map((genre) => {

    LOCALSTORAGE_KEY = `${genre.id}`;
    genreName = `${genre.name}`;

    return localStorage.setItem(LOCALSTORAGE_KEY, genreName);
  });
}

function renderMovie(movie) {
  const changedMovie = movie.results.map(movieCard => {
    for (let i = 0; i < movieCard.genre_ids.length; i++) {
      movieCard.genre_ids[i] = localStorage.getItem(movieCard.genre_ids[i]);
    }
    return movieCard;
  });
  console.log(changedMovie);
  let movieList = changedMovie
    .map(({ poster_path, genre_ids, title, release_date }) => {
      var releaseYear = release_date.slice(0, 4);
      if (genre_ids.length > 2) {
        return `
      <div class="movie-card">
        <a href="">
          <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w400${poster_path}" loading="lazy" />
          <div class="movie-card__info">
            <p class="movie-card__title">${title}</p>
            <p class="movie-card__additionaly">${genre_ids[0]},${genre_ids[1]},Other | ${releaseYear}</p>
          </div>
        </a>
      </div>
      `;
      } else {
        return `
      <div class="movie-card">
        <a href="" class="movie-card__link">
          <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w400${poster_path}" loading="lazy" />
          <div class="movie-card__info">
            <p class="movie-card__title">${title}</p>
            <p class="movie-card__additionaly">${genre_ids} | ${releaseYear}</p>
          </div>
        </a>
      </div>
      `;
      }
    })
    .join('');

  refs.galleryMovies.insertAdjacentHTML('beforeend', movieList)
}
