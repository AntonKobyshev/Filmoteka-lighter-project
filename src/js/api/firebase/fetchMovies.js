import axios from 'axios';

export default function fetchMovies() {
  const KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
  return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
  .then(function ({data}) {
    return data;
  })
  .catch(function (error) {
    console.error(error);
  });
}