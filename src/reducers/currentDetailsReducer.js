export default (state="", action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DETAILS':
      return action.payload
    default:
      return state
    }
}
