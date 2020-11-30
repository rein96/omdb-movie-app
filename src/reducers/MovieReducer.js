import {
  SET_HOME_MOVIE,
  HOME_SCROLL_LOADING,
  HOME_LOADING,
  GET_SCROLL_MOVIES,
  GET_MOVIES,
  SEARCH_MOVIES_EMPTY,
  ERROR,
  SET_LOADING_SCROLL_SEARCH_MOVIES,
  SET_LOADING_SEARCH_MOVIES,
  SCROLL_SEARCH_MOVIES,
  SEARCH_MOVIES,
} from 'actions/types.js'

const init = {
  homePageMovie: 'disney',
  movies: [],
  totalResults: 0,
  loadingMovies: false,
  scrollHomeLoadingMovies: false,
  searchMovies: [],
  searchTotalResults: 0,
  loadingSearchMovies: false,
  scrollLoading: false
}

export default (state = init, action) => {
  const payload = action.payload;
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.Search,
        totalResults: payload.totalResults,
        loadingMovies: false,
        homePageMovie: action.extra
      }

    case GET_SCROLL_MOVIES:
      return {
        ...state,
        movies: [...state.movies , ...payload.Search],
        totalResults: payload.totalResults,
        loadingMovies: false
      }

    case SET_HOME_MOVIE:
      return {
        ...state,
        homePageMovie: payload
      }

    case SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: payload.Search,
        searchTotalResults: payload.totalResults,
        loadingSearchMovies: false
      }

    case SCROLL_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: [...state.searchMovies, ...payload.Search],
        searchTotalResults: payload.totalResults,
        loadingSearchMovies: false,
        scrollLoading: false
      }

    case SEARCH_MOVIES_EMPTY:
      return {
        ...state,
        loadingMovies: false,
        loadingSearchMovies: false,
        scrollLoading: false,
      }

    case HOME_SCROLL_LOADING:
      return {
        ...state,
        scrollHomeLoadingMovies: true
      }

    case HOME_LOADING:
      return {
        ...state,
        loadingMovies: true
      }

    case SET_LOADING_SEARCH_MOVIES:
      return {
        ...state,
        loadingSearchMovies: true
      };

    case SET_LOADING_SCROLL_SEARCH_MOVIES:
      return {
        ...state,
        scrollLoading: true
      }

    case ERROR:
      return {
        ...state,
        error: payload,
        loadingSearchMovies: false,
        loadingMovies: false
      }

    default:
      return state
  }
}