// import streetcrownlogodefault from '../images/streetcrown-logo.png'

const init = {
  movies: [],
  totalResults: 0,
  loadingMovies: false,
  searchMovies: [],
  searchTotalResults: 0,
  loadingSearchMovies: false,
}

export default (state = init, action) => {
  switch (action.type) {
    case 'INITIAL_MOVIES':
      const payload = action.payload
      return {
        ...state,
        movies: payload.Search,
        totalResults: payload.totalResults
      }
    case 'SEARCH_MOVIES':
      const { Search, totalResults } = action.payload
      return {
        ...state,
        searchMovies: Search,
        searchTotalResults: totalResults
      }

    case 'SET_LOADING_INITIAL_MOVIES':
      return {
        ...state,
        loadingMovies: true
      };

    case 'SET_LOADING_SEARCH_MOVIES':
      return {
        ...state,
        loadingSearchMovies: true
      };


    default:
      return state
  }
}