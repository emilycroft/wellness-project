import { combineReducers } from 'redux'
import currentHabitReducer from './currentHabitReducer'
import habitsReducer from './habitsReducer'

export default combineReducers({
  habits: habitsReducer,
  currentHabit: currentHabitReducer
})
