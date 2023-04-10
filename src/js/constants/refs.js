export const refs = {
    authBtn: document.querySelector('.auth-btn'), //це клас для кнопки автентифікаціїї у хедері
    headerWatchedBtn: document.querySelector('.js-watched'), //це клас для кнопки у хедері
    headerQueueBtn: document.querySelector('.js-queue'), //це клас для кнопки у хедері
    autorizationChecked: document.getElementById('icon-autorization-checked'),
    dataBackdrop: document.querySelector('[data-backdrop]'),
    // refs для модалки команди
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdropTeam: document.querySelector('.team-backdrop'),
};