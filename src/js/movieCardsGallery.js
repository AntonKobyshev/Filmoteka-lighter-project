// import fetchMovies from './api/firebase/fetchMovies';
import { API_service } from './api/apiService';
import fetchGenres from './api/fetchGenres';
import '../sass/components/_movie-gallery.scss';
import renderPagination from './pagination';

const apiMovies = new API_service();

const refs = {
  galleryMovies: document.querySelector('.movie__gallery'),
};

fetchGenres().then(genreObj => renderGenre(genreObj));
apiMovies.fetchTrending((allData = true)).then(movie => {
  localStorage.setItem('totalPages', movie.total_pages);
  const totalPages = localStorage.getItem('totalPages');
  renderPagination(totalPages);
  renderMovie(movie.results);
});

let LOCALSTORAGE_KEY = ``;
let genreName = ``;
function renderGenre(genreObj) {
  // console.log(genreObj.genres);
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

  refs.galleryMovies.innerHTML = movieList;
}
