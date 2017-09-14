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
  transform:translateY(0);
  transition: transform 0.2s ease;
  position: relative;
  &:after {
    display: block;
    content: " ";
    height: 1px;
    width: 10%;
    background-color: ${Colors.nav.text};
    position: absolute;
    bottom: 10px;
    left: 45%;
    transform: scaleX(0.5) translateY(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  &:hover {
    transform:translateY(-3px);
    &:after {
      opacity: 0.8;
      transform: scaleX(3) translateY(8px);
    }
  }
`;

const StyledActiveLink = StyledLink.extend`
  font-weight: bold;
  transform:translateY(-3px);
  color: ${Colors.nav.activeText};
  &:after {
    background-color: ${Colors.nav.activeText};
    opacity: 0.8;
    transform: scaleX(3) translateY(8px);
  }
  `;
  // &:hover {
  //   transform:translateY(0px);
  //   &:after {
  //     opacity: 0;
  //     transform: scaleX(0) translateY(0);
  //   }
  // }

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