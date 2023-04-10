import movieCardTpl from '../templates/movie-card.hbs';
import API from './fetchMovies';
import '../sass/components/_movie-gallery.scss';
import { data } from 'infinite-scroll';

const refs = {
    gallery: document.querySelector('.movie__gallery'),
};
console.log(movieCardTpl);
function renderMovieList(results) {
      const movieCardsHtml = results.map(movieCardTpl).join('');
      refs.gallery.innerHTML = movieCardsHtml;
    };
    
API.fetchMovies().then(function (results) {
    console.log(results);
    renderMovieList(results);
});    
// function renderMovieList(results) {
    
//     // let genre = [];
//     let yearRelease = release_date.slice(0, 4);         
//             // for (const id of genre_ids) {
//                 // API.fetchGenres({data}).then(function (results) {
//                 // if (id === genr_ids) {
//                 //     genre.push(genres.name).slice(2, genre.length)
//                 //     let genreName = genre.join(", ");
//                 //     return genreName + ', Other';
//                 // }
//             // }
// }
