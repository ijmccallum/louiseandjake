import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

//#323232

class Accommodation extends Component {
  render() {
    return (
      <Page 
        title="Accommodation" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >
        accommodation copy...
      </Page>
    );
  }
}

export default Accommodation;
