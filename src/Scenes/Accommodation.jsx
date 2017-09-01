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
const GridWrap =styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const GridCell = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px;
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
        <Image fileName="accom.jpg" />

        {/* <HeroPic fileName={"dundas.jpg"}/> */}

        <Layouts.ContentWidthWrapper>
          <Section>
            <p>Please note we have reserved rooms at Dundas Castle for the wedding party and close family only.</p>
          </Section>
        </ Layouts.ContentWidthWrapper>

        <Section>
          <SubTitle>Bed & Breakfasts, and local hotels</SubTitle>
          <GridWrap>
            <GridCell>
              <Bed
                title="Dakota"
                description={
                  <div>
                    <p>Dakota is the closest Hotel to Dundas Castle. Being a few minutes drive, it has 103 bedrooms and 2 suites and is a five minute drive from Dundas Castle. It has a bar & grill and residents gym. The bedrooms have excellent amenities including a plasma screen with 65 channels, fresh cookies on arrival and toiletries from the South of France.</p>
                    <p>Prices range from £100.00 and include Breakfast Subject to availability</p>
                  </div>
                }
                address={
                  <div>
                    <p>Ferrymuir Retail Park </p>
                    <p>South Queensferry </p>
                    <p>Edinburgh </p>
                    <p>Tel: 0870 423 4293</p>
                  </div>
                }
                url="http://edinburgh.dakotahotels.co.uk/"
              />
            </GridCell>

            <GridCell>
              <Bed
                title="Hawes Inn"
                description={
                  <div>
                    <p>A five minutes drive from the Castle, the Hawes Inn is situated underneath the Forth Rail Bridge. They have 14 en-suite bedrooms, each containing essentials such as telephone, television and tea & coffee making facilities. They also have rooms suitable for families and one with disabled access.</p>
                    <p>Prices start from £99.00 per room per night including a continental breakfast. Subject to availability</p>
                  </div>
                }
                address={
                  <div>
                    <p>Inn Keepers Lodge</p>
                    <p>7 Newhalls Road</p>
                    <p>South Queensferry</p>
                    <p>Tel: 0131 331 1990 or Reservations 0870 243 0500</p>
                  </div>
                }
                url="http://www.vintageinn.co.uk/thehawesinnsouthqueensferry"
              />
            </GridCell>

            <GridCell>
              <Bed
                title="Queens Crossing Premier Travel Inn"
                description={
                  <div>
                    <p>The Premier Travel Inn is a few minutes drive from Dundas. They have 70 bedrooms with private facilities, including family rooms and rooms with disabled access. Each bedroom has a television and tea & coffee making facilities. The restaurant next door serves food all day and can be accessed through the inn.</p>
                    <p>All bedrooms are from approximately £60 - £80 and breakfast can be added to your booking at an additional cost. Subject to availability</p>
                  </div>
                }
                address={
                  <div>
                    <p>Builyeon Road</p>
                    <p>South Queensferry</p>
                    <p>Tel: 0871 527 8364</p>
                  </div>
                }
                url="http://www.premierinn.com"
              />
            </GridCell>

            <GridCell>
              <Bed
                title="Orocco Pier"
                description={
                  <div>
                    <p>Located in the centre of South Queensferry, this contemporary hotel has a choice of bar areas and a restaurant. The twelve bedrooms provide; televisions, DVD & CD players, Wi-Fi and broadband access, en-suite bathrooms & showers, mini-bar, hairdryers and ironing board and iron and are subject to availability</p>
                    <p>Single occupancy from £100.00, Double occupancy from £119.00, Family occupancy from £149.00 – children over the age of 5 are an additional £20.00 each. All prices are per room per night and include breakfast.</p>
                  </div>
                }
                address={
                  <div>
                    <p>17 The High Street</p>
                    <p>South Queensferry</p>
                    <p>Tel: 0870 118 1664</p>
                  </div>
                }
                url="http://www.oroccopier.co.uk"
              />
            </GridCell>

            <GridCell>
              <Bed
                title="Almondhill Guest House"
                description={
                  <div>
                    <p>Situated in the village of Kirkliston, Almond Hill Guest House is a five minute drive from Dundas Castle. The 4 star guest house has 1 en-suite double room, 1 standard twin room and a double bedroom, which has private facilities. Each of the bedrooms has tea & coffee making facilities and hairdryers. Transport can be provided to the Castle and a taxi service can be arranged for the return journey.</p>
                    <p>Bed and Full Breakfast rates start from £45.00 single occupancy and £70.00 double occupancy Subject to availability.</p>
                  </div>
                }
                address={
                  <div>
                    <p>8 Almondhill Cottages</p>
                    <p>Kirkliston</p>
                    <p>Tel: 0131 333 1570</p>
                  </div>
                }
                url=""
              />
            </GridCell>
          </GridWrap>
        </Section>

        <Section>
          <SubTitle>4* HOTELS</SubTitle>
          <GridWrap>
            <GridCell>
              <Bed
                title="Hotel du Vin & Bistro"
                description={
                  <div>
                    <p>Just a short walk from the Royal Mile in Edinburgh, Hotel du Vin has 47 bedrooms and suites and is perfectly situated within the City Centre. With its trademark Bistro, the hotel offers a relaxing haven, serving the finest classic European cuisine. Dundas Castle is approximately a 25</p>
                  </div>
                }
                address={
                  <div>
                    <p>11 Bristo Place</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 247 4900</p>
                  </div>
                }
                url="http://www.hotelduvin.com"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="Houston House Hotel"
                description={
                  <div>
                    <p>Situated approximately a 15 minute drive from Dundas Castle and within easy reach of both Edinburgh and Glasgow. The handsome 17th Century tower house is surrounded by over 20 acres of parkland and private gardens. Enjoy the leisure centre, which includes swimming pool, sauna, steam room, gym and beauty salon or relax in your luxurious bedroom, which has been elegantly furnished and has a wide range of modern facilities. Each room is en-suite, some with disabled access.</p>
                  </div>
                }
                address={
                  <div>
                    <p>Uphall</p>
                    <p>West Lothian</p>
                    <p>Tel: 01506 853 831</p>
                  </div>
                }
                url="http://www.macdonaldhotels.co.uk"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="Hilton Edinburgh Airport"
                description={
                  <div>
                    <p>Approximately 15 minutes drive from Dundas Castle and a few minutes drive from the airport in their courtesy coach. Hilton Edinburgh Airport is a comfortable convenient hotel, which boasts a swimming pool, spa, steam room, a fully equipped gym and a heath and beauty salon.</p>
                  </div>
                }
                address={
                  <div>
                    <p>Near Ingliston</p>
                    <p>Tel: 0131 519 4400</p>
                  </div>
                }
                url="http://www.hilton.com"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="The George Edinburgh"
                description={
                  <div>
                    <p>A few minutes stroll from Princes Street in the centre of Edinburgh. The George is only a 25 minute journey to Dundas Castle. They have 195 bedrooms, a mixture of double, twin, single, family rooms and suites. Each bedroom contains a television with satellite, telephone, mini bar, trouser press and tea and coffee making facilities. There are also rooms with disabled access. You can choose to eat in the bar area or in the Le Chambertin Restaurant or the Carvers Restaurant for more casual dining.</p>
                  </div>
                }
                address={
                  <div>
                    <p>19-21 George Street</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 225 1251</p>
                  </div>
                }
                url="http://www.edinburghgeorgehotel.co.uk"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="Norton House Hotel"
                description={
                  <div>
                    <p>A 15 minute drive from Dundas Castle and 5 minutes from Edinburgh Airport. Surrounded by 55 acres of wooded parkland, Norton House is lovely country house with spacious, individually decorated bedrooms with a host of modern touches and thoughtful extras. All bedrooms are en-suite with 2 having disabled access.</p>
                  </div>
                }
                address={
                  <div>
                    <p>Ingliston</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 333 1275</p>
                  </div>
                }
                url="http://www.handpickedhotels.co.uk/hotels/norton-house"
              />
            </GridCell>
          </GridWrap>
        </Section>
        <Section>
          <SubTitle>5* HOTELS</SubTitle>
          <GridWrap>
            <GridCell>
              <Bed
                title="Sheraton Grand"
                description={
                  <div>
                    <p>One of Scotland’s leading international deluxe hotels, The Sheraton is located in the heart of Edinburgh and is only a 25 minute journey to Dundas Castle. The Sheraton has 260 bedrooms including suites, executive and presidential. Each bedroom has a television, telephone, mini bar, air-conditioning and en-suite facilities. You can enjoy the leisure facilities in their luxurious Spa where a range of extensive treatments are available. Alternatively you can enjoy the fine dining “Grill Room” or relaxed brasserie style “The Terrace” or even the Italian restaurant “Santini”. Car parking is available.</p>
                  </div>
                }
                address={
                  <div>
                    <p>1 Festival Square</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 229 9131</p>
                  </div>
                }
                url="http://www.sheraton.com/grandedinburgh"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="The Balmoral"
                description={
                  <div>
                    <p>The Balmoral Hotel is conveniently located next to the railway station and is only a 30 minute drive from Edinburgh Airport and Dundas Castle. There are 188 bedrooms including 20 suites. Each bedroom contains a telephone, television with satellite, mini bar, safety deposit box, tea & coffee making facilities available on request and a free guest laundry service. You can enjoy the comfort of the hotel lounge, bar area, the brasserie or the fine dining restaurant, Number One. Leisure facilities and valet parking are also available.</p>
                  </div>
                }
                address={
                  <div>
                    <p>1 Princes Street</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 556 1111</p>
                  </div>
                }
                url="http://www.rfhotels.com"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="The Chester Residence"
                description={
                  <div>
                    <p>The Chester Residence is an elegant townhouse situated in Edinburgh’s West End and is a 25 minute journey to Dundas Castle. The Residence provides 5 luxurious furnished apartments with each providing internet connection, direct line telephone, wide screen TV with DVD and CD players, daily maid service, fully fitted kitchens and breakfast.</p>
                  </div>
                }
                address={
                  <div>
                    <p>9 Chester Street</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 226 2075</p>
                  </div>
                }
                url="http://www.chester-residence.com"
              />
            </GridCell>
            <GridCell>
              <Bed
                title="G&V Royal Mile Hotel Edinburgh"
                description={
                  <div>
                    <p>G&V Royal Mile Hotel in Edinburgh is a stunning, contemporary landmark, and the only 5-star hotel on the historic Royal Mile. G&V has 136 rooms and suits each with special stand out touches: deeply covetable G&V sheets, bathrobes and designer products including Nespresso machines, I-pod docks, LCD TV’s, free high speed Internet and many other truly desirable, modern indulgences.</p>
                  </div>
                }
                address={
                  <div>
                    <p>1 George IV Bridge</p>
                    <p>Edinburgh</p>
                    <p>Tel: 0131 2206666</p>
                  </div>
                }
                url="http://www.gandvhotel.com"
              />
            </GridCell>
          </GridWrap>
        </Section>



        <Border.Line />
        <Layouts.ContentWidthWrapper>
          <Section>
          <SubTitle>
            Edinburgh
          </SubTitle>
            <div style={{"text-align": "left"}}>
              <p>The Edinburgh Fringe Festival takes place throughout August, finishing a few days before the wedding however you could have an extended stay North and enjoy the festival beforehand!</p>
            </div>
          </Section>
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default Accommodation;
