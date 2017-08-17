import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from './Icons.jsx';
import Login from './Login.jsx';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

const LogOutBtn = styled.button`
  position: absolute;
  fill: black;
  z-index: 10;
  top: 50px;
  right: 11px;
  background: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  svg {
    width: 10px; height: 10px;
  }
`;

function LogOut(props) {
  let devUrl = "localhost";
  if (document.location.host.indexOf(devUrl) !== -1 ) {
    return (
      <LogOutBtn onClick={props.handleLogout}>
        <Icons.X />
      </LogOutBtn>
    );
  } else {
    return null;
  }
}

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
          <LogOut handleLogout={this.props.handleLogout} />
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