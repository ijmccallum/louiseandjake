import React, { Component } from 'react';
import Page from '../Components/Page.jsx';
import styled from 'styled-components';

class Gifts extends Component {
  render() {
    const Poem = styled.div`
    
    `;
    return (
      <Page 
        title="Gifts" 
        heroPic="piggies.jpg" 
        backgroundSize="contain"
        isLive={this.props.isLive}
      >
        <Poem>
          We tried to make a wedding list<br />
          of presents you might buy,<br />
          But couldn't think of what we'd like<br />
          and here's the reason why.<br />
          We have all of our bedding,<br />
          a microwave and pots.<br />
          The toaster's working perfectly,<br />
          the kettle still gets hot.<br />
          But here's some things we'd love to have,<br />
          The list is only three,<br />
          The first is sand, the next is sun,<br />
          and thirdly there's the sea.<br />
          <br />
          Now please don't think us cheeky,<br />
          We're trying to do this with tact,<br />
          But we've been living together a while now,<br />
          So there isn't much we lack.<br />
          <br />
          Even though it's not traditional,<br />
          and not the way it's done..<br />
          We'd appreciate a little help<br />
          To spend time in Mauritius sun.<br />
          <br />
          So if you would like to give a gift<br />
          And send us on our way;<br />
          a contribution to our honeymoon,<br />
          Would really make our day!<br />
        </Poem>
      </Page>
    );
  }
}

export default Gifts;
