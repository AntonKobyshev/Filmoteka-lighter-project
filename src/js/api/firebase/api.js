import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { getDoc, doc, setDoc, get, set } from 'firebase/firestore';

import { db, auth } from './firebaseConfig.js';

import { dynRefs } from '../../constants/dynamicRefs';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// // // // // // // // // // // // //

export function singUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      postData(
        {
          watched: [],
          queue: [],
        },
        user.uid
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(errorMessage);
      // ..
    });
}

export function singIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {}) //Вхід вдалий
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure(errorMessage);
    });
}

export function logOut() {
  signOut(auth)
    .then(() => {
      // Вихід вдалий.
    })
    .catch(error => {
        // Notify.failure("Something went wrong");
        Notify.message(error.message);
    });
}

export async function getData() {
  try {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      console.log(auth.currentUser.uid);
      console.log(docRef);
      const docSnap = await getDoc(docRef);
      console.table(auth.currentUser.uid,docRef, docSnap)

    if (docSnap.exists()) {
      localStorage.dataFromDB = JSON.stringify(docSnap.data());
      return docSnap.data();
    } else {
      Notify.warning("Empty database");
    }
  } catch (e) {
    // Notify.failure("Something went wrong");
      Notify.failure(e.message);
      
  }
}

export async function postData(usersFilmsObj, uid = auth.currentUser.uid) {
  try {
    const userData = doc(db, 'users', uid);

    await setDoc(userData, usersFilmsObj, { merge: true });

  } catch (e) {
    console.error('Error adding document: ', e);
    Notify.failure("Something went wrong, data not saved");
  }
}

export function authObserver(fncLogIn, fncNotLogged) {
  onAuthStateChanged(auth, user => {
    if (user) {

      getData().then(e => {
        localStorage.dataFromDB = JSON.stringify(e);
        if (fncLogIn) {
          fncLogIn.forEach(element => element());
        }
      });
    } else {
      const { notLoggedIn, loggedIn } = dynRefs();
      if (fncNotLogged) {
        fncNotLogged.forEach(func => func());
      }

      localStorage.removeItem('dataFromDB');
      
    }
  });
}
// Цей код містить функції для роботи з Firebase Authentication та Cloud Firestore.
// import імпортує необхідні функції з Firebase для подальшої роботи зі створеним додатком.
// firebaseConfig містить дані конфігурації веб - додатку Firebase, такі як ключ API, домен, URL бази даних, ідентифікатор проекту,
// бакет для зберігання файлів та інші.
// db містить посилання на Firestore із заданою конфігурацією, а auth - посилання на Firebase Authentication.
// singUp() дозволяє користувачеві створити новий акаунт, передаючи електронну адресу та пароль.Після успішної реєстрації створюється
// новий документ з watched та queue об'єктами, які представляють фільми користувача.singIn() дозволяє користувачеві увійти у систему з 
// використанням електронної адреси та пароля.У разі невдалої спроби входу, виводиться повідомлення про помилку.
// logOut() дозволяє користувачеві вийти з системи. У разі невдалої спроби виводиться повідомлення про помилку.
// getData() отримує дані користувача із Firestore, які відносяться до відповідного uid.Якщо дані існують, вони зберігаються в локальному
// сховищі та повертаються.Якщо дані відсутні, виводиться повідомлення про помилку.
// postData() дозволяє зберегти об'єкт фільмів користувача у Firestore. Об'єкт зберігається за заданим uid.
// authObserver() дозволяє відстежувати зміни стану аутентифікації користувача(залогінений чи ні).При зміні стану виконується відповідна
// функція: якщо користувач залогінений, запускається функція getData() для отримання даних користувача після цього викликаються функціїї з
// массиву fncLogIn. Якщо користувач не залогінений, то викликаються функціїї з массиву fncNotLogged