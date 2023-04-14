import { API_service } from './api/apiService';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './api/firebase/firebaseConfig';
import renderFilmsMarkup from './librender/renderFilmsMarkup';
import dataStorage from './api/firebase/data-storage';
import { onOpenModalAuth } from './api/firebase/auth-settings';
import * as spiner from './features/auth/spiner';
import { renderPagination } from './pagination';
import { Loading } from 'notiflix';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const userData = {
  queue: {},
  watched: {},
};
new dataStorage(userData);
const filmsApi = new API_service();

const authBtn = document.querySelector('#auth');
const watchedBtnRef = document.querySelector('.js-watched');
const queueBtnRef = document.querySelector('.js-queue');
const filmsList = document.querySelector('.library__container-list');
const emptyMessage = document.querySelector('.library__mes');

queueBtnRef.addEventListener('click', onQueueBtnClick);
watchedBtnRef.addEventListener('click', onWatchedBtnClick);
authBtn.addEventListener('click', onOpenModalAuth);

onWatchedBtnClick();

export function onWatchedBtnClick() {
  if (watchedBtnRef.classList.contains('current')) return;
  let spinerSelector = spiner.spinerInit('body');

  onAuthStateChanged(auth, user => {
    if (user) {
      const libDataBase = `users/${user.uid}/lib/watched/`;

      get(ref(db, libDataBase))
        .then(snapshot => {
          if (snapshot.exists()) {
            const ids = Object.keys(snapshot.val());
            console.log(ids);

            //pagination
            localStorage.setItem('fetchType', 'watched');
            localStorage.setItem('totalPages', Math.ceil(ids.length / 20));
            const totalPages = localStorage.getItem('totalPages');
            renderPagination(totalPages);
            //pagination

            localStorage.setItem('watched', JSON.stringify(snapshot.val()));

            if (!emptyMessage.classList.contains('visually-hidden')) {
              emptyMessage.classList.add('visually-hidden');
            }
            renderMarkupByIds(ids, localStorage.getItem('currentPage'));

            //Render
          } else {
            if (emptyMessage.classList.contains('visually-hidden')) {
              emptyMessage.classList.remove('visually-hidden');
            }
            filmsList.innerHTML = '';
            console.log('123');
            console.log('No data available');
            renderPagination(1);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  spiner.removeSpiner(spinerSelector);
  watchedBtnRef.classList.add('is-active');
  queueBtnRef.classList.remove('is-active');
}

export function onQueueBtnClick() {
  if (queueBtnRef.classList.contains('is-active')) return;
  queueBtnRef.classList.add('is-active');
  watchedBtnRef.classList.remove('is-active');

  let spinerSelector = spiner.spinerInit('body');

  onAuthStateChanged(auth, user => {
    if (user) {
      const libDataBase = `users/${user.uid}/lib/queue/`;

      get(ref(db, libDataBase))
        .then(snapshot => {
          if (snapshot.exists()) {
            const ids = Object.keys(snapshot.val());

            //pagination
            localStorage.setItem('fetchType', 'queue');
            localStorage.setItem('totalPages', Math.ceil(ids.length / 20));
            const totalPages = localStorage.getItem('totalPages');
            renderPagination(totalPages);
            //pagination

            localStorage.setItem('queued', JSON.stringify(snapshot.val()));

            if (!emptyMessage.classList.contains('visually-hidden')) {
              emptyMessage.classList.add('visually-hidden');
            }
            renderMarkupByIds(ids);

            //render
          } else {
            if (emptyMessage.classList.contains('visually-hidden')) {
              emptyMessage.classList.remove('visually-hidden');
            }
            filmsList.innerHTML = '';

            console.log('No data available');
            renderPagination(1);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  spiner.removeSpiner(spinerSelector);
}

export default async function renderMarkupByIds(ids, page = 1) {
  try {
    let spinerSelector = spiner.spinerInit('body');

    console.log('spinner on');

    // Loading.pulse({
    //   svgColor: 'orange',
    // });

    const startIndex = (page - 1) * 20;
    const endIndex = page * 20;
    const idsToRender = ids.slice(startIndex, endIndex);
    const arrProm = idsToRender.map(async id => {
      filmsApi.id = id;
      return await filmsApi.fetchMovieById();
    });
    const films = await Promise.all(arrProm);
    renderFilmsMarkup(films);
    console.log('spinner off');
    spiner.removeSpiner(spinerSelector);
  } catch (error) {
    console.log(error);
  }
}
