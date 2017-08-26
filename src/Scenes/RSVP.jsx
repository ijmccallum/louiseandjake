import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';

class RSVP extends Component {
  render() {
    return (
      <div>
        {/* <PageTitle>RSVP</PageTitle> */}

        <Image fileName={"rsvpgold.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              A little reminder so you don’t forget, <br />
              A night of celebration you won’t regret, <br />
              A quick email or text, you know what to do, <br />
              Will help us figure out which table's for you!
            </p>

            <p>RSVP: dundaswedding2018@gmail.com</p>
            <p>Jake: 07787158280</p>
            <p>Louise: 07751137423</p>
            <p>Please let us know if you can attend our wedding as soon as you can, and also if you know you cannot.</p>
            <p>Please let us know any of your dietary requirements and/or allergies.</p>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default RSVP;
