import fire from './config/Fire';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import Home from './Home';
import Homey from './Homey';
import Admin from './TicketPage/Admin';


class Login extends Component {
    constructor() {
        super();
        this.state = ({
          user: null,
        });
        this.authListener = this.authListener.bind(this);
      }

componentDidMount() {
    console.log("hello world")
    this.authListener();
}

authListener() {
    console.log("hey");
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user });
        } else {
            this.setState({ user: null });
        }
    });
}
render() {
    return(
        <div>
            {this.state.user ? (<Homey/>) : (<LoginPage/>)}
        </div>
    );
  }
}

export default Login;