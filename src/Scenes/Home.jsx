import React, { Component } from 'react';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          {/* Louise & Jake’s<br />Wedding */}
          <img src={`${window.imgRoot}/glitter.png`} />
        </PageTitle>

        <SubTitle>
          Save the Date | 01.09.18
        </SubTitle>

        <HeroPic fileName={"louise-jake.jpg"}/>

        <Section>
          <p>
            Please Save the Date Saturday 1st September 2018 for the Marriage of<br />
            Louise Kirsteen McCallum & Jake Edward Michael Shackleford<br />
            at Dundas Castle, Edinburgh
          </p>

          <p>RSVP: dundaswedding2018@gmail.com</p>

          <p>Please let us know if you can attend our wedding, and also if you know you cannot. Let us know any dietary requirements and/or allergies.</p>
        </Section>

      </div>
    );
  }
}

export default Home;
