https://gm2dkmryha2q.wedpics.com/album
import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';
import Icons from '../Components/Icons';



class WedPics extends Component {
  
  render() {

    return (
      <div>
        {/* <PageTitle>RSVP</PageTitle> */}

        <Image fileName={"wedpics.png"}/>
        <p>Please download the <a href="https://gm2dkmryha2q.wedpics.com/album">wedpics app</a> so you can upload and see all the pics from our day!</p>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              A little reminder so you don’t forget, <br />
              A night of celebration you won’t regret, <br />
              A quick email or text, you know what to do, <br />
              Will help us figure out which table's for you!
            </p>
          </Section>
          <div style={{position: "relative", right: "21px", "margin-bottom": "-20px"}}>
            <Image fileName={"divide-left.jpg"}/>
          </div>
          <Section>
            <p><Icons.Email /></p>
            <p>dundaswedding2018@gmail.com</p>
          </Section>
          <Section>
            <p><Icons.Phone /></p>
            <p>Jake: 07787158280</p>
            <p>Louise: 07751137423</p>
          </Section>
          <div style={{position: "relative", left: "21px", "margin-bottom": "-40px"}}>
            <Image fileName={"divide-right.jpg"}/>
          </div>
          <Section>
            <p style={{"margin-bottom": "70px"}}>
              Please let us know:
              <List>
                <li><BulLeft /><span>If you can attend our wedding as soon as you can.</span><BulRight /></li>
                <li><BulLeft /><span>Also if you know you cannot.</span><BulRight /></li>
                <li><BulLeft /><span>Any dietary requirements and/or allergies.</span><BulRight /></li>
                <li><BulLeft /><span>Any song requests or your favourite ceilidh dances!</span><BulRight /></li>
              </List>
            </p>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default RSVP;
