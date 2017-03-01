export default (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_HABIT':
      return action.payload
    default:
      return state
    }
}
