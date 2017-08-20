import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';

class WeddingParty extends Component {
  render() {
    return (
      <div>
        <PageTitle>Wedding Party</PageTitle>

        <HeroPic fileName={"dundas.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              images & names to come!
            </p>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default WeddingParty;
