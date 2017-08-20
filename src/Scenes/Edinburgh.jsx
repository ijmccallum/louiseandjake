import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';

class Edinburgh extends Component {
  render() {
    return (
      <div>
        <PageTitle>Edinburgh</PageTitle>

        <HeroPic fileName={"dundas.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <div style={{"text-align": "left"}}>
              <p>The Edinburgh Fringe Festival takes place throughout August, finishing a few days before the wedding however you could have an extended stay North and enjoy the festival beforehand!</p>
            </div>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default Edinburgh;
