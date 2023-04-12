import axios from 'axios';

export default function fetchGenres() {
  const KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`)
    .then(function ({ data }) {
      console.log(data);
      localStorage.setItem('genres', JSON.stringify(data));
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
}
