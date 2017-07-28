import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Components/Nav.jsx';

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  background-color: #323232;
  padding; 4px;
  color: white;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          <Nav />
        </StyledHeader>

        <div className="app__body">
          {this.props.children}
        </div>

        <StyledFooter>
          footer
        </StyledFooter>
      </StyledContainer>
    );
  }
}

export default App;
