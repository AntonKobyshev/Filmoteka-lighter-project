import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  getAuth
} from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyApAVPx8g9ncyoyFM9AB-VsIVQFVbZimu8",
  authDomain: "kinoteka-cc589.firebaseapp.com",
  projectId: "kinoteka-cc589",
  storageBucket: "kinoteka-cc589.appspot.com",
  messagingSenderId: "626971331589",
  appId: "1:626971331589:web:4219ce873aff3fdaeba06c"
};

export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();
// // // // // // // // // // // // //
// //Цей код встановлює з'єднання з додатком Firebase, базою даних Firestore та службою аутентифікації, використовуючи SDK Firebase для JavaScript.
// Спочатку він імпортує необхідні модулі Firebase для ініціалізації додатку, доступу до бази даних Firestore та отримання служби аутентифікації.Конкретно,
// він імпортує initializeApp з модуля firebase / app, getFirestore з модуля firebase / firestore та getAuth з модуля firebase / auth.
// Потім він визначає об'єкт з іменем firebaseConfig, який містить інформацію конфігурації для додатку Firebase. Це включає API-ключ, домен аутентифікації, 
// URL бази даних, ідентифікатор проекту, сховище, ID відправника повідомлень та ID додатку.

// Потім код експортує дві константи: db та auth.db - це об'єкт Firestore бази даних, який ініціалізується за допомогою getFirestore та initializeApp(firebaseConfig).
// auth - це об'єкт служби аутентифікації, який ініціалізується за допомогою getAuth()