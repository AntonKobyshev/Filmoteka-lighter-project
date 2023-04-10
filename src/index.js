import './sass/main.scss';
import { authObserver } from './js/api/firebase/api';
import {
  showAuthorisedFields,
  showUnauthorisedFields,
} from './js/features/auth/authModalWindowContent';

import './js/features/auth/modal';

authObserver([showAuthorisedFields], [showUnauthorisedFields]);

// import templateFunction from './templates/auth-modal';
// document.body.innerHTML = templateFunction();
