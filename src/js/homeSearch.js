import axios from 'axios';
import Notiflix from 'notiflix';
const homeSearchForm = document.querySelector('.header__search');
const homeSearchInput = document.querySelector('.header__search-input');
const gallery = document.querySelector('.movie__gallery');
let searchQuery = '';
homeSearchForm.addEventListener('submit', movieSearch);
const KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
let page = '2';
async function movieSearch(e) {
  e.preventDefault();
  searchQuery = homeSearchInput.value;
  if (searchQuery !== '') {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}`
      )
      .then(response => {
        return response.data;
      });
    renderMovie(response);
    console.log('s ', response);
  } else {
    Notiflix.Notify.failure('Please enter the name of the movie.');
  }
}
// Search result not successful. Enter the correct movie name.
function renderMovie(response) {
  if (response.results.length === 0) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
    return;
  }
  const changedMovie = response.results.map(movieCard => {
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
        <a href="">
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

  // console.log(fuck);
  gallery.innerHTML = movieList;
}