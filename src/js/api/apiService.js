import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const API_KEY = '1ad822106312cb8004c8ffd62b3d3ebd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export class API_service {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.id = null;
    this.genreId = null;
  }

  async fetchTrending(allData = false) {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios('trending/movie/day', {
        params: {
          api_key: API_KEY,
          page: this.page,
        },
      });

      Loading.remove();

      return allData ? data : data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMoviesByKeyword() {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios('search/movie', {
        params: {
          api_key: API_KEY,
          query: this.searchQuery,
        },
      });

      Loading.remove();

      return data.results; //returns an OBJECT. e.g.{page: 1, results: Array(20), total_pages: 8, total_results: 147}
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieById() {
    //will throw an error if title "undefined";
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios(`movie/${this.id}`, {
        //for this to work make sure this.searchQuery type is number!!!
        params: {
          api_key: API_KEY,
        },
      });
      Loading.remove();

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

// API_service.page = 3;
