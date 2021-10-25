const rootReducer = function(state, action) {
  switch (action.type) {
  case 'SET_SIGN_UP':
    return {...state, searchText: action.text}
  case 'SET_LOG_IN':
    return {...state, searchStatus: action.text}
  case 'SET_LOG_OUT':
    return {...state, searchBy: action.value}
  default:
    return state
  }
}

export default rootReducer
