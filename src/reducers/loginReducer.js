import loginService from '../services/login'
import { userConstants } from '../constants/user.constants'
import { history } from '../_helpers/history'

let user = window.localStorage.getItem(userConstants.LOCAL_STORAGE)

const initialState = user !== 'undefined' ? 
                { loggedIn: true, user: JSON.parse(user) } : {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.data
      }
    case userConstants.LOGIN_SUCCESS:
      window.localStorage.setItem(userConstants.LOCAL_STORAGE, 
                    JSON.stringify(action.data))
      return {
        loggedIn: true,
        user: action.data
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      window.localStorage.removeItem(userConstants.LOCAL_STORAGE)
      console.log('LOGGED OUT')
      
      return {}
    default:
      return state
  }
}


/* const request = (user) => {
  type: userConstants.LOGIN_REQUEST, 
  data: user
}

const success = (user) => {
  type: userConstants.LOGIN_SUCCESS, user
}

const failure = (error) => {
  type: userConstants.LOGIN_FAILURE, error
} */

export const login = (credentials) => {
  return async (dispatch) => {
    try{
      console.log(credentials)
      
      //dispatch
      //dispatch(request( credentials.username ))

      const user = await loginService.login({
        username: credentials.username,
        password: credentials.password
      })
      console.log(user)

      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        data: user
      })
      //window.localStorage.setItem('loggedBracketAppUser', JSON.stringify(user)) 
     
    }catch(exception){
      console.log(exception)
      dispatch({
        type: userConstants.LOGIN_FAILURE,
        data: 'ERROR'
      })
      //dispatch(failure(exception))
      //dispatch alerterror
    }
  }
}

export const logout = () => {
  console.log('LOGGIN OUT')
  
  return (dispatch) => {
    dispatch({
      type: userConstants.LOGOUT
    })
  }
}

export default reducer