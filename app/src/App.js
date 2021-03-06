import React from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import { Profile } from './components/profile';
import AddMeme from './components/addMeme';
import MemeDetail from './components/memeDetail';
import Login from './components/login';
import Register from './components/register';
import { userContext } from './userContext';
import datos from './basePrueba/base';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {},
      authenticated: false,
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.uploadMeme = this.uploadMeme.bind(this);
  }

  componentDidMount() {
    if (localStorage.user) {
      this.setState({ user: JSON.parse(localStorage.user), authenticated: true, token: localStorage.token });
    }
  }

  logout() {
    this.setState({ user: {}, authenticated: false, token: '' });
    localStorage.clear();
  }

  login(loggedUser, authToken) {
    this.setState({ user: loggedUser, authenticated: true, token: authToken });
  }

  uploadMeme(meme) {
    let newId = datos.memes.length + 1;
    meme.id = newId;
    datos.memes.push(meme);
  }

  render() {
    const value = {
      user: this.state.user,
      authenticated: this.state.authenticated,
      logout: this.logout,
    };
    return (
      <userContext.Provider value={value}>
        <Router>
          <Header></Header>
          <div className="container-fluid">
            <Switch>
              <Route path="/perfil">
                <Profile />
              </Route>
              <Route path="/login">
                <Login loginUser={this.login} />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/subirMeme">
                <AddMeme uploadMeme={this.uploadMeme} />
              </Route>
              <Route path="/meme/:meme">
                <MemeDetail />
              </Route>
              <Route path="/memes/:category">
                <Main />
              </Route>
              <Route path="/">
                <Main />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </userContext.Provider>
    );
  }
}
export default App;
