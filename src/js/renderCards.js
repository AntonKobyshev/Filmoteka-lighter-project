import fetchMovies from "./api/firebase/fetchMovies"
import fetchGenres from "./api/firebase/fetchGenres";

fetchGenres().then(genreObj => renderGenre(genreObj));
fetchMovies().then(movie => renderMovie(movie));

let LOCALSTORAGE_KEY = ``;
let genreName = ``;
function renderGenre(genreObj) {
  console.log(genreObj.genres);
  genreObj.genres.map((genre) => {
    LOCALSTORAGE_KEY = `${genre.id}`;
    genreName = `${genre.name}`;
    return localStorage.setItem(LOCALSTORAGE_KEY, genreName);
  });
}

function renderMovie(movie) {
  const changedGenres = movie.results.map(movieCard => {
    for(let i = 0; i < movieCard.genre_ids.length; i++){
      movieCard.genre_ids[i] = localStorage.getItem(movieCard.genre_ids[i]);
    }
    return movieCard;
  });
  console.log(changedGenres);
}