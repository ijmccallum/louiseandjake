import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class DundasCastle extends Component {
  render() {
    return (
      <Page 
        title="DundasCastle" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        Dundas Castle is a castle
      </Page>
    );
  }
}

export default DundasCastle;
