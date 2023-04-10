import dataStorage from './api/firebase/data-storage';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const data = new dataStorage({
  queue: {},
  watched: {},
});

const searchForm = document.querySelector('.header__searchlib');
const searchInput = document.querySelector('.header__searchlib-input');
const searchResult = document.querySelector('#search-result'); //куди виводити результат пошуку???

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  let queueResults = [];
  let watchedResults = [];

  for (const id in data.queue) {
    if (data.queue[id].title.toLowerCase().includes(query)) {
      queueResults.push(data.queue[id]);
    }
  }

  for (const id in data.watched) {
    if (data.watched[id].title.toLowerCase().includes(query)) {
      watchedResults.push(data.watched[id]);
    }
  }

  const results = [...queueResults, ...watchedResults];

  if (results.length > 0) {
    searchResult.innerHTML = '';
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result.title;
      searchResult.appendChild(li);
    });
  } else {
    Notify.warning('No results found');
  }
});
