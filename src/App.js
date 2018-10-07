import React, { Component } from 'react';
import './App.css';
import LoginButton from './Components/Login/LoginButton';
import LandingPage from './Components/Landing/LandingPage';


class App extends Component {
  render() {
    return (
      <div className="landing-grid">
        <LandingPage />
        <LoginButton label="Login" className="Login" />
      </div>
    );
  }
}

export default App;
