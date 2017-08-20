import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from './Icons.jsx';
import Login from './Login.jsx';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

class Body extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      history.replace("/login");
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return <Login successHandler={this.props.handleLogin} />
    }
  }
}

function Footer(props){
  if (props.isLoggedIn) {
    return props.children;
  } else {
    return null;
  }
}

export default {
  Body, Footer
}