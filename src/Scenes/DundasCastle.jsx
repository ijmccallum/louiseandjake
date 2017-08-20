import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import styled from 'styled-components';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import Border from '../Components/Border.jsx';

const Map = styled.div`
  iframe {
    margin: 0;
    display: block;
  }
`;

const Histroy = styled.div`
  display: table;
  width: 100%;
  text-align: left;
`;

const HRow = styled.div`
  display: table-row;
`;

const HDate = styled.div`
  display: table-cell;
  white-space: nowrap;
  padding: 5px;
`;

const HDescription = styled.div`
  display: table-cell;
  padding: 5px;
`;

class DundasCastle extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          Dundas Castle
        </PageTitle>

        <HeroPic fileName={"dundas.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>
              South Queensferry<br />
              Edinburgh<br />
              EH30 9SP (for sat nav use EH30 9SS)<br />
              0131 319 2039<br />
              www.dundascastle.co.uk<br />
            </p>
          </Section>

        </Layouts.ContentWidthWrapper>
        <Border.Line />
        <Layouts.ContentWidthWrapper>

          <Section>
            <SubTitle>
              Location
            </SubTitle>
            <p>Dundas Castle is situated 8 miles from Edinburgh, approximately half an hour by car west of the city centre.</p>
            <p>Guests should enter by the main gates of the estate leading from the B800 which runs between South Queensferry and Kirkliston.</p>
            <p>Please be advised that the Dundas Castle postcode is not recognised on any GPS navigation systems but by entering EH30 9SS you will be directed to the B800 where you will see the sign for the front entrance to Dundas Castle</p>
          </Section>

        </Layouts.ContentWidthWrapper>
        <Border.Line />
        <Layouts.ContentWidthWrapper>

          <Section>
            <SubTitle>
              History
            </SubTitle>

            <Histroy>
              <HRow>
                <HDate>12th Century</HDate>
                <HDescription>Dundas Clan acquired increasingly large tracts of land along the southern shores of the River Forth</HDescription>
              </HRow>
              <HRow>
                <HDate>15th Century</HDate>
                <HDescription>The greater part of Linlithgowshire, was owned or controlled by Dundas of that Ilk.</HDescription>
              </HRow>
              <HRow>
                <HDate>1818</HDate>
                <HDescription>Henry Dundas built the ‘modern’ castle in, replacing an earlier 17th Century building. William Burn, one of Scotland’s greatest architects, designed the magnificent house.</HDescription>
              </HRow>
              <HRow>
                <HDate>1846</HDate>
                <HDescription>The Dundas family sold the estate to Mr. Russell, a gentleman who had a liking for rearing and betting on horses.</HDescription>
              </HRow>
              <HRow>
                <HDate>1995</HDate>
                <HDescription>Sir Jack inherited Dundas Castle on the death of his mother, in 1995, and the restoration of the ‘Auld Keep’ and the Castle began.</HDescription>
              </HRow>
            </Histroy>
          </Section>
        </Layouts.ContentWidthWrapper>
        
        <Map>
          <iframe src="https://snazzymaps.com/embed/10331" width="100%" height="300px" style={{border:0}}></iframe>
        </Map>
      </div>
    );
  }
}

export default DundasCastle;
