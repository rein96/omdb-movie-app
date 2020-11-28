import axios from 'axios'

export const getInitialMovies = () => async dispatch => {
  try {

    const { data } = await axios.get('http://www.omdbapi.com?apikey=faf7e5bb&s=disney&')

    dispatch({
      type: 'INITIAL_MOVIES',
      payload: data
    })

  } catch (err) {
    console.error(err);
  }
}