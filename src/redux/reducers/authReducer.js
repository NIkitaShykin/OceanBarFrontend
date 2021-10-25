const initialState = {
  user: null,
  isAuthorized: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LOG_IN':
    return {
      ...state,
      user: action.data,
      isAuthorized: true,
    }

  case 'SET_LOG_OUT':
    return initialState

  default:
    return state
  }
}

export default authReducer
