export const setSignUp = (tempAuthUrl) => ({
  type: 'SET_SIGN_UP',
  tempAuthUrl: tempAuthUrl
})

export const setLogIn = (user) => ({
  type: 'SET_LOG_IN',
  user: user
})

export const setLogOut = () => ({
  type: 'SET_LOG_OUT',
})
