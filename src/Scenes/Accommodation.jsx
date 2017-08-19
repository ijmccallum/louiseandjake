import React, { Component } from 'react';
import Page from '../Components/Page.jsx';
import Bed from '../Components/Bed';
import styled from 'styled-components';

const Hotel =styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Room = styled.div`
  width: 25%;
`;

class Accommodation extends Component {
  render() {
    return (
      <Page 
        title="Accomodation" 
        heroPic="dundas.jpg" 
        backgroundSize="cover"
        isLive={this.props.isLive}
      >

        Bed & Breakfasts, and local hotels
        <Hotel>
          <Room>
            <Bed details={{
              title: "Dakota",
              price: "Starting at 109, includes breakfast.",
              distance: "?",
              address: "11 Ferrymuir Retail Park, South Queensferry, Edinburgh EH30 9QZ, UK",
              url: "http://edinburgh.dakotahotels.co.uk/"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "Hawes Inn",
              description: "14 en-suite rooms, suitable for families, one with disabled access.",
              price: "Starting at 72, includes breakfast.",
              distance: "?",
              address: "7 Newhalls Road, South Queensferry, EH30 9TA",
              url: "http://www.vintageinn.co.uk/restaurants/scotland-northern-ireland/thehawesinnsouthqueensferry"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "Queens Crossing Premier Travel Inn",
              description: "70 rooms, reasturaunt next door, prices do not include breakfast",
              price: "Between 60 and 80",
              distance: "?",
              address: "Builyeon Road, South Queensferry, Edinburgh, EH30 9YJ",
              url: "https://www.brewersfayre.co.uk/pub-restaurant/Edinburgh/Queens-Crossing-Queensferry.html"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "Orocco Peir",
              description: "12 rooms, price includes breakfast, ",
              price: "Single occupancy from 100, Double from 150, Family from 170",
              distance: "?",
              address: "17 The High Street, South Queensferry, West Lothian, Edinburgh, EH30 9PP",
              url: "http://www.oroccopier.co.uk/l"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "Almondhill Guest House",
              description: "1 en-suite double room, 1 standard twin room, and a double bredroom. A taxi service can be arranged to and from the castle.",
              price: "from 35",
              distance: "?",
              address: "7 Almondhill Cottages, Kirkliston, EH29 9EQ",
              url: "http://www.privatestay.com/accommodation/Britain/Edinburgh_and_Glasgow/Kirkliston-Almondhill_Guest_House_00006385.php"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "Sheraton Grand ",
              description: "?",
              price: "?",
              distance: "?",
              address: "1 Festival Square, Edinburgh, Scotland, EH3 9SR",
              url: "http://www.sheratonedinburgh.co.uk/"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "The Balmoral",
              description: "?",
              price: "?",
              distance: "?",
              address: "1 PRINCES STREET, Edinburgh, EH2 2EQ",
              url: "https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral-hotel/"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "G&V Royal Mile Hotel",
              description: "?",
              price: "?",
              distance: "?",
              address: "1 George IV Bridge, Edinburgh, EH1 1AD",
              url: "https://www.quorvuscollection.com/en/gandv-hotel-edinburgh"
            }} />
          </Room>

          <Room>
            <Bed details={{
              title: "The Chester Residence",
              description: "?",
              price: "?",
              distance: "?",
              address: "?",
              url: "http://www.chester-residence.com/"
            }} />
          </Room>

        </Hotel>  

      </Page>
    );
  }
}

export default Accommodation;
