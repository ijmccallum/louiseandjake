import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import styled from 'styled-components';
import HeroPic from '../Components/HeroPic.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import Colors from '../Services/colors';
import Bed from '../Components/Bed';

const GridWrap =styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const GridCell = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid ${Colors.rule};
  border-radius: 5px;
  @media (min-width:800px){
    width: 45%;
  }
  @media (min-width:1600px){
    width: 30%;
  }
`;

class Accommodation extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          Accomodation
        </PageTitle>

        <HeroPic fileName={"dundas.jpg"}/>

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>Please note we have reserved rooms at Dundas Castle for the wedding party and close family only.</p>
          </Section>
        </ Layouts.ContentWidthWrapper>

        <Section>
          <SubTitle>Bed & Breakfasts, and local hotels</SubTitle>
          <GridWrap>
            <GridCell>
              <Bed details={{
                title: "Dakota",
                price: "Starting at 109, includes breakfast.",
                distance: "?",
                address: "11 Ferrymuir Retail Park, South Queensferry, Edinburgh EH30 9QZ, UK",
                url: "http://edinburgh.dakotahotels.co.uk/"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "Hawes Inn",
                description: "14 en-suite rooms, suitable for families, one with disabled access.",
                price: "Starting at 72, includes breakfast.",
                distance: "?",
                address: "7 Newhalls Road, South Queensferry, EH30 9TA",
                url: "http://www.vintageinn.co.uk/restaurants/scotland-northern-ireland/thehawesinnsouthqueensferry"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "Queens Crossing Premier Travel Inn",
                description: "70 rooms, reasturaunt next door, prices do not include breakfast",
                price: "Between 60 and 80",
                distance: "?",
                address: "Builyeon Road, South Queensferry, Edinburgh, EH30 9YJ",
                url: "https://www.brewersfayre.co.uk/pub-restaurant/Edinburgh/Queens-Crossing-Queensferry.html"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "Orocco Peir",
                description: "12 rooms, price includes breakfast, ",
                price: "Single occupancy from 100, Double from 150, Family from 170",
                distance: "?",
                address: "17 The High Street, South Queensferry, West Lothian, Edinburgh, EH30 9PP",
                url: "http://www.oroccopier.co.uk/l"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "Almondhill Guest House",
                description: "1 en-suite double room, 1 standard twin room, and a double bredroom. A taxi service can be arranged to and from the castle.",
                price: "from 35",
                distance: "?",
                address: "7 Almondhill Cottages, Kirkliston, EH29 9EQ",
                url: "http://www.privatestay.com/accommodation/Britain/Edinburgh_and_Glasgow/Kirkliston-Almondhill_Guest_House_00006385.php"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "Sheraton Grand ",
                description: "?",
                price: "?",
                distance: "?",
                address: "1 Festival Square, Edinburgh, Scotland, EH3 9SR",
                url: "http://www.sheratonedinburgh.co.uk/"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "The Balmoral",
                description: "?",
                price: "?",
                distance: "?",
                address: "1 PRINCES STREET, Edinburgh, EH2 2EQ",
                url: "https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral-hotel/"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "G&V Royal Mile Hotel",
                description: "?",
                price: "?",
                distance: "?",
                address: "1 George IV Bridge, Edinburgh, EH1 1AD",
                url: "https://www.quorvuscollection.com/en/gandv-hotel-edinburgh"
              }} />
            </GridCell>

            <GridCell>
              <Bed details={{
                title: "The Chester Residence",
                description: "?",
                price: "?",
                distance: "?",
                address: "?",
                url: "http://www.chester-residence.com/"
              }} />
            </GridCell>

          </GridWrap>  
        </Section>
      </div>
    );
  }
}

export default Accommodation;
