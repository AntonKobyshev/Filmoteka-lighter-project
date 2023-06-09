import { API_service } from './api/apiService';
const newFetch = new API_service();
import { renderMovie } from './movieCardsGallery';
import * as spiner from './features/auth/spiner';
import renderFilmsMarkup from './librender/renderFilmsMarkup';

// variables
const buttonsList = document.querySelector('.pagination');
const previousPageBtn = document.querySelector('.pagination__btn--previous');
const firstPageBtn = document.querySelector('.pagination__btn--first-page');
const beforeDots = document.querySelector('.pagination__dots--start');
const btn1 = document.querySelector('.pagination__btn--1');
const btn2 = document.querySelector('.pagination__btn--2');
const btn3 = document.querySelector('.pagination__btn--3');
const btn4 = document.querySelector('.pagination__btn--4');
const btn5 = document.querySelector('.pagination__btn--5');
const afterDots = document.querySelector('.pagination__dots--end');
const lastPageBtn = document.querySelector('.pagination__btn--last-page');
const nextPageBtn = document.querySelector('.pagination__btn--next');

let currentPage = 1;
let totalPages = 1;

// event listener
buttonsList.addEventListener('click', onClick);

//select type of fetch
async function fetchByType() {
  newFetch.page = currentPage;
  if (localStorage.getItem('fetchType') == 'trending') {
    fetchTrending();
  } else if (localStorage.getItem('fetchType') == 'search') {
    fetchSearch();
  } else if (localStorage.getItem('fetchType') == 'watched') {
    fetchWatched();
  } else if (localStorage.getItem('fetchType') == 'queue') {
    fetchQueue();
  } else if (localStorage.getItem('fetchType') == 'library-search') {
    fetchSearchLibrary();
  }
}

async function fetchTrending() {
  const response = await newFetch.fetchTrending();
  renderMovie(response.results);
}

async function fetchSearch() {
  const searchQuery = localStorage.getItem('searchQuery');
  newFetch.searchQuery = searchQuery;
  const response = await newFetch.fetchMoviesByKeyword();
  renderMovie(response.results);
}

async function fetchSearchLibrary() {
  const ids = JSON.parse(localStorage.getItem('librarySearch'));
  renderMarkupByIds(ids, currentPage);
}

async function fetchWatched() {
  const ids = Object.keys(JSON.parse(localStorage.getItem('watched')));
  renderMarkupByIds(ids, currentPage);
}

async function fetchQueue() {
  const ids = Object.keys(JSON.parse(localStorage.getItem('queued')));
  renderMarkupByIds(ids, currentPage);
}

// render pagination for first load
export function renderPagination(totalPages) {
  buttonsList.style.display = 'none';
  const pagButtons = [btn1, btn2, btn3, btn4, btn5];
  pagButtons.forEach((button, index) => {
    const pageNumber = index + 1;
    if (pageNumber <= totalPages) {
      button.textContent = pageNumber;
      button.style.display = 'inline';
    } else {
      button.style.display = 'none';
    }
  });
  lastPageBtn.textContent = totalPages;
  currentPage = 1;
  updateCurrentBtn();
  localStorage.setItem('currentPage', currentPage);

  if (totalPages > 5) {
    afterDots.style.display = 'inline';
    lastPageBtn.style.display = 'inline';
    nextPageBtn.style.display = 'inline';
    previousPageBtn.style.display = 'none';
    firstPageBtn.style.display = 'none';
    beforeDots.style.display = 'none';
  } else {
    afterDots.style.display = 'none';
    lastPageBtn.style.display = 'none';
    nextPageBtn.style.display = 'none';
    previousPageBtn.style.display = 'none';
    firstPageBtn.style.display = 'none';
    beforeDots.style.display = 'none';
  }
  if (totalPages > 1) {
    buttonsList.style.display = 'flex';
  }
}

// logic of pressed button
function onClick(e) {
  if (totalPages !== localStorage.getItem('totalPages')) {
    totalPages = localStorage.getItem('totalPages');
  }
  if (e.target.classList.contains('pagination__btn')) {
    currentPage = e.target.textContent;
    updateCurrentBtn();
    fetchByType();
  }
  if (e.target.classList.contains('pagination__btn--next')) {
    btn1.textContent = Number(btn1.textContent) + 5;
    btn2.textContent = Number(btn2.textContent) + 5;
    btn3.textContent = Number(btn3.textContent) + 5;
    btn4.textContent = Number(btn4.textContent) + 5;
    btn5.textContent = Number(btn5.textContent) + 5;
    currentPage = btn1.textContent;
    checkEndPagination();
    updateCurrentBtn();
    fetchByType();
  }
  if (e.target.classList.contains('pagination__btn--previous')) {
    btn1.textContent = Number(btn1.textContent) - 5;
    btn2.textContent = Number(btn2.textContent) - 5;
    btn3.textContent = Number(btn3.textContent) - 5;
    btn4.textContent = Number(btn4.textContent) - 5;
    btn5.textContent = Number(btn5.textContent) - 5;
    currentPage = btn1.textContent;
    checkStartPagination();
    updateCurrentBtn();
    fetchByType();
  }
  if (e.target.classList.contains('pagination__btn--last-page')) {
    btn1.textContent = Number(e.target.textContent) - 4;
    btn2.textContent = Number(e.target.textContent) - 3;
    btn3.textContent = Number(e.target.textContent) - 2;
    btn4.textContent = Number(e.target.textContent) - 1;
    btn5.textContent = e.target.textContent;
    currentPage = btn5.textContent;
    checkEndPagination();
    updateCurrentBtn();
    fetchByType();
  }
  if (e.target.classList.contains('pagination__btn--first-page')) {
    btn1.textContent = 1;
    currentPage = btn1.textContent;
    checkStartPagination();
    updateCurrentBtn();
    fetchByType();
  }
  if (e.target.tagName === 'BUTTON') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// check the beginning of pagination
function checkStartPagination() {
  afterDots.style.display = 'inline';
  lastPageBtn.style.display = 'inline';
  nextPageBtn.style.display = 'inline';
  Array.from(buttonsList.children).forEach(btn => {
    if (Number(btn1.textContent) <= 1) {
      previousPageBtn.style.display = 'none';
      firstPageBtn.style.display = 'none';
      beforeDots.style.display = 'none';
      btn1.textContent = 1;
      btn2.textContent = 2;
      btn3.textContent = 3;
      btn4.textContent = 4;
      btn5.textContent = 5;
      currentPage = Number(btn1.textContent);
    }
    if (
      btn.classList.contains('pagination__btn') &&
      (btn.style.display = 'none')
    ) {
      btn.style.display = 'inline';
    }
  });
}

// check the end of pagination
function checkEndPagination() {
  previousPageBtn.style.display = 'inline';
  firstPageBtn.style.display = 'inline';
  beforeDots.style.display = 'inline';
  Array.from(buttonsList.children).forEach(btn => {
    if (
      btn.classList.contains('pagination__btn') &&
      Number(btn.textContent) == totalPages
    ) {
      afterDots.style.display = 'none';
      lastPageBtn.style.display = 'none';
      nextPageBtn.style.display = 'none';
    }
    if (
      btn.classList.contains('pagination__btn') &&
      Number(btn.textContent) > totalPages
    ) {
      btn.style.display = 'none';
    }
  });
}

// update the current btn
function updateCurrentBtn() {
  Array.from(buttonsList.children).forEach(btn => {
    if (btn.classList.contains('pagination__btn--current')) {
      btn.classList.remove('pagination__btn--current');
    }
    if (Number(btn.textContent) == currentPage) {
      btn.classList.add('pagination__btn--current');
    }
  });
}

// render movies from library
export async function renderMarkupByIds(ids, page = 1) {
  try {
    let spinerSelector = spiner.spinerInit('body');

    const startIndex = (page - 1) * 20;
    const endIndex = page * 20;
    const idsToRender = ids.slice(startIndex, endIndex);
    const arrProm = idsToRender.map(async id => {
      newFetch.id = id;
      return await newFetch.fetchMovieById();
    });
    const films = await Promise.all(arrProm);
    renderFilmsMarkup(films);
    spiner.removeSpiner(spinerSelector);
  } catch (error) {
    console.log(error);
  }
}
