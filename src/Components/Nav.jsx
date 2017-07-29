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

const StyledActiveLink = styled(Link)`
  padding: 10px;
  font-style: italic;
  color: white;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
`;

function NavLink(props){
  console.log("this.props'", props);
  if (props.routeProps.location.pathname === props.url) {
    return (
      <StyledActiveLink to={props.url}>
        {props.text}
      </StyledActiveLink>
    );
  } else {
    return (
      <StyledLink to={props.url}>
        {props.text}
      </StyledLink>
    );
  }
}

function Nav(props){
  return (
    <nav className="nav">
      <NavLink url="/" text="Dundas Castle" routeProps={props} />
      <NavLink url="/accommodation" text="Accomodation" routeProps={props} />
      <NavLink url="/edinburgh" text="Edinburgh" routeProps={props} />
      <NavLink url="/gifts" text="Gifts" routeProps={props} />
      <NavLink url="/music" text="Music" routeProps={props} />
      <NavLink url="/rsvp" text="RSVP" routeProps={props} />
      <NavLink url="/transport" text="Transport" routeProps={props} />
      <NavLink url="/wedding-party" text="Wedding Party" routeProps={props} />
    </nav>
  );
}

export default Nav;