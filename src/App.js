import React from 'react';
import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default class App extends React.Component {
  state = {
    isLoggedIn: true,
    username: ''
  }
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  }
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: ''
    });
  }
  onUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div>
        <Header {...this.state} logout={this.onLogout}/>
        {this.state.isLoggedIn ?
          <Dashboard username={this.state.username}/>
          :
          <Login onLogin={this.onLogin} onUsernameChange={this.onUsernameChange} username={this.state.username}/>
        }
      </div>
    )
  }
}
