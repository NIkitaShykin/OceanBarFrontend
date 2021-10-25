const initialState = {
  tempAuthUrl: '',
}

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SIGN_UP':
    return {
      ...state,
      tempAuthUrl: action.tempAuthUrl
    }

  default:
    return state
  }
}

export default signupReducer
