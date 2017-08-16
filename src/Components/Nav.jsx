import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Icons from './Icons';
import Colors from '../Services/colors';

const NavWrap = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 70px 0;
  text-align: center;
  background-color: ${Colors.white};
  opacity: 0.95;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  color: ${Colors.gold1};
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

const Close = styled.button`
  padding: 0; border: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  svg {
    width: 10px; height; 10px;
    fill: ${Colors.gold1};
  }
`;

function Nav(props){
  return (
    <NavWrap>
      <div>
        <Close>
          <Icons.X />
        </Close>
      </div>
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
  );
}

export default Nav;