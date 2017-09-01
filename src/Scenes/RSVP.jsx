import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';
import Icons from '../Components/Icons';



class RSVP extends Component {
  
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
        @media (max-width: 500px) { display: none; }
    `;
      const BulLeft = styled.div`
        width: 64px;
        min-width: 64px;
        height: 19px;
        background-image: url(${window.imgRoot}/bullet.jpg);
        background-repeat: no-repeat;
        background-position: center left;
        opacity: 0.6;
        @media (max-width: 500px) { display: none; }
    `;

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
