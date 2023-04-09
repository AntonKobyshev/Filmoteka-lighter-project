import axios from 'axios';
// ($ npm i --save lodash.throttle) в консолі.
import throttle from 'lodash.throttle';

// імпортувати fetchTrailer в index.js
import fetchTrailer from './js/trailer';

// вставити ці 4 колонки в блок.js де є кнопка показу трейлера. KEY = '1ad822106312cb8004c8ffd62b3d3ebd', movieID = id-фільму
const buttonTrailer = document.querySelector('button.trailer');
const THROTTLE_DELAY = 300;
var throttled = throttle(fetchTrailer(KEY, movieID), THROTTLE_DELAY);
buttonTrailer.addEventListener('click', throttled);


function fetchTrailer(KEY, movieID) {
  // const KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
  // const movieID = '594767'

  return axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${KEY}`)
  .then(function ({data}) {
    window.open(`https://www.youtube.com/watch?v=${data.results[0].key}`);
  })
  .catch(function (error) {
    console.error(error);
  });
};

