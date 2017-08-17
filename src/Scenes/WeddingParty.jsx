import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class WeddingParty extends Component {
  render() {
    return (
      <Page 
        title="WeddingParty" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        WeddingParty copy...
      </Page>
    );
  }
}

export default WeddingParty;
