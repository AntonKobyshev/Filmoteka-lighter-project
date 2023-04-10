
import './sass/main.scss';
import './js/homeSearch';
import { authObserver } from './js/api/firebase/api';
import {
  showAuthorisedFields,
  showUnauthorisedFields,
} from './js/features/auth/authModalWindowContent';

import './js/features/auth/modal';
import './js/features/auth/modal-team';
authObserver([showAuthorisedFields], [showUnauthorisedFields]);


import "./js/movieCardsGallery";
import "./js/renderCards";


// import templateFunction from './templates/auth-modal';
// document.body.innerHTML = templateFunction();
