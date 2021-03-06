import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroPic from "../Components/HeroPic.jsx";
import PageTitle from "../Components/PageTitle.jsx";
import SubTitle from "../Components/SubTitle.jsx";
import Section from "../Components/Section.jsx";
import Image from "../Components/Image.jsx";
import Icons from "../Components/Icons";
import styled from "styled-components";
import Fonts from "../Services/fonts";
import Colors from "../Services/colors";
import Layouts from "../Components/Layouts";
import Border from "../Components/Border.jsx";

const Map = styled.div`
  iframe {
    margin: 0;
    display: block;
  }
`;

const SavyDaty = styled.div`
  font-family: ${Fonts.serif};
  color: ${Colors.homeCopy};
  line-height: 1;
  font-size: 18px;
  padding-top: 40px;
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
  div {
    margin: 4px;
  }
  img {
    max-width: 42px !important;
  }
  @media (min-width: 350px) {
    flex-direction: row;
  }
  @media (min-width: 500px) {
    div {
      margin: 10px;
    }
    margin: 0px auto;
    img {
      max-width: 100px !important;
    }
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
  transform: scale(1);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          {/* Louise & Jake’s<br />Wedding */}
          <Image fileName="hometitle.jpg" />
        </PageTitle>

        {/* <SubTitle>
          01.09.18 | Edinburgh
        </SubTitle> */}

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>#ShacklefordWedding2018</p>
          </Section>
        </Layouts.ContentWidthWrapper>

        <HeroPic fileName={"louise-jake.jpg"} />

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              Please join us to celebrate the marriage of <br />
              Louise Kirsteen McCallum<br />
              and<br />
              Jake Edward Michael Shackleford<br />
              at Dundas Castle, Edinburgh<br />
              Saturday 1st September 2018.
            </p>
          </Section>
          <Section>
            <RsvpButtonWrap>
              <Image fileName="rsvp.jpg" />
            </RsvpButtonWrap>
          </Section>
          <Section>
            <p>
              <Icons.Email />
            </p>
            <p>dundaswedding2018@gmail.com</p>
          </Section>
          <Section>
            <p>
              <Icons.Phone />
            </p>
            <p>Jake: 07787158280</p>
            <p>Louise: 07751137423</p>
          </Section>
          <Section>
            <p>42a Cabul Road</p>
            <p>Battersea</p>
            <p>London</p>
            <p>SW11 2PN</p>
          </Section>
          <Section>
            {/* <p>Please let us know:</p> */}
            {/* <p>Any dietary requirements and/or allergies you may have.</p> */}
            {/* <p>Which song will get you on the dance floor!</p> */}
          </Section>
          <Section>
            <p style={{ "padding-bottom": "60px" }}>
              <strong>Dress code:</strong> morning dress, highland dress, or
              lounge suits.
            </p>
            <p>Carriages at midnight</p>
          </Section>
        </Layouts.ContentWidthWrapper>
        <Map>
          <iframe
            src="https://snazzymaps.com/embed/10331"
            width="100%"
            height="300px"
            style={{ border: 0 }}
          />
        </Map>

        {/* <p>RSVP: dundaswedding2018@gmail.com</p> */}

        {/* <p>Please let us know if you can attend our wedding, and also if you know you cannot. Let us know any dietary requirements and/or allergies.</p> */}
      </div>
    );
  }
}

export default Home;
