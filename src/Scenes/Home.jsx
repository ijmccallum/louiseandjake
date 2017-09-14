import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import Image from '../Components/Image.jsx';
import Icons from '../Components/Icons';
import styled from 'styled-components';
import Fonts from '../Services/fonts';
import Colors from '../Services/colors';
import Layouts from '../Components/Layouts';
import Border from '../Components/Border.jsx';

const SavyDaty = styled.div`
  font-family: ${Fonts.serif};
  color: ${Colors.homeCopy};
  line-height:1;
  font-size: 18px;
  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 700px) {
    font-size: 26px;
  }
`;

const Names = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div { margin: 4px; }
  img { max-width: 42px !important; }
  @media (min-width: 350px) {
    flex-direction: row;
  }
  @media (min-width: 500px) {
    div { margin: 10px; }
    margin: 0px auto;
    img { max-width: 100px !important; }
  }
`;

const Name = styled.div`
  font-family: ${Fonts.serif};
  color: ${Colors.homeCopy};
  text-transform: uppercase;
  max-width: 300px;
  font-size: 16px;
  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 700px) {
    font-size: 26px;
  }
`;

const RsvpButtonWrap = styled.div`
  transform:scale(1);
  transition: transform 0.2s ease;
  &:hover {
    transform:scale(1.02);
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          {/* Louise & Jake’s<br />Wedding */}
          <Image fileName='hometitle.jpg' />
        </PageTitle>

        {/* <SubTitle>
          01.09.18 | Edinburgh
        </SubTitle> */}

        <HeroPic fileName={"louise-jake.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <Image fileName="save-the-date.jpg"/>

            <SavyDaty>
              <span style={{position: "relative", top: "-20px"}}>1st September 2018</span><br />
              Please join us to celebrate the marriage of
            </SavyDaty>

            <Names>
              <Name>
                Louise Kirsteen McCallum
              </Name>
              <div style={{'min-width': '42px'}}>
              <Image fileName='ampersand.jpg'/>
              </div>
              <Name>
                Jake Edward<br />Michael Shackleford
              </Name>
            </Names>

            <SavyDaty>
              at Dundas Castle, Edinburgh
            </SavyDaty>
          </Section>
        </Layouts.ContentWidthWrapper>
        
        {/* <Border.Line /> */}

        <Layouts.ContentWidthWrapper>
          <Section>
            <RsvpButtonWrap>
              <Link to="rsvp">
                <Image fileName='rsvp.jpg' />
              </Link>
            </RsvpButtonWrap>
          </Section>
          <Section>
            <p><Icons.Email /></p>
            <p>dundaswedding2018@gmail.com</p>
          </Section>
          <Section>
            <p><Icons.Phone /></p>
            <p>Jake: 07787158280</p>
            <p>Louise: 07751137423</p>
          </Section>
        </Layouts.ContentWidthWrapper>

          {/* <p>RSVP: dundaswedding2018@gmail.com</p> */}

          {/* <p>Please let us know if you can attend our wedding, and also if you know you cannot. Let us know any dietary requirements and/or allergies.</p> */}


      </div>
    );
  }
}

export default Home;
