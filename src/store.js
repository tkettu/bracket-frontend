import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gameReducer from './reducers/gameReducer'
import teamReducer from './reducers/teamReducer'   
import loginReducer from './reducers/loginReducer'
import filterReducer from './reducers/filterReducer'
import bracketReducer from './reducers/bracketReducer'

const reducer = combineReducers({
  games: gameReducer,
  teams: teamReducer,
  login: loginReducer,
  filter: filterReducer,
  bracket: bracketReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store