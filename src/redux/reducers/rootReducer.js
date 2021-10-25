import {combineReducers} from 'redux'

import signupReducer from './signupReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authReducer,
})

export default rootReducer
