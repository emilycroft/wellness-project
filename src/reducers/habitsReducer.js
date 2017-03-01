export default (state={}, action) => {
  switch (action.type) {
    case 'FETCH_HABITS':
      return action.payload
    default:
      return state
    }
}
