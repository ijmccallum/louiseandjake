import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class Transport extends Component {
  render() {
    return (
      <Page 
        title="Transport" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        Transport copy...
      </Page>
    );
  }
}

export default Transport;
