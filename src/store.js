import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gameReducer from './reducers/gameReducer'
import teamReducer from './reducers/teamReducer'   
import loginReducer from './reducers/loginReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  games: gameReducer,
  teams: teamReducer,
  login: loginReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store