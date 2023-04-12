import axios from 'axios';
import * as spiner from '../features/auth/spiner'

const API_KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export class API_service {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.id = null;
    this.genreId = null;
  }

  async fetchTrending(allData = true) {
    try {
      let spinerSelector = spiner.spinerInit('body');
      const { data } = await axios('trending/movie/day', {
        params: {
          api_key: API_KEY,
          page: this.page,
        },
      });

      spiner.removeSpiner(spinerSelector);

      return allData ? data : data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMoviesByKeyword() {
    try {
      let spinerSelector = spiner.spinerInit('body');
      const { data } = await axios('search/movie', {
        params: {
          api_key: API_KEY,
          query: this.searchQuery,
        },
      });

      spiner.removeSpiner(spinerSelector);

      return data.results; //returns an OBJECT. e.g.{page: 1, results: Array(20), total_pages: 8, total_results: 147}
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieById() {
    //will throw an error if title "undefined";
    try {
      let spinerSelector = spiner.spinerInit('body');
      const { data } = await axios(`movie/${this.id}`, {
        //for this to work make sure this.searchQuery type is number!!!
        params: {
          api_key: API_KEY,
        },
      });
      spiner.removeSpiner(spinerSelector);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.id;
  }

  set movieId(newId) {
    this.id = newId;
  }
}
