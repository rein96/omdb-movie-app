import { combineReducers } from 'redux'
import MovieReducer from './MovieReducer'

export default combineReducers({
  globalStateMovie: MovieReducer
})