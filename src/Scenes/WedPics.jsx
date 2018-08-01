import React, { Component } from "react";
import Layouts from "../Components/Layouts";
import Image from "../Components/Image.jsx";
import PageTitle from "../Components/PageTitle.jsx";
import SubTitle from "../Components/SubTitle.jsx";
import Section from "../Components/Section.jsx";
import styled from "styled-components";
import Icons from "../Components/Icons";

const CutOff = styled.div`
  height: calc(100vh - 110px);
  overflow-y: hidden;
`;

class WedPics extends Component {
  render() {
    return (
      <div>
        {/* <PageTitle>RSVP</PageTitle> */}
        <Layouts.ContentWidthWrapper>
          <Section>
            <p>#ShacklefordWedding2018</p>
          </Section>
        </Layouts.ContentWidthWrapper>

        <Image fileName={"wedpics.png"} />
        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              We are having an ‘unplugged’ ceremony but please take as many
              photos as you like the rest of the day!{" "}
            </p>
            <br />
            <p>
              Please download the wedpics app (<a
                href="https://itunes.apple.com/us/app/wedpics-wedding-photo-app/id549402355"
                style={{ display: "inline" }}
              >
                Apple
              </a>,{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.dejami.WedPics&hl=en"
                style={{ display: "inline" }}
              >
                Android
              </a>) or{" "}
              <a href="https://wedpics.com/home" style={{ display: "inline" }}>
                Sign up online
              </a>{" "}
              so you can upload and see all the pics from our day!
            </p>
            <p>
              Use wedding ID: <strong>louiseandjake</strong>
            </p>
          </Section>
          <Section>
            <Image fileName="wedpics.jpg" />
          </Section>
        </Layouts.ContentWidthWrapper>
        <CutOff>
          <iframe
            src="https://gm2dkmryha2q.wedpics.com/album"
            frameborder="0"
            style={{
              width: "100%",
              border: "none",
              height: "100vh",
              display: "block"
            }}
          />
        </CutOff>
      </div>
    );
  }
}

export default WedPics;
