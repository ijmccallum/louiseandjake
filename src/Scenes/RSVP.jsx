import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class RSVP extends Component {
  render() {
    return (
      <Page 
        title="RSVP" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        RSVP copy...
      </Page>
    );
  }
}

export default RSVP;
