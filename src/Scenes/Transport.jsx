import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import HeroPic from '../Components/HeroPic.jsx';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';

const Map = styled.div`
  iframe {
    margin: 0;
    display: block;
  }
`;

class Transport extends Component {
  render() {
    return (
      <div>
        {/* <PageTitle>Travel & Directions</PageTitle> */}

        <Image fileName={"travel.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <SubTitle>
              Getting up to Scotland…
            </SubTitle>
            <div style={{"text-align": "left"}}>
              <p>FROM LONDON</p>
              <ul>
                <li>Flybe from City airport has fewer delays than Easyjet from Gatwick, the flight takes just under 1 and a half hours. The tram from Edinburgh airport will take you into the city centre.</li>
                <li>Please book your flights in advance to avoid the higher fares!</li>
                <li>Easyjet sometimes has 20% off offers if you have the app you should get the notification.</li>
                <li>Direct train from London Kings X to Edinburgh Waverley takes 4 and half hours.</li>
              </ul>
              <p>FROM MANCHESTER</p>
              <ul>
                <li>Although you can fly from Manchester to Edinburgh (!), you can get the train via Glasgow or driving is probably the easiest option. Edinburgh is approx. 4 hours in the car from Manchester.</li>
              </ul>
            </div>
          </Section>
        </Layouts.ContentWidthWrapper>

        <Layouts.ContentWidthWrapper>
          <Section>
            <SubTitle>
              And on the day…
            </SubTitle>
            <div style={{"text-align": "left"}}>
              <p>FROM EDINBURGH CITY CENTRE</p>
              <p>If travelling from the centre of Edinburgh, the best route to take is along Queensferry Road and on the A90, towards the Forth Road Bridge. At Echline Junction (the last slip road before the Bridge) take the road up to the roundabout. Turn right at the third exit on to the B800. Head straight over the next roundabout. The entrance to the Castle is on the right 300 metres after leaving the roundabout (and past the flyover) there are signs by the Main gate.</p>
              <br />
              <p>FROM THE M9 (STIRLING)</p>
              <p>If travelling from the M9 (Stirling), exit M9 on Junction 2, for the Forth Road Bridge (A904). Take left turning at the end of slip road, then right leading onto A904. Follow this road, through a small town called ‘Newton’ and continue until you reach the roundabout at the Forth Road Bridge. Drive straight across, heading towards Kirkliston (B800). This will take you onto another mini-roundabout and drive straight across. Dundas is second on the right with signs by the Main gate.</p>
              <br />
              <p>FROM NORTH OF THE RIVER FORTH</p>
              <p>If travelling from the north of the Forth, follow directions to the Forth Road Bridge. Stay in the left lane towards the end of the bridge and take the slip road on the left towards the B800. Stay in the left lane and take the first exit on the roundabout. At the next smaller roundabout take the second exit (straight on) and follow signs for the B800. Continue over the flyover and after 300 metres you will see the sign for Dundas Castle which is the 2nd entrance on your right.</p>
              <br />
              <p>FROM THE SOUTH</p>
              <p>If travelling from the south, take the A720 Edinburgh City Bypass to the junction with the M8. Head west to Junction 2 and then bear north towards the ‘Newbridge roundabout’. Take the M9 and at Junction 1a, follow signs for the Forth Road Bridge. Continue on this road as it eventually merges with the A90. At the Echline Junction (the last slip road before the Bridge) take the road up to the roundabout. Turn right at the third exit on to the B800. Head straight over the next roundabout. The entrance to the Castle is on the right 300 metres after leaving the roundabout (and past the flyover) there are signs by the Main gate.</p>
              <br />
              <p>FROM THE WEST</p>
              <p>If travelling from the west, take the M8 from Glasgow. At Junction 2 head north towards the ‘Newbridge roundabout’. Follow directions as detailed above (from the south).</p>
            </div>
          </Section>
        </Layouts.ContentWidthWrapper>

        <Map>
          <iframe src="https://snazzymaps.com/embed/10331" width="100%" height="300px" style={{border:0}}></iframe>
        </Map>
      </div>
    );
  }
}

export default Transport;
