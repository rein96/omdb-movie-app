import axios from 'axios'
import {
  SET_HOME_MOVIE,
  HOME_SCROLL_LOADING,
  HOME_LOADING,
  GET_SCROLL_MOVIES,
  GET_MOVIES,
  GET_MOVIES_ERROR,
  SEARCH_MOVIES_EMPTY,
  ERROR,
  SET_LOADING_SCROLL_SEARCH_MOVIES,
  SET_LOADING_SEARCH_MOVIES,
  SCROLL_SEARCH_MOVIES,
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
} from './types'

let url = 'https://www.omdbapi.com?apikey=faf7e5bb';

// set loading to TRUE based on type
export const setLoading = (type) => {
  return {
    type: type,
  };
}

export const setHomePageMovie = (searchValue) => {
  return {
    type: SET_HOME_MOVIE,
    payload: searchValue
  }
}

export const getMovies = ({ searchValue = 'disney', page = 1, isScroll = false }) => async dispatch => {
  try {
    dispatch(setLoading(isScroll ? HOME_SCROLL_LOADING : HOME_LOADING))
    const { data } = await axios.get(`${url}&s=${searchValue}&page=${page}`)
    if (data.Response === 'True') {
      dispatch({
        type: isScroll ? GET_SCROLL_MOVIES : GET_MOVIES,
        payload: data,
        extra: searchValue,
      })
    }
    else if (data.Error && data.Response === 'False') {
      dispatch({
        type: isScroll ? SEARCH_MOVIES_EMPTY : GET_MOVIES_ERROR,
        payload: data,
        extra: searchValue,
      })
    }
    else {
      dispatch({
        type: SEARCH_MOVIES_EMPTY
      })
    }

  } catch (err) {
    console.error(err);
    dispatch({
      type: ERROR,
      payload: err
    })
  }
}

export const searchMovie = ({ searchValue, page = 1, isScroll = false }) => async dispatch => {
  try {
    dispatch(setLoading(isScroll ? SET_LOADING_SCROLL_SEARCH_MOVIES : SET_LOADING_SEARCH_MOVIES))
    const { data } = await axios.get(`${url}&s=${searchValue}&page=${page}`)

    if (data.Response === 'True') {
      dispatch({
        type: isScroll ? SCROLL_SEARCH_MOVIES : SEARCH_MOVIES,
        payload: data
      })
    }
    else if (data.Error && data.Response === 'False') {
      dispatch({
        type: isScroll ? SEARCH_MOVIES_EMPTY : SEARCH_MOVIES_ERROR,
        payload: data,
        extra: searchValue,
      })
    }
    else {
      dispatch({
        type: SEARCH_MOVIES_EMPTY
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
  return {
    type: SEARCH_MOVIES_EMPTY,
  }
}

// Without reducer
export const getMovieDetail = async (imdbId) => {
  try {
    const { data } = await axios.get(`${url}&i=${imdbId}&plot=full`)
    return data;
  } catch (err) {
    console.error(err);
  }
}
