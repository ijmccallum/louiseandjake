import React, { Component } from 'react';
import Page from '../Components/Page.jsx';

class Home extends Component {
  render() {
    return (
      <Page 
        title="Louise & Jake" 
        heroPic="louise-jake.jpg" 
        backgroundSize="contain"
        isLive={this.props.isLive}
      >
        {String(this.props.isLive)}
        September 1st 2018
      </Page>
    );
  }
}

export default Home;
