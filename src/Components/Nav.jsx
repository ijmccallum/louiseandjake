import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  padding: 10px;
  color: white;
`;

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <StyledLink to="/" className="nav__link">Dundas Castle</StyledLink>
        <StyledLink to="/accommodation" className="nav__link">Accomodation</StyledLink>
        <StyledLink to="/edinburgh" className="nav__link">Edinburgh</StyledLink>
        <StyledLink to="/gifts" className="nav__link">Gifts</StyledLink>
        <StyledLink to="/music" className="nav__link">Music</StyledLink>
        <StyledLink to="/rsvp" className="nav__link">RSVP</StyledLink>
        <StyledLink to="/transport" className="nav__link">Transport</StyledLink>
        <StyledLink to="/wedding-party" className="nav__link">WeddingParty</StyledLink>
      </nav>
    );
  }
}



export default Nav;
