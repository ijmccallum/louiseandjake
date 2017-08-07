import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors';

const NavWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  color: white;
  display: inline-block;
  text-decoration: none;
  text-shadow: -1px 1px 2px rgba(0,0,0,0.2);
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
`;

const StyledActiveLink = StyledLink.extend`
  font-weight: bold;
  border-color: ${Colors.white};
`;

function NavLink(props){
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
    <Layouts.ContentWidthWrapper>
      <NavWrap>
        <NavLink url="/" text="Louise & Jake" routeProps={props} />
        <NavLink url="/dundas-castle" text="Dundas Castle" routeProps={props} />
        <NavLink url="/accommodation" text="Accomodation" routeProps={props} />
        <NavLink url="/edinburgh" text="Edinburgh" routeProps={props} />
        <NavLink url="/gifts" text="Gifts" routeProps={props} />
        <NavLink url="/music" text="Music" routeProps={props} />
        <NavLink url="/rsvp" text="RSVP" routeProps={props} />
        <NavLink url="/transport" text="Transport" routeProps={props} />
        <NavLink url="/wedding-party" text="Wedding Party" routeProps={props} />
      </NavWrap>
    </Layouts.ContentWidthWrapper>
  );
}

export default Nav;