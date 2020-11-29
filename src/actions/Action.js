import axios from 'axios'

// set loading to TRUE based on type
export const setLoading = (type) => {
  return {
    type: `SET_LOADING_${type}`
  };
}

export const getInitialMovies = () => async dispatch => {
  try {
    setLoading('INITIAL_MOVIES')
    const { data } = await axios.get('http://www.omdbapi.com?apikey=faf7e5bb&s=disney&')

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
    const { data } = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${searchValue}`)

    console.log("🚀 ~ file: Action.js ~ line 24 ~ data", data)
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
