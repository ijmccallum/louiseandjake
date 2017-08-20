import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';

class Music extends Component {
  render() {
    return (
      <div>
        <PageTitle>Playlist Requests</PageTitle>

        <HeroPic fileName={"dundas.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>http://www.baltikceilidhband.com</p>
            <p>Please leave your song suggestions for the evening!</p>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default Music;
