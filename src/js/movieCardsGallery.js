import movieCardTpl from '../templates/movie-card.hbs';
import API from './api/firebase/fetchMovies';
import '../sass/components/_movie-gallery.scss';
import { data } from 'infinite-scroll';

const refs = {
    gallery: document.querySelector('.movie__gallery'),
};

API.fetchMovies().then(function (data) {
    console.log(results);
    renderMovieList(data.results);
});   

console.log(movieCardTpl);

function renderMovieList() {
      const movieCardsHtml = results.map(movieCardTpl).join('');
      refs.gallery.innerHTML = movieCardsHtml;
    };
    
 
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