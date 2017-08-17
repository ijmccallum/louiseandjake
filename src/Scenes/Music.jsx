import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class Music extends Component {
  render() {
    return (
      <Page 
        title="Music" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        ding dong ping pong
      </Page>
    );
  }
}

export default Music;
