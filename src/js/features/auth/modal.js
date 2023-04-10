const modalMoviemarkup = (
  poster_path,
  popularity,
  vote_average,
  vote_count,
  original_title,
  genre_ids,
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
<img src="${posterPath}" alt="placeholder" />
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
    <li class="info-card__item info-card__item-point">${genre_ids}</li>
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

document.querySelector('.header__logo').addEventListener('click', createModal);

function createModal(event) {
  renderModalContent();
  openModal();
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

function renderModalContent() {
  modalBackdrop.firstElementChild.innerHTML = modalMoviemarkup(
    '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    8358.734,
    7.323,
    100.2,
    'A FISTFUL OF LEAD',
    [878, 12, 28],
    'Set more than a decade after the events of the first film, learn the story of the Sully family'
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
