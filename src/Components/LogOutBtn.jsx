import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from './Icons.jsx';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';

const LogOutButton = styled.button`
  fill: black;
  font-family: ${Fonts.serif};
  font-size: 20px;
  color: ${Colors.nav.text};
  z-index: 10;
  background: transparent;
  text-transform: uppercase;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  svg {
    width: 10px; height: 10px;
  }
`;

export default function LogOutBtn(props) {
  if (window.isLive) {
    return null;
  } else {
    return (
      <LogOutButton onClick={props.handleLogout}>
        Log out
      </LogOutButton>
    );
  }
}