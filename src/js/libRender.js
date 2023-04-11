import { API_service } from './api/apiService';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './api/firebase/firebaseConfig';
import renderFilmsMarkup from './templates/renderFilmsMarkup';
import dataStorage from './api/firebase/data-storage';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const userData = {
  queue: {},
  watched: {},
};
new dataStorage(userData);
const filmsApi = new API_service();


const watchedBtnRef = document.querySelector('.js-watched');
const queueBtnRef = document.querySelector('.js-queue');
const filmsList = document.querySelector('.library__container-list');

queueBtnRef.addEventListener('click', onQueueBtnClick);
watchedBtnRef.addEventListener('click', onWatchedBtnClick);

function onWatchedBtnClick() {
  if (watchedBtnRef.classList.contains('current')) return;

  onAuthStateChanged(auth, user => {
    if (user) {
      const libDataBase = `users/${user.uid}/lib/watched/`;

      get(ref(db, libDataBase))
        .then(snapshot => {
          if (snapshot.exists()) {
            
            const ids = Object.keys(snapshot.val());
              renderMarkupByIds(ids);
           //Render
          } else {
            filmsList.innerHTML = '';
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });

  watchedBtnRef.classList.add('is-active');
  queueBtnRef.classList.remove('is-active');
}

function onQueueBtnClick() {
  if (queueBtnRef.classList.contains('is-active')) return;
  queueBtnRef.classList.add('is-active');
  watchedBtnRef.classList.remove('is-active');

  onAuthStateChanged(auth, user => {
    if (user) {
      const libDataBase = `users/${user.uid}/lib/queue/`;

      get(ref(db, libDataBase))
        .then(snapshot => {
          if (snapshot.exists()) {
          
              const ids = Object.keys(snapshot.val());
              renderMarkupByIds(ids);
           //render
          } else {
            filmsList.innerHTML = '';
            addErrorStyles();
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
}

export default async function renderMarkupByIds(ids) {
  try {
    const arrProm = ids.map(async id => {
      filmsApi.id = id;
      return await filmsApi.fetchMovieById();
    });
    const films = await Promise.all(arrProm);
    renderFilmsMarkup(films);
  } catch (error) {
    console.log(error);
  }
}