import React, { Component } from 'react';
import Page from '../Components/Page.jsx';
import styled from 'styled-components';

class Gifts extends Component {
  render() {
    const Poem = styled.div`
      text-align: center;
      margin: 20px auto;
    `;
    return (
      <Page title="Gifts" heroPic="piggies.jpg">
        <Poem>
          We’ll be husband and wife for the rest of our life,<br />
          In our little home made for two.<br />
          But instead of a vase or a new kitchen knife,<br />
          We’d love to fly off to somewhere new.<br />
          A week on a beach would suffice and be ideal,<br />
          Instead of a knife, fork and spoon why not contribute to our honeymoon!<br />
        </Poem>
      </Page>
    );
  }
}

export default Gifts;
