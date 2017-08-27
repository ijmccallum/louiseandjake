import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import Image from '../Components/Image.jsx';
import styled from 'styled-components';
import Fonts from '../Services/fonts';
import Colors from '../Services/colors';
import Layouts from '../Components/Layouts';
import Border from '../Components/Border.jsx';

const SavyDaty = styled.div`
  font-family: ${Fonts.serif};
  color: ${Colors.homeCopy};
  font-size: 32px;
`;

const Names = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  div {
    margin: 10px;
  }
`;

const Name = styled.div`
  font-family: ${Fonts.serif};
  color: ${Colors.homeCopy};
  text-transform: uppercase;
  font-size: 26px;
  max-width: 300px;
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
              <div>
              <Image fileName='ampersand.jpg' />
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
        
        <Border.Line />

        <Layouts.ContentWidthWrapper>
          <Section>
            <SubTitle>Our Story</SubTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto qui eius officia esse doloribus in assumenda minus ex, nulla, ullam debitis veniam. Temporibus incidunt ad delectus quam ea ipsam.</p>
          </Section>
        </Layouts.ContentWidthWrapper>

        <Layouts.ContentWidthWrapper>
          <Section>
            <Link to="rsvp">
              <Image fileName='rsvp.jpg' />
            </Link>
          </Section>
        </Layouts.ContentWidthWrapper>

          {/* <p>RSVP: dundaswedding2018@gmail.com</p> */}

          {/* <p>Please let us know if you can attend our wedding, and also if you know you cannot. Let us know any dietary requirements and/or allergies.</p> */}


      </div>
    );
  }
}

export default Home;
