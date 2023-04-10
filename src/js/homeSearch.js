import axios from 'axios';
import Notiflix from 'notiflix';
const homeSearchForm = document.querySelector('.header__search');
const homeSearchInput = document.querySelector('.header__search-input');
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
      .then(data => {
        return data;
      });
    console.log(response.data.results);
  } else {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
  }
}
