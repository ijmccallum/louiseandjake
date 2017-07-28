import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 10px;
  font-style: italic;
  color: white;
  display: inline-block;
  text-decoration: none;
`;

//note the activeClassName needs this component to rerender when routes change - currently I don't believe it is

function Nav(props){
  console.log('props!', props);
  return (
    <nav className="nav">
      <StyledLink to="/" className="nav__link" activeClassName="nav__link--active">Dundas Castle</StyledLink>
      <StyledLink to="/accommodation" className="nav__link" activeClassName="nav__link--active">Accomodation</StyledLink>
      <StyledLink to="/edinburgh" className="nav__link" activeClassName="nav__link--active">Edinburgh</StyledLink>
      <StyledLink to="/gifts" className="nav__link" activeClassName="nav__link--active">Gifts</StyledLink>
      <StyledLink to="/music" className="nav__link" activeClassName="nav__link--active">Music</StyledLink>
      <StyledLink to="/rsvp" className="nav__link" activeClassName="nav__link--active">RSVP</StyledLink>
      <StyledLink to="/transport" className="nav__link" activeClassName="nav__link--active">Transport</StyledLink>
      <StyledLink to="/wedding-party" className="nav__link" activeClassName="nav__link--active">WeddingParty</StyledLink>
    </nav>
  );
}

export default Nav;