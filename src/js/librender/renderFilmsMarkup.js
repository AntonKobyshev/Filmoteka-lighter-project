import makeFilmsMarkup from './filmsListMarkupTempl';

const filmsListRef = document.querySelector('.library__container-list');

export default function renderFilmsMarkup(films) {
  if (filmsListRef) { filmsListRef.innerHTML = makeFilmsMarkup(films) };
}
