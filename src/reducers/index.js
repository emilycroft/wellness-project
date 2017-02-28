import { combineReducers } from 'redux'
import currentDetailsReducer from './currentDetailsReducer'

export default combineReducers({
  currentDetails: currentDetailsReducer
})
