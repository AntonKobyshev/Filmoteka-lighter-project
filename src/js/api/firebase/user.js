import { refs } from '../../constants/refs';
import { getDatabase, ref, set, remove } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export default class User {
  constructor(userData) {
    this.userData = userData;
  }

  create() {
    createUserWithEmailAndPassword(auth, this.userData.email, this.userData.password)
      .then(userCredential => {
        const user = userCredential.user;

        set(ref(db, 'users/' + user.uid + '/auth/'), this.userData);

        updateProfile(auth.currentUser, {
          displayName: `${this.userData.name}`,
        });

        alert(`User ${this.userData.name} created`);

        signOut(auth).then(() => {
          refs.userLibrary.classList.add('visually-hidden');
        });
      })
      .catch(error => {
        Notify.failure(error.code);
      });
  }

  logIn() {
    const user = auth.currentUser;

    if (!this.userData.email || !this.userData.pswd) {
      Notify.failure('Please enter your email and password');
      return;
    }

    signInWithEmailAndPassword(auth, this.userData.email, this.userData.pswd)
      .then(userCredential => {
        const user = userCredential.user;

        refs.userLibrary.classList.remove('visually-hidden');

        Notify.success(`User ${user.displayName} signed in`);
      })
      .catch(error => {
        const errorCode = error.code;
        Notify.failure(error.message);
          
      });
  }

  updateUser() {
    const user = auth.currentUser;
    const authDataBase = `users/${user.uid}/auth/`;

    if (this.userData.name) {
      updateProfile(auth.currentUser, {
        displayName: `${this.userData.name}`,
      });

      set(ref(db, authDataBase + 'name'), this.userData.name);

      Notify.message(`User name updated`);
    }

    if (this.userData.email) {
      updateEmail(auth.currentUser, `${this.userData.email}`);

      set(ref(db, authDataBase + 'email'), this.userData.email);

      Notify.message(`Email updated`);
    }

    if (this.userData.pswd) {
      const user = auth.currentUser;

      updatePassword(user, `${this.userData.pswd}`);

      set(ref(db, authDataBase + 'password'), this.userData.pswd);

      Notify.message(`Password updated`);
    }
  }

  logOut() {
    const user = auth.currentUser;

    signOut(auth).then(() => {
      refs.userLibrary.classList.add('visually-hidden');

      location.reload();
    });

    Notify.message('You are logged out');
    }
    removeUser() {
    const user = auth.currentUser;

    deleteUser(user).then(() => {
      refs.userLibrary.classList.add('visually-hidden');

      remove(ref(db, 'users/' + user.uid)).then(() => {
        location.reload();
      });
    });

    Notify.info(`User ${user.displayName} deleted`);
  }
}
