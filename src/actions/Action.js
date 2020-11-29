import axios from 'axios'

let url = 'http://www.omdbapi.com?apikey=faf7e5bb';

// set loading to TRUE based on type
export const setLoading = (type) => {
  return {
    type: `SET_LOADING_${type}`
  };
}

export const getInitialMovies = () => async dispatch => {
  try {
    setLoading('INITIAL_MOVIES')
    const { data } = await axios.get(`${url}&s=disney&`)

    dispatch({
      type: 'INITIAL_MOVIES',
      payload: data
    })

  } catch (err) {
    console.error(err);
  }
}

export const searchMovie = (searchValue) => async dispatch => {
  try {
    setLoading('SEARCH_MOVIES')
    const { data } = await axios.get(`${url}&s=${searchValue}`)

    if (data.Response === 'True') {
      dispatch({
        type: 'SEARCH_MOVIES',
        payload: data
      })
    }

  } catch (err) {
    console.error(err);
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
