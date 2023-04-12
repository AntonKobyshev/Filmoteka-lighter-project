import axios from 'axios';

setTimeout(() => {
  const btnTrailer = document.querySelector('.poster-trailler');
  btnTrailer.addEventListener('click', fetchTrailer);
}, 2000);



function fetchTrailer() {
  const KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
  const movieID = localStorage.getItem('movieId');
  // const movieID = '594767'
  console.log('123');
  return axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${KEY}`)
  .then(function ({data}) {
    window.open(`https://www.youtube.com/watch?v=${data.results[0].key}`);
  })
  .catch(function (error) {
    console.error(error);
  });
};