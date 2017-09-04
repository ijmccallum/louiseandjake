import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import styled from 'styled-components';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import Colors from '../Services/colors';
import Bed from '../Components/Bed';
import Border from '../Components/Border.jsx';
import Image from '../Components/Image.jsx';

const Step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
`;
const Bar = styled.div`
  min-width: 70px;
  max-width: 70px;
  font-weight: bold;
`;

class Ceilidh extends Component {
  render() {
    return (
      <div>
        <Image fileName="accom.jpg" />

        <HeroPic fileName={"ceilidh.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>Don’t worry if you do not know the steps, <a href="http://www.baltikceilidhband.com" target="_blank">The Baltik Ceilidh Band</a> will be keeping us right on the night. If you do fancy giving it a go before though, here are some links and popular dances!</p>
            https://ceilidhclub.com/events/
            London Ceilidh Club events - tickets £16.50
            http://ceilidhexperience.visitscotland.com/#choose-dance
          </Section>

          <Section>
            <h2>THE DASHING WHITE SERGEANT</h2>
            Formation: three facing three around the room, man between two ladies or lady between two men.
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-8: </Bar>
              <div>
                Join up in a circle of 6 and circle round to the left for 8 steps (4 bars) and back to the right.
              </div>
            </ Step>
            <Step>
              <Bar>9-12: </Bar>
              <div>
                The person in the middle turns to the person on their right and sets to them, then turns them once round right hand (variation - both hands). The other partner stands still.
              </div>
            </ Step>
            <Step>
              <Bar>13-16: </Bar>
              <div>
              Repeat with the other partner.
              </div>
            </ Step>
            <Step>
              <Bar>17-24: </Bar>
              <div>
              Using elbow grip, turn 1st partner, then 2nd partner, then 1st partner, then 2nd partner. (Variation - dance a reel of three, giving left shoulder to 1st partner to start).
              </div>
            </ Step>
            <Step>
              <Bar>25-28: </Bar>
              <div>
              In the lines of three, advance towards each other (two skip steps) and retire.
              </div>
            </ Step>
            <Step>
              <Bar>29-32: </Bar>
              <div>
              Both lines dance forwards, one line raising their hands in an arch and the other line dancing underneath, and dance on to meet the next set of three coming in the other direction.
              </div>
            </ Step>
            Repeat with new three.
          </Section>

          <Section>
            <h2>STRIP THE WILLOW</h2>
            Formation: Longwise sets of 4 couples, men on the right and ladies on the left as viewed from the band. Couples number from nearest the band.
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-8: </Bar>
              <div>
              1st couple spin RH.
              </div>
            </ Step>
            <Step>
              <Bar>9-20: </Bar>
              <div>
              1st lady turns 2M LH, partner RH, 3M LH, partner RH, 4M LH.
              </div>
            </ Step>
            <Step>
              <Bar>21-24: </Bar>
              <div>
              Spin with partner RH to the end of the phrase.
              </div>
            </ Step>
            <Step>
              <Bar>25-35: </Bar>
              <div>
              1st man turns 4L LH, partner RH, 3L LH, partner RH, 2L LH.
              </div>
            </ Step>
            <Step>
              <Bar>37-40: </Bar>
              <div>
              Spin with partner RH to the end of the phrase
              </div>
            </ Step>
            <Step>
              <Bar>41-52: </Bar>
              <div>
              1st lady works down men, while 1st man works down ladies, turning 2C LH, partner RH, 3C LH, partner RH, 4C LH.
              </div>
            </ Step>
            <Step>
              <Bar>53-56: </Bar>
              <div>
              Spin with partner RH to the end of the phrase.
              </div>
            </ Step>
          </Section>

          <Section>
            <h2>THE GAY GORDONS</h2>
            Formation: couples
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-2: </Bar>
              <div>
              Right hands joined over lady's shoulder (man's arm behind her back) and left hands joined in front, walk forward for four steps, starting on the right foot.
              </div>
            </ Step>
            <Step>
              <Bar>3-4: </Bar>
              <div>
              Still moving in the same direction, and without letting go, pivot on the spot (so left hand is behind lady and right hand is in front) and take four steps backwards.
              </div>
            </ Step>
            <Step>
              <Bar>5-8: </Bar>
              <div>
              Repeat in the opposite direction.
              </div>
            </ Step>
            <Step>
              <Bar>9-12: </Bar>
              <div>
              Drop left hands, raise right hands above lady's head. Lady pivots on the spot. (The man may set).
              </div>
            </ Step>
            <Step>
              <Bar>13-16: </Bar>
              <div>
              Joining hands in ballroom hold, polka round the room.
              </div>
            </ Step>
          </Section>

          <Section>
            <h2>THE ST BERNARD’S WALTZ</h2>
            Formation: couples
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-4: </Bar>
              <div>
              In ballroom hold, take three steps sideways towards the lady's right, man's left, then stamp both feet.
              </div>
            </ Step>
            <Step>
              <Bar>5-6: </Bar>
              <div>
              Take two steps sideways in the opposite direction.
              </div>
            </ Step>
            <Step>
              <Bar>7-8: </Bar>
              <div>
              Take two steps towards the centre of the room (lady heading forwards with right foot then left foot, man backwards with left foot then right).
              </div>
            </ Step>
            <Step>
              <Bar>9-10: </Bar>
              <div>
              Take two steps back out (same feet).
              </div>
            </ Step>
            <Step>
              <Bar>11-12: </Bar>
              <div>
              Lady turns about on the spot under the joined hands.
              </div>
            </ Step>
            <Step>
              <Bar>13-16: </Bar>
              <div>
              Waltz onwards round the room.
              </div>
            </ Step>
          </Section>

          <Section>
            <h2>THE MILITARY TWOSTEP</h2>
            Formation: couples
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-2: </Bar>
              <div>
              Lady with hand on man's shoulder, man with arm around waist, touch heel then toe of outer foot to ground twice, bouncing on the inner foot with each touch.
              </div>
            </ Step>
            <Step>
              <Bar>3-4: </Bar>
              <div>
              Walk forward for three steps then turn towards each other to face in the opposite direction.
              </div>
            </ Step>
            <Step>
              <Bar>5-8: </Bar>
              <div>
              Repeat in the opposite direction.
              </div>
            </ Step>
            <Step>
              <Bar>9-10: </Bar>
              <div>
              Facing partner and joining both hands, bounce on both feet, then kick the right foot across the body (to the left), followed by the left foot across the body (to the right).
              </div>
            </ Step>
            <Step>
              <Bar>11-12: </Bar>
              <div>
              The man raises his left hand and the lady turns underneath (dropping the other hand).
              </div>
            </ Step>
            <Step>
              <Bar>13-16: </Bar>
              <div>
              Polka around the room.
              </div>
            </ Step>
          </Section>

          <Section>
            <h2>THE CANADIAN BARN DANCE</h2>
            Formation: couples
            <Step>
              <Bar>Bars: </Bar>
              <div>
                Description
              </div>
            </ Step>
            <Step>
              <Bar>1-2: </Bar>
              <div>
              Starting with the outside foot, walk forward for three steps and hop (or kick).
              </div>
            </ Step>
            <Step>
              <Bar>3-4: </Bar>
              <div>
              Walk backwards for three steps and hop.
              </div>
            </ Step>
            <Step>
              <Bar>5-6: </Bar>
              <div>
              Skip sideways away from your partner (men towards the centre of the room, ladies towards the edge) for two steps and clap.
              </div>
            </ Step>
            <Step>
              <Bar>7-8: </Bar>
              <div>
              Return to partner and join in ballroom (waltz) hold.
              </div>
            </ Step>
            <Step>
              <Bar>9-12: </Bar>
              <div>
              In ballroom hold, skip sideways to the man's left, lady's right for two steps then back again.
              </div>
            </ Step>
            <Step>
              <Bar>13-16: </Bar>
              <div>
              Use four step-hops to polka anti-clockwise round the room.
              </div>
            </ Step>
          </Section>

        </ Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default Ceilidh;
