import { singUp, singIn, logOut } from '../../api/firebase/api';
import { auth } from '../../api/firebase/firebaseConfig';
import { dynRefs } from '../../constants/dynamicRefs';
import { refs } from '../../constants/refs';
// import modalAuthTpl from '../../../templates/auth-modal.hbs';
import closeSvg from '../../../images/sprite.svg';

export function showAuthorisedFields() {
  refs.autorizationChecked.style.display = 'block';
  const { loggedIn, notLoggedIn, userEmail } = dynRefs();
  if (notLoggedIn) {
    notLoggedIn.style.display = 'none';
    loggedIn.style.display = 'block';

    userEmail.innerHTML = auth.currentUser.email;
  }
}

export function showUnauthorisedFields() {
  refs.autorizationChecked.style.display = 'none';
  const { loggedIn, notLoggedIn, userEmail } = dynRefs();
  if (notLoggedIn) {
    notLoggedIn.style.display = 'block';
    loggedIn.style.display = 'none';
    userEmail.innerHTML = '';
  }
}

const modal = refs.dataBackdrop;

refs.authBtn.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.add('show-modal-card');
  const html = `<div class='modal-card auth'>
  <div class='auth-container' id='auth-container'>
    <div style='display: none' id='not-logged-in'>
      <div class='form-container sign-up-container'>
        <form id='sign-up-form' action='#'>
          <h1>Create Account</h1>
          <span>use your email for registration</span>
          <input
            type='email'
            id='email_signUp'
            name='email'
            placeholder='email'
            autocomplete='true'
          />
          <input
            autocomplete='true'
            type='password'
            id='password_signUp'
            name='password'
            placeholder='password'
          />
          <input id='btn_singUp' class='button' type='submit' value='Sign Up' />

        </form>
      </div>
      <div class='form-container sign-in-container'>
        <form id='sign-in-form' action='#'>
          <h1>Sign in</h1>
          <input
            autocomplete='true'
            type='email'
            id='email_signIn'
            name='email'
            placeholder='email'
          />
          <input
            autocomplete='true'
            type='password'
            id='password_signIn'
            name='password'
            placeholder='password'
          />
          <input id='btn_singIn' class='button' type='submit' value='Log in' />
        </form>
      </div>
      <div class='overlay-container'>
        <div class='overlay'>
          <div class='overlay-panel overlay-left'>
            <h1>Welcome Back!</h1>
            <p>To save your favorite films please login with your email</p>
            <button class='button ghost' id='switchSignIn'>Sign In</button>
          </div>
          <div class='overlay-panel overlay-right'>
            <h1>Hello, Friend!</h1>
            <p>Enter your email and start store your favorite films</p>
            <button class='button ghost' id='switchSignUp'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <div style='display: none; height:100%' id='logged-in'>
      <div class='innerSide'>
        <span class='innerSide-text'>Welcome back </span><span
          class='innerSide-text'
          id='user_email'
        ></span>
        <button class='button' id='btn_logout'>Log out</button>
      </div>
    </div>
  </div>

  <button class='modal-card__close-btn' data-modal-close>
    <svg class='card-btn-close' width='30' height='30'>
      <use href='/images/sprite.svg#card-btn-close'></use>
    </svg>
  </button>
</div>`;
  modal.innerHTML = html;

  const {
    switchSignUpBtn,
    switchSignInBtn,
    authContainer,
    btnLogOut,
    formLogIn,
    formSignUp,
    closeModalBtnEl
  } = dynRefs();

  if (auth.currentUser) {
    // from /api/firebase/api
    showAuthorisedFields();
  
  } else {
    showUnauthorisedFields();
  }

  document.body.style.overflow = 'hidden';
  const backdropEl = refs.dataBackdrop;
  if (closeModalBtnEl) {
    closeModalBtnEl.addEventListener('click', onCloseModalAuth);
  }
  backdropEl.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExitAuth);

  switchSignUpBtn.addEventListener('click', () => {
    authContainer.classList.add('right-panel-active');
  });

  switchSignInBtn.addEventListener('click', () => {
    authContainer.classList.remove('right-panel-active');
  });

  formSignUp.addEventListener('submit', async e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    singUp(email.value, password.value);
  });

  formLogIn.addEventListener('submit', async e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    singIn(email.value, password.value);
  });

  btnLogOut.addEventListener('click', () => {
    logOut();
  });
});

function onCloseModalAuth() {
  const { closeModalBtnEl, backdropEl } = dynRefs();
  // додає в session storege копію localstorege
  document.body.style.overflow = null;
  document.body.classList.remove('show-modal-card');
  window.addEventListener('keydown', onEscKeyPressExitAuth);

  backdropEl.removeEventListener('click', onBackdropClick);
  closeModalBtnEl.removeEventListener('click', onCloseModalAuth);
  window.removeEventListener('keydown', onEscKeyPressExitAuth);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModalAuth();
  }
}

function onEscKeyPressExitAuth(event) {
  if (event.code === 'Escape') {
    onCloseModalAuth();
  }
}