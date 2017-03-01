import axios from 'axios'

const URL = 'http://localhost:3000/'

export const fetchHabits = () => {
  const habits = axios.get(URL + 'habits').then(response => response.data)
  return {
    type: "FETCH_HABITS",
    payload: habits
  }
}


export const updateCurrentHabit = (habit) => {
  return {
    type: "UPDATE_CURRENT_HABIT",
    payload: habit
  }
}
