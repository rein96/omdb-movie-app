// import streetcrownlogodefault from '../images/streetcrown-logo.png'

const init = {
  movies: [],
  totalResults: 0,
  loadingMovies: false,
  searchMovies: [],
  searchTotalResults: 0,
  loadingSearchMovies: false,
  scrollLoading : false
}

export default (state = init, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'INITIAL_MOVIES':
      return {
        ...state,
        movies: payload.Search,
        totalResults: payload.totalResults,
        loadingMovies: false
      }

    case 'SEARCH_MOVIES':
      // const { Search, totalResults } = action.payload
      return {
        ...state,
        searchMovies: payload.Search,
        searchTotalResults: payload.totalResults,
        loadingSearchMovies: false
      }

    case 'SCROLL_SEARCH_MOVIES':
      // const { Search, totalResults } = action.payload
      return {
        ...state,
        searchMovies: [...state.searchMovies, ...payload.Search],
        searchTotalResults: payload.totalResults,
        loadingSearchMovies: false,
        scrollLoading: false
      }

    case 'SEARCH_MOVIES_EMPTY':
      return {
        ...state,
        loadingSearchMovies: false,
        scrollLoading: false,
      }

    case 'SET_LOADING_SEARCH_MOVIES':
      return {
        ...state,
        loadingSearchMovies: true
      };

    case 'SET_LOADING_INITIAL_MOVIES':
      return {
        ...state,
        loadingMovies: true
      };

    case 'SET_LOADING_SCROLL_SEARCH_MOVIES':
      return {
        ...state,
        scrollLoading: true
      }

    case 'ERROR':
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