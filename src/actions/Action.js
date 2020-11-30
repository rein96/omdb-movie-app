import axios from 'axios'

let url = 'http://www.omdbapi.com?apikey=faf7e5bb';

// set loading to TRUE based on type
export const setLoading = (type) => {
  return {
    type: type,
  };
}

export const getMovies = (searchValue) => async dispatch => {
  try {
    const { data } = await axios.get(`${url}&s=${searchValue}`)

    dispatch({
      type: 'INITIAL_MOVIES',
      payload: data
    })

  } catch (err) {
    console.error(err);
    dispatch({
      type: 'ERROR',
      payload: err.response.statusText
    })
  }
}

export const searchMovie = ({searchValue, page = 1, isScroll = false}) => async dispatch => {
  try {
    const { data } = await axios.get(`${url}&s=${searchValue}&page=${page}`)

    if (data.Response === 'True') {
      dispatch({
        type:  isScroll ? 'SCROLL_SEARCH_MOVIES' : 'SEARCH_MOVIES',
        payload: data
      })
    } else {
      dispatch({
        type: 'SEARCH_MOVIES_EMPTY'
      })
    }

  } catch (err) {
    console.error(err);
    dispatch({
      type: 'ERROR',
      payload: err
    })
  }
}

export const setEmptyMovie = () => {
  return{
    type: 'SEARCH_MOVIES_EMPTY',
  }
}

export const getMovieDetail = async (imdbId) => {
  try {
    const { data } = await axios.get(`${url}&i=${imdbId}&plot=full`)
    return data;
  } catch (err) {
    console.error(err);
  }
}
