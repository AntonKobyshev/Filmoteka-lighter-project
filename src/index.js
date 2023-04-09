import './sass/main.scss';
import { authObserver } from './js/api/firebase/api';
import {
  showAuthorisedFields,
  showUnauthorisedFields,
} from './js/features/auth/authModalWindowContent';


authObserver([showAuthorisedFields], [showUnauthorisedFields]);