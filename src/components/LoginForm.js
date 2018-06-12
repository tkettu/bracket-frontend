import React from 'react'
import { Button, Form, Grid, Header,
        Message, Segment }
         from 'semantic-ui-react'

//import { Redirect } from 'react-router-dom'
        
import { connect } from 'react-redux'

import { login, logout } from '../reducers/loginReducer'
//import authentication from '../reducers/loginReducer'

//import store from '../store'

/* let credentials = {
   username: '',
   password: ''
} */

//http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example#login-page-jsx
  

/* const handleLoginFieldChange = ( event, props ) => {
  console.log(event.target.name)
  console.log(event.target.value)
  //credentials = {[event.target.name]: event.target.value}
  if (event.target.name === 'username'){
    props.setUsername(event.target.value)
  }else{
    props.setPassword(event.target.value)
  }
  
  
  
  
} */

/* const handleClick = async (props) => {
  
  
   await props.login(
      store.getState().login, //TODO tarkista onko vaarallista credentialsit storeen
   )
  
   //console.log(response)
   console.log('REDIRECT JA LOGIN MUUTETAAN MUUKSI')
   
   props.setPassword('')
   console.log(store.getState().login)
  
}  */
class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    //this.props.dispatch(logout)
    this.props.logout()

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }

  handleLoginFieldChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = (e) => {
    e.preventDefault()
    
    const { username, password } = this.state
    if(username && password){
      this.props.login({ username, password })
      this.setState({ submitted: true })
      this.props.history.push('/')
    }//else username or password wrongeja
  }

  render() {
    const { submitted } = this.state
    /* if (submitted) {
      return <Redirect to='/' />
    }
 */
    return (
      <div className='login-form'>
        <div>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  {/*<Image src='/logo.png' />*/} Log-in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input 
                      name='username'
                      onChange={this.handleLoginFieldChange}
                      fluid 
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail address' />
                    <Form.Input
                      name='password'
                      onChange={this.handleLoginFieldChange}
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
    
                    <Button onClick={this.handleClick} color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href='#'>Sign Up</a>
                </Message>
              </Grid.Column>
           </Grid>
          </div>
        </div>
    )
  }
}

export default connect(
  //mapStateToProps,
  null,
  { login, logout } //logout, register
  //{ login, setUsername, setPassword }
)(LoginForm) 