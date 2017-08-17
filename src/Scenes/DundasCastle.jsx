import React, { Component } from 'react';
import Page from '../Components/Page.jsx';
import styled from 'styled-components';

const Map = styled.div`
  iframe {
    margin: 0;
    display: block;
  }
`;
class DundasCastle extends Component {
  render() {
    return (
      <div>
        <Page 
          title="DundasCastle" 
          heroPic="dundas.jpg" 
          backgroundSize="cover"
          isLive={this.props.isLive}
        >
          Dundas Castle is a castle
        </Page>
        <Map>
          <iframe src="https://snazzymaps.com/embed/10331" width="100%" height="300px" style={{border:0}}></iframe>
        </Map>
      </div>
    );
  }
}

export default DundasCastle;
