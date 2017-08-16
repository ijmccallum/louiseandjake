import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pass: 'dundaswedding2018'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === this.state.pass) {
      this.props.successHandler();
    }

    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <Page title="Password" heroPic="dundas.jpg" backgroundSize="cover">
        <LoginInput successHandler={this.props.successHandler}/>
      </Page>
    );
  }
}

export default Login;
