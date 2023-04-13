import genresData from '../genres.json';

export default function makeFilmsMarkup(films) {
  return films
    .map(
      ({
        poster_path,
        title,
        name,
        release_date,
        first_air_date,
        genre_ids,
        genres,
        vote_average,
        id,
      }) => {
        let filmGenres;
        if (genres) {
          filmGenres = genres.map(({ name }) => name).join(', ');
        }
        if (genre_ids) {
          filmGenres = genresData
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name)
            .join(', ');
        }

        return `<li class="films__item" data-id=${id}>
                
                <img class="films__img" src=https://image.tmdb.org/t/p/original${poster_path} alt="${
          title || name
        }" loading="lazy">
                  <div class="films__description">
                  <p class="films__title">${title || name}</p>
                  <p class="movie-card__additionaly">${
                    filmGenres || 'Action'
                  }  |  ${(release_date || first_air_date || '2023').slice(
          0,
          4
        )}</p>
                    <span class="films__rating visually-hidden">${
                      vote_average || '-'
                    }</span>
                  </div>
                </div>
            </li>`;
      }
    )
    .join('');
}
