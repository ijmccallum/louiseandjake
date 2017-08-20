import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../Services/colors';
import PageTitle from './PageTitle.jsx';
import Fonts from '../Services/fonts';

const Background = styled.div`
  position: absolute;
  z-index: 1;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background-image: url('/public/images/dundas.jpg');
  background-color: ${Colors.tint};
  background-blend-mode: soft-light;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 33%;
  text-align: center;
  padding: 30px;
  color: ${Colors.white};
  text-shadow: -2px 1px 0 rgba(0,0,0,0.2);
`;

const Title = styled.h1`
  font-family: ${Fonts.cursive};
  font-weight: 400;
  font-size: 70px;
  text-align: center;
  position: relative;
  color: white;
  margin: 20px 10px;
`;

class Login extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pass: 'dundaswedding2018',
      lazyPass: 'dev'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if (event.target.value === this.state.pass || event.target.value === this.state.lazyPass) {
      this.props.successHandler();
    }
  }

  render() {
    return (
      <Background>
        <Title>Louise & Jake</Title>
        <p>Password</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="password" style={{"padding": "7px 10px"}}/>
      </Background>
    );
  }
}

export default Login;
