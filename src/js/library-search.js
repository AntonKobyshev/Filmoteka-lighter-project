import dataStorage from './api/firebase/data-storage';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// import renderMarkupByIds from './libRender';
// const searchForm = document.querySelector('.header__searchlib');
// const searchInput = document.querySelector('.header__searchlib-input');
// const libraryList = document.querySelector('.library__container-list');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchQuery = searchInput.value.trim().toLowerCase();

//   const watchedIds = JSON.parse(localStorage.getItem('watched'));
//   const queuedIds = JSON.parse(localStorage.getItem('queued'));

//   const watchedMovies = Array.isArray(watchedIds) ? watchedIds : [];
//   console.log(watchedMovies);
//   const queuedMovies = Array.isArray(queuedIds) ? queuedIds : [];

//   const movies = watchedMovies.concat(queuedMovies);

//   const filteredMovies = movies.filter(id => {
//     const title = localStorage.getItem(`title_${id}`);
//     return title && title.toLowerCase().includes(searchQuery);
//   });
//   console.log(filteredMovies);
//   libraryList.innerHTML = '';
//   // renderMarkupByIds(filteredMovies, libraryList);

//   let markup = '';
//   filteredMovies.forEach(id => {
//     const title = localStorage.getItem(`title_${id}`);
//     markup += `<li>${title}</li>`;
//   });

//   libraryList.innerHTML = markup;
// });

// const searchForm = document.querySelector('.header__searchlib');
// const searchInput = document.querySelector('.header__searchlib-input');
// const libraryContainer = document.querySelector('.library__container-list');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchQuery = searchInput.value.trim().toLowerCase();

//   const watchedObj = JSON.parse(localStorage.getItem('watched')) || {};
//   const watchedIds = Object.keys(watchedObj);
//   // console.log(watchedObj);
//   // console.log(watchedIds);
//   const queuedObj = JSON.parse(localStorage.getItem('queued')) || {};
//   const queuedIds = Object.keys(queuedObj);

//   const movies = [...watchedIds, ...queuedIds];
//   console.log(movies);
//   const filteredMovies = movies.filter(id => {
//     const title = localStorage.getItem(`title_${id}`);
//     return title && title.toLowerCase().includes(searchQuery);
//   });
//   // console.log(filteredMovies);

//   let markup = '';
//   filteredMovies.forEach(id => {
//     const title = localStorage.getItem(`title_${id}`);
//     markup += `<li>${title}</li>`;
//   });

//   libraryContainer.innerHTML = markup;
// });

// import renderMarkupByIds from './libRender';

// const searchForm = document.querySelector('.header__searchlib');
// const searchInput = document.querySelector('.header__searchlib-input');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchQuery = searchInput.value.trim().toLowerCase();

//   const watched = JSON.parse(localStorage.getItem('watched')) || {};
//   const queue = JSON.parse(localStorage.getItem('queue')) || {};

//   const movieIds = Object.keys(watched).concat(Object.keys(queue));
//   const filteredMovies = movieIds.filter(id => {
//     const title = watched[id] || queue[id];
//     return title && title.toLowerCase().includes(searchQuery);
//   });

//   renderMarkupByIds(filteredMovies);
// });

import { renderMarkupByIds, renderPagination } from './pagination';

const searchForm = document.querySelector('.header__searchlib');
const searchInput = document.querySelector('.header__searchlib-input');

if (searchForm) {
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchQuery = searchInput.value.trim().toLowerCase();

    const watched = JSON.parse(localStorage.getItem('watched')) || {};
    const queue = JSON.parse(localStorage.getItem('queue')) || {};

    const movieIds = Object.keys(watched).concat(Object.keys(queue));
    const filteredMovies = movieIds.filter(id => {
      const title = watched[id] || queue[id];

      return title && title.toLowerCase().includes(searchQuery);
    });

    //pagination
    localStorage.setItem('fetchType', 'library-search');
    localStorage.setItem('totalPages', Math.ceil(filteredMovies.length / 20));
    localStorage.setItem('librarySearch', JSON.stringify(filteredMovies));
    const totalPages = localStorage.getItem('totalPages');
    renderPagination(totalPages);
    //pagination

    renderMarkupByIds(filteredMovies);
  });
}
