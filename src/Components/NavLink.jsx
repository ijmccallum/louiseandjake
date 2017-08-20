import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Icons from './Icons';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';

// text-shadow: -1px 1px 2px rgba(0,0,0,0.2);
const StyledLink = styled.button`
  padding: 10px;
  color: ${Colors.nav.text};
  display: inline-block;
  text-decoration: none;
  font-family: ${Fonts.serif};
  text-transform: uppercase;
  font-size: 20px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const StyledActiveLink = StyledLink.extend`
  font-weight: bold;
  border-bottom: 1px solid ${Colors.nav.text};
`;

export default function NavLink(props){
  if (props.routeProps.location.pathname === props.url) {
    return (
      <div>
        <StyledActiveLink onClick={() => { props.handleClick(props.url) }}>
          {props.text}
        </StyledActiveLink>
      </div>
    );
  } else {
    return (
      <div>
        <StyledLink onClick={() => { props.handleClick(props.url) }}>
          {props.text}
        </StyledLink>
      </div>
    );
  }
}