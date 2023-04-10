import { refs } from '../../constants/refs';

refs.openModalBtn.addEventListener('click', openModalOpen);
refs.closeModalBtn.addEventListener('click', closeModalClose);
refs.backdropTeam.addEventListener('click', clickBackdropClick);

function openModalOpen() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal-team');
}

function closeModalClose() {
  document.body.classList.remove('show-modal-team');
  window.removeEventListener('keydown', onEscPress);
  document.body.style.overflow = 'auto';
}

function clickBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalClose();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModalClose();
  }
}