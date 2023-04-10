import './sass/main.scss';
import { authObserver } from './js/api/firebase/api';
import {
  showAuthorisedFields,
  showUnauthorisedFields,
} from './js/features/auth/authModalWindowContent';


authObserver([showAuthorisedFields], [showUnauthorisedFields]);

import "./js/movieCardsGallery";

// import templateFunction from './templates/auth-modal';
// document.body.innerHTML = templateFunction();