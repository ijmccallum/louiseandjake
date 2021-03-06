import React, { Component } from "react";
import Layouts from "../Components/Layouts";
import Image from "../Components/Image.jsx";
import PageTitle from "../Components/PageTitle.jsx";
import SubTitle from "../Components/SubTitle.jsx";
import Section from "../Components/Section.jsx";
import styled from "styled-components";
import Icons from "../Components/Icons";

const Map = styled.div`
  iframe {
    margin: 0;
    display: block;
  }
`;

class BBQ extends Component {
  render() {
    const List = styled.ul`
      list-style: none;
      padding: 0;
      li {
        padding: 10px 0;
        display: flex;
        justify-content: center;
      }
    `;

    const BulRight = styled.div`
      width: 64px;
      min-width: 64px;
      height: 19px;
      background-image: url(${window.imgRoot}/bullet-right.jpg);
      background-repeat: no-repeat;
      background-position: center left;
      opacity: 0.6;
      @media (max-width: 500px) {
        display: none;
      }
    `;
    const BulLeft = styled.div`
      width: 64px;
      min-width: 64px;
      height: 19px;
      background-image: url(${window.imgRoot}/bullet.jpg);
      background-repeat: no-repeat;
      background-position: center left;
      opacity: 0.6;
      @media (max-width: 500px) {
        display: none;
      }
    `;

    return (
      <div>
        {/* <PageTitle>RSVP</PageTitle> */}
        <Layouts.ContentWidthWrapper>
          <Section>
            <p>#ShacklefordWedding2018</p>
          </Section>
        </Layouts.ContentWidthWrapper>

        <Layouts.ContentWidthWrapper>
          <div
            style={{
              position: "relative",
              right: "21px",
              "margin-bottom": "-20px"
            }}
          >
            <Image fileName={"divide-left.jpg"} />
          </div>
          <Section>
            <p>Please join us for an</p>
            <Image fileName={"idobbq.jpg"} />
            <p>
              We will be hosting a BBQ on Sunday 2nd September 2018, <br />from
              12 noon onwards at Louise’s house in Stirling.
            </p>
            <p>(11 Manse Crescent, FK7 9AJ)</p>
            <p>We would love it if you could join us!</p>
          </Section>
          <div
            style={{
              position: "relative",
              left: "21px",
              "margin-bottom": "-40px"
            }}
          >
            <Image fileName={"divide-right.jpg"} />
          </div>
        </Layouts.ContentWidthWrapper>
        <Map>
          <iframe
            src="https://snazzymaps.com/embed/10331"
            width="100%"
            height="300px"
            style={{ border: 0 }}
          />
        </Map>
      </div>
    );
  }
}

export default BBQ;
