export const refs = {
    authBtn: document.querySelector('.auth-btn'), //це клас для кнопки автентифікаціїї у хедері
    headerWatchedBtn: document.querySelector('.js-watched'), //це клас для кнопки у хедері
    headerQueueBtn: document.querySelector('.js-queue'), //це клас для кнопки у хедері
    autorizationChecked: document.getElementById('icon-autorization-checked'),
    dataBackdrop: document.querySelector('[data-backdrop]'),

   
  body: document.querySelector('body'),
  userAuth: document.querySelector('#auth'),

  modalAuth: document.querySelector('.backdrop-auth'),
  authContainer: document.querySelector('.auth-container'),

  closeModalBtn: document.querySelector('#close-modal-btn'),
  closeModalCross: document.querySelector('#close-modal-cross'),
  closeModalSvg: document.querySelector('.auth-modal__close-icon'),

  logInPage: document.querySelector('#log-in-page'),
  logInTab: document.querySelector('#log-in-tab'),
  logInForm: document.querySelector('#log-in-form'),
  logInBtn: document.querySelector('#log-in-btn'),
  regTab: document.querySelector('#reg-tab'),
  regForm: document.querySelector('#reg-form'),
  regBtn: document.querySelector('#register'),

  userSetPage: document.querySelector('#user-settings-page'),
  settingsTab: document.querySelector('#settings-tab'),
  updForm: document.querySelector('#upd-form'),
  chName: document.querySelector('#change-name'),
  chEmail: document.querySelector('#change-email'),
  chPswd: document.querySelector('#change-pswd'),
  logOutBtn: document.querySelector('#log-out-btn'),
  delAccTab: document.querySelector('#delete-accnt-tab'),
  confDelAcc: document.querySelector('#confDelAcc'),
  delAccBtn: document.querySelector('#delAccBtn'),
  delAccBtnYes: document.querySelector('#delAccBtnYes'),
  delAccBtnNo: document.querySelector('#delAccBtnNo'),

  showPswd: document.querySelectorAll('.show-pswd'),
  hidePswd: document.querySelectorAll('.hide-pswd'),
  logInPswd: document.querySelector('#logInPswd'),
  regPswd: document.querySelector('#reg-pswd'),

  userLibrary: document.querySelector('.button-library'),
    // refs для модалки команди
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdropTeam: document.querySelector('.team-backdrop'),
};
