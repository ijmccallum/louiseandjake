import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class Edinburgh extends Component {
  render() {
    return (
      <Page 
        title="Edinburgh" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        Edinburgh is a city
      </Page>
    );
  }
}

export default Edinburgh;
