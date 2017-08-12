import React, { Component } from 'react';
import Page from '../Components/Page.jsx';
import AuthInput from '../Components.AuthInput.jsx';

class Password extends Component {
  render() {
    return (
      <Page title="Password" heroPic="dundas.jpg" backgroundSize="cover">
        password!
        <input type="text"/>
      </Page>
    );
  }
}

export default Password;
