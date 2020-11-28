// import axios from 'src/config/axios.js';
// import axios from '../config/axios'
import axios from 'axios'

export const testing = () => async dispatch => {

  try {

    const res = await axios.get('http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=2')
    console.log("🚀 ~ file: Action.js ~ line 10 ~ res", res)

    dispatch({
      type: 'TESTING',
      payload: res
    })

  } catch (err) {
    console.error(err);
  }
}