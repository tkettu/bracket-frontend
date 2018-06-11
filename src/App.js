import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Table, Container, Menu, 
    TableBody, Form } 
    from 'semantic-ui-react'

import { initializeGames, saveScores } from './reducers/gameReducer'
import { initializeTeams } from './reducers/teamReducer'
import { logout } from './reducers/loginReducer'
import { connect } from 'react-redux'

import GameList from './components/GameList'
import LoginForm from './components/LoginForm'
import store from './store'
//import Home ja Bracket componentseista


const Home = () => (
  <div>
    <GameList />
  </div>
)



const Bracket = () => (
  <div>
    <p>Roki in 5</p>
  </div>
)

//TODO logout ja register implementit
//set store loggedIn = false
/* const Logout = () => {
  return logout()
} */
  //logout()
 /*  <div>
    <p>{store.getState().login.user}</p>
  </div> */
//)

const MainMenu = () => (
  <div>
    <Menu inverted>
      <Menu.Item link>
        <NavLink to="/">home</NavLink>
      </Menu.Item>
      <Menu.Item link>
        <NavLink to="/bracket">bracket</NavLink>
      </Menu.Item>
      <Menu.Item link>
        {store.getState().login.loggedIn
          ? <NavLink to="/logout">logout</NavLink> :
            <NavLink to="/login">login</NavLink>
        }
      </Menu.Item>
    </Menu>
    <div>
      <Route exact path="/" render={() => <Home />}/>
      <Route path="/bracket" render={() => <Bracket />}/>
      <Route path="/login" render={({ history }) => <LoginForm history={history}/>}/>
      <Route path="/logout" render={({ history }) => <LoginForm history={history}/>}/>
    </div>
  </div>
)

class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeGames()
    this.props.initializeTeams()
    console.log(store.getState())
    
  }


  render() {
    return (
      <Container>
        <Router>
          <MainMenu />
          
        </Router>
      </Container>
    )
  }
}

export default connect(
  null,
  { initializeGames,
    initializeTeams, 
    saveScores,
    logout
  }
)(App)
