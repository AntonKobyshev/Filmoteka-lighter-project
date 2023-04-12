import { API_service } from './api/apiService';
const newFetch = new API_service();
import { renderMovie } from './movieCardsGallery';

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
const totalPages = localStorage.getItem('totalPages');
// let totalPages = 1;

// event listener
buttonsList.addEventListener('click', onClick);

//select type of fetch !!!NOT FINISHED---TEST VERSION
async function fetchByType() {
  newFetch.page = currentPage;
  const response = await newFetch.fetchTrending();
  renderMovie(response.results);
}

// render pagination for first load
export default function renderPagination(totalPages) {
  lastPageBtn.textContent = totalPages;
  if (totalPages <= 5) {
    afterDots.style.display = 'none';
    lastPageBtn.style.display = 'none';
    nextPageBtn.style.display = 'none';
    Array.from(buttonsList.children).forEach(btn => {
      if (
        btn.classList.contains('pagination__btn') &&
        Number(btn.textContent) > totalPages
      ) {
        btn.style.display = 'none';
      }
    });
  }
}

// logic of pressed button
function onClick(e) {
  if (e.target.classList.contains('pagination__btn')) {
    currentPage = e.target.textContent;
    updateCurrentBtn();
    fetchByType();
  } else if (e.target.classList.contains('pagination__btn--next')) {
    btn1.textContent = Number(btn1.textContent) + 5;
    btn2.textContent = Number(btn2.textContent) + 5;
    btn3.textContent = Number(btn3.textContent) + 5;
    btn4.textContent = Number(btn4.textContent) + 5;
    btn5.textContent = Number(btn5.textContent) + 5;
    currentPage = btn1.textContent;
    checkEndPagination();
    updateCurrentBtn();
    fetchByType();
    return;
  } else if (e.target.classList.contains('pagination__btn--previous')) {
    btn1.textContent = Number(btn1.textContent) - 5;
    btn2.textContent = Number(btn2.textContent) - 5;
    btn3.textContent = Number(btn3.textContent) - 5;
    btn4.textContent = Number(btn4.textContent) - 5;
    btn5.textContent = Number(btn5.textContent) - 5;
    currentPage = btn1.textContent;
    checkStartPagination();
    updateCurrentBtn();
    fetchByType();
  } else if (e.target.classList.contains('pagination__btn--last-page')) {
    btn1.textContent = Number(e.target.textContent) - 4;
    btn2.textContent = Number(e.target.textContent) - 3;
    btn3.textContent = Number(e.target.textContent) - 2;
    btn4.textContent = Number(e.target.textContent) - 1;
    btn5.textContent = e.target.textContent;
    currentPage = btn5.textContent;
    checkEndPagination();
    updateCurrentBtn();
    fetchByType();
  } else if (e.target.classList.contains('pagination__btn--first-page')) {
    btn1.textContent = 1;
    currentPage = btn1.textContent;
    checkStartPagination();
    updateCurrentBtn();
    fetchByType();
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
