
import './sass/main.scss';
import { authObserver } from './js/api/firebase/api';
import {
  showAuthorisedFields,
  showUnauthorisedFields,
} from './js/features/auth/authModalWindowContent';

import './js/features/auth/modal';
import './js/features/auth/modal-team';
authObserver([showAuthorisedFields], [showUnauthorisedFields]);

import "./js/renderCards";

