import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export class PixabayAPI {
  #API_KEY = '34781999-f80c25e1d8028aeab158849af';
  #perPage = 1;
  #page = 1;
  #query = '';
  #totalPhotos = 0;

  constructor({ perPage = 40 } = {}) {
    this.#perPage = perPage;
  }

  async getPhotos() {
    const params = new URLSearchParams({
      key: this.#API_KEY,
      q: this.#query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: this.#perPage,
      page: this.#page,
    });
    const { data } = await axios.get('/api/', { params });
    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  setTotal(newTotal) {
    this.#totalPhotos = newTotal;
  }
  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPhotos / this.#perPage);
  }
}
