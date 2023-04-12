import { API_service } from '../../api/apiService';

const newApiServis = new API_service();

const modalMoviemarkup = (
  poster_path,
  popularity,
  vote_average,
  vote_count,
  original_title,
  newId,
  overview
) => {
  let posterPath = ``;
  if (poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  } else {
    posterPath = 'https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png';
  }
  // console.log(posterPath);
  return `
<button class="btn__closs-modal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </button>
<div class="modal__movi-poster">
<img class="modal__movi-img" src="${posterPath}" alt="placeholder" />
<button class="poster-trailler trailer"><svg class="trailler-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
<title>play</title>
<path d="M30.662 5.003c-4.488-0.645-9.448-1.003-14.662-1.003s-10.174 0.358-14.662 1.003c-0.86 3.366-1.338 7.086-1.338 10.997s0.477 7.63 1.338 10.997c4.489 0.645 9.448 1.003 14.662 1.003s10.174-0.358 14.662-1.003c0.86-3.366 1.338-7.086 1.338-10.997s-0.477-7.63-1.338-10.997zM12 22v-12l10 6-10 6z"></path>
</svg>
</button>
</div>

<div class="modal_movi-info">
<h2 class="modal__title">${original_title}</h2>

<div class="modal__info-card info-card">
  <ul class="info-card__list-parametrs">
    <li class="info-card__item info-card__item-paramter">Vote / Votes</li>
    <li class="info-card__item info-card__item-point">
      <span>${vote_average.toFixed(
        1
      )}</span> <span>/</span> <span>${vote_count}</span>
    </li>
    <li class="info-card__item info-card__item-paramter">Popularity</li>
    <li class="info-card__item info-card__item-point">${popularity.toFixed(
      1
    )}</li>
    <li class="info-card__item info-card__item-paramter">Original Title</li>
    <li class="info-card__item info-card__item-point">${original_title}</li>
    <li class="info-card__item info-card__item-paramter">Genre</li>
    <li class="info-card__item info-card__item-point">${newId}</li>
  </ul>
  
</div>

<div class="modal__about">
  <h3 class="modal__about-title">ABOUT </h3>
  <p class="modal__about-text">
    ${overview}
  </p>
</div>
<div class="modal__buttons">
      <button type="button" class="modal__button modal__add-watched" data-watched='false' data-liery='false'>add to watched</button>
    <button type="button" class="modal__button modal__add-queue" data-queue='false' data-liery='false'>add to queue</button>
</div>


    </div>
    </div>`;
};

const list = document.querySelector('.poster-list');
const movieModal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const btnClose = document.querySelector('.btn__closs-modal');

document
  .querySelector('.movie__gallery')
  .addEventListener('click', createModal);

let cardId;

function createModal(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }

  let cardItem = document.querySelector('.movie-card');

  const cardId = (cardItem.id = event.target.closest('li').dataset.id);
  localStorage.setItem('movieId', cardId);

  newApiServis.id = cardId;
  newApiServis.fetchMovieById().then(movieById => {
    renderModalContent(movieById);
    openModal();
  });
}

function openModal() {
  modalBackdrop.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  setCloseOptionModal();
}

function setCloseOptionModal() {
  modalBackdrop.addEventListener('click', offModalForClickBeackdrop);
  document.addEventListener('keydown', offModalForEscape);
  document
    .querySelector('.btn__closs-modal')
    .addEventListener('click', offModal);
}

function renderModalContent(movieById) {
  let newId = movieById.genres
    .map(genre => {
      return genre.name;
    })
    .join(', ');

  modalBackdrop.firstElementChild.innerHTML = modalMoviemarkup(
    movieById.poster_path,
    movieById.popularity,
    movieById.vote_average,
    movieById.vote_count,
    movieById.original_title,
    newId,
    movieById.overview
  );
}

function offModalForEscape(e) {
  if (e.key === 'Escape') {
    offModal();
  }
}

function offModalForClickBeackdrop(e) {
  if (e.target === modalBackdrop) {
    offModal();
  }
}

function offModal() {
  modalBackdrop.firstElementChild.classList.add('modal');
  modalBackdrop.classList.remove('modal-open');
  document.body.style.overflow = 'overlay';

  document.removeEventListener('keydown', offModalForEscape);
  modalBackdrop.removeEventListener('keydown', offModalForClickBeackdrop);
  modalBackdrop.firstElementChild.dataset.id = '';

  movieModal.innerHTML = '';
}
