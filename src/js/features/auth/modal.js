import { API_service } from '../../api/apiService';
import { initializeApp } from 'firebase/app';
import dataStorage from '../../api/firebase/data-storage';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { renderMarkupByIds } from '../../pagination';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../api/firebase/firebaseConfig';
// import { onQueueBtnClick } from '../../libRender'

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const libraryBtnRef = document.querySelector('.button');
const userData = {
  queue: {},
  watched: {},
};
new dataStorage(userData);

const newApiServis = new API_service();

const modalMoviemarkup = (
  poster_path,
  popularity,
  vote_average,
  vote_count,
  original_title,
  genresId,
  overview,
  id
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
    <li class="info-card__item info-card__item-point">${genresId}</li>
  </ul>
  
</div>

<div class="modal__about">
  <h3 class="modal__about-title">ABOUT </h3>
  <p class="modal__about-text">
    ${overview}
  </p>
</div>
<div class="modal__buttons">
    <button type="button" class="modal__button modal__add-watched" data-id="${id}" data-watched='false' data-liery='false'>add to watched</button>
    <button type="button" class="modal__button modal__add-queue" data-id="${id}" data-queue='false' data-liery='false'>add to queue</button>
</div>
    <button type="button" class="modal__button modal__watch-traier" data-queue='false' data-liery='false'>watch trailer</button>



    </div>
    </div>`;
};

const list = document.querySelector('.poster-list');
const movieModal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
// const watchedModalBtn = document.querySelector('.modal__add-watched');
// const queueModalBtn = document.querySelector('.modal__add-queue');
const btnClose = document.querySelector('.btn__closs-modal');
const ulMain = document.querySelector('.movie__gallery');
const ulLibrary = document.querySelector('.library__container-list');

movieModal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal__watch-traier')) {
    onYoutubeBtnClick();
    // console.log('message');
  }
  if (e.target.classList.contains('modal__add-watched')) {
    onWatchedModalBtnClick(e);
  }
  if (e.target.classList.contains('modal__add-queue')) {
    onQueueModalBtnClick(e);
  }
});

// document
//   .querySelector('.movie__gallery')
//   .addEventListener('click', createModal);

if (ulMain) {
  ulMain.addEventListener('click', createModal);
} else if (ulLibrary) {
  ulLibrary.addEventListener('click', createModal);
}

let cardId;

function createModal(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }

  let cardItem = document.querySelector('.movie-card');

  cardItem = event.target.closest('li').dataset.id;
  localStorage.setItem('movieId', cardItem);

  newApiServis.id = cardItem;
  // console.log(cardItem);
  // console.log(newApiServis.id);
  newApiServis.fetchMovieById().then(movieById => {
    renderModalContent(movieById);
    openModal();

    onAuthStateChanged(auth, user => {
      if (user) {
        const libDataBaseWatched = `users/${user.uid}/lib/watched/`;
        const libDataBaseQueue = `users/${user.uid}/lib/queue/`;
        const watchedModalBtn = document.querySelector('.modal__add-watched');
        const queueModalBtn = document.querySelector('.modal__add-queue');

        get(ref(db, libDataBaseWatched))
          .then(snapshot => {
            if (snapshot.exists()) {
              const ids = Object.keys(snapshot.val());
              // console.log(ids);
              // console.log(ids.includes(newApiServis.id));
              if (ids.includes(newApiServis.id)) {
                // console.log(watchedModalBtn);
                if (watchedModalBtn) {
                  watchedModalBtn.classList.add('is-active');
                  // queueModalBtn.setAttribute('disabled', 'true');
                  queueModalBtn.disabled = true;
                  // queueModalBtn.style.backgroundColor = 'gray';
                  watchedModalBtn.textContent = 'Remove';
                }
              }
            }
          })
          .catch(console.error);

        get(ref(db, libDataBaseQueue))
          .then(snapshot => {
            if (snapshot.exists()) {
              const ids = Object.keys(snapshot.val());
              if (ids.includes(newApiServis.id)) {
                if (queueModalBtn) {
                  queueModalBtn.classList.add('is-active');
                  watchedModalBtn.setAttribute('disabled', 'true');
                  // watchedModalBtn.style.backgroundColor = 'gray';
                  queueModalBtn.textContent = 'Remove';
                }
              }
            }
          })
          .catch(console.error);
      } else {
        const watchedModalBtn = document.querySelector('.modal__add-watched');
        const queueModalBtn = document.querySelector('.modal__add-queue');

        watchedModalBtn.classList.add('visually-hidden');
        queueModalBtn.classList.add('visually-hidden');
      }
    });
  });
}

function openModal() {
  modalBackdrop.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  localStorage.setItem('isRemoveFilm', 'no');
  setCloseOptionModal();
}

function setCloseOptionModal() {
  modalBackdrop.addEventListener('click', offModalForClickBeackdrop);
  document.addEventListener('keydown', offModalForEscape);
  document
    .querySelector('.btn__closs-modal')
    .addEventListener('click', offModal);

  // youtubePreview.addEventListener('click', onYoutubeBtnClick);
}

function renderModalContent(movieById) {
  // console.log(movieById);
  let genresId = movieById.genres
    .map(genre => {
      return genre.name;
    })
    .join(', ');

  movieModal.dataset.id = movieById.id;
  movieModal.insertAdjacentHTML(
    'afterbegin',
    modalMoviemarkup(
      movieById.poster_path,
      movieById.popularity,
      movieById.vote_average,
      movieById.vote_count,
      movieById.original_title,
      genresId,
      movieById.overview,
      movieById.id
    )
  );
  // modalBackdrop.firstElementChild.innerHTML = modalMoviemarkup(
  //   movieById.poster_path,
  //   movieById.popularity,
  //   movieById.vote_average,
  //   movieById.vote_count,
  //   movieById.original_title,
  //   newId,
  //   movieById.overview
  // );
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

  if (
    localStorage.getItem('fetchType') == 'watched' ||
    localStorage.getItem('fetchType') == 'queue' ||
    localStorage.getItem('fetchType') == 'library-search'
  ) {
    if (localStorage.getItem('isRemoveFilm') == 'yes') {
      window.location.reload();
    }
  }
}

//Плеєр
function onYoutubeBtnClick() {
  newApiServis.movieId = movieModal.dataset.id;

  newApiServis
    .fetchYoutube()
    .then(data => {
      let results = data.results[0];
      let key = results.key;
      return key;
    })
    .then(key => iframeRender(key));
}

function iframeRender(key) {
  const BASE_YOUTUBE_URL = 'https://www.youtube.com/embed/';
  const instance = basicLightbox.create(
    `<button type="button" id="youtube-close-btn"><i class="fa-regular fa-circle-xmark"></i></button><iframe
      src="${BASE_YOUTUBE_URL}${key}"?autoplay=1&mute=1&controls=1>
      </iframe>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('#youtube-close-btn').onclick =
          instance.close;
      },
    }
  );

  instance.show();
}

function onWatchedModalBtnClick(e) {
  const filmName = document.querySelector('.modal__title');
  const watchedModalBtn = document.querySelector('.modal__add-watched');
  // console.log(watchedModalBtn);
  const queueModalBtn = document.querySelector('.modal__add-queue');

  const userData = {
    queue: {},
    watched: {},
  };
  const firebase = new dataStorage(userData);

  if (watchedModalBtn.classList.contains('is-active')) {
    userData.watched[e.target.dataset.id] = filmName.textContent;
    firebase.delWatched();
    watchedModalBtn.textContent = 'Add to watched';
    localStorage.setItem('isRemoveFilm', 'yes');
    // queueModalBtn.setAttribute('disabled', 'false');
    queueModalBtn.disabled = false;
    // queueModalBtn.style.backgroundColor = 'green';

    if (libraryBtnRef.classList.contains('current')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/watched/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                renderMarkupByIds(ids);
              } else {
                if (filmsListRef) {
                  filmsListRef.innerHTML = '';
                }
                // addErrorStyles();
              }
            })
            .catch(console.error);
        }
      });
    }
  } else {
    firebase.watched = {
      [e.target.dataset.id]: filmName.textContent,
    };
    // queueModalBtn.setAttribute('disabled', 'true');
    queueModalBtn.disabled = true;
    // queueModalBtn.style.backgroundColor = 'gray';

    if (libraryBtnRef.classList.contains('button')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/watched/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                renderMarkupByIds(ids);
              }
            })
            .catch(console.error);
        }
      });
    }
    localStorage.setItem('isRemoveFilm', 'no');
    watchedModalBtn.textContent = 'Remove';
  }

  watchedModalBtn.classList.toggle('is-active');
}

function onQueueModalBtnClick(e) {
  const filmName = document.querySelector('.modal__title');
  const queueModalBtn = document.querySelector('.modal__add-queue');
  const watchedModalBtn = document.querySelector('.modal__add-watched');
  // console.log(queueModalBtn);
  const userData = {
    queue: {},
    watched: {},
  };
  const firebase = new dataStorage(userData);

  if (queueModalBtn.classList.contains('is-active')) {
    userData.queue[e.target.dataset.id] = filmName.textContent;
    firebase.delQueue();
    queueModalBtn.textContent = 'Add to queue';
    localStorage.setItem('isRemoveFilm', 'yes');
    // watchedModalBtn.setAttribute('disabled', 'false');
    watchedModalBtn.disabled = false;
    // watchedModalBtn.style.backgroundColor = 'green';

    // watchedModalBtn.setAttribute('disabled', 'true');
    // watchedModalBtn.style.backgroundColor = "gray";

    if (libraryBtnRef.classList.contains('current')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/queue/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                renderMarkupByIds(ids);
              } else {
                if (filmsListRef) {
                  filmsListRef.innerHTML = '';
                }
                // addErrorStyles();
              }
            })
            .catch(console.error);
        }
      });
    }
  } else {
    firebase.queue = {
      [e.target.dataset.id]: filmName.textContent,
    };
    // watchedModalBtn.setAttribute('disabled', 'true');
    watchedModalBtn.disabled = true;
    // watchedModalBtn.style.backgroundColor = 'gray';

    if (libraryBtnRef.classList.contains('current')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/queue/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                renderMarkupByIds(ids);
              }
            })
            .catch(console.error);
        }
      });
    }
    localStorage.setItem('isRemoveFilm', 'no');
    queueModalBtn.textContent = 'Remove';
  }

  queueModalBtn.classList.toggle('is-active');
}
