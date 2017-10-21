import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';
import Layouts from './Layouts';
import Countdown from './Countdown';
import Border from './Border';

const FooterWrap = styled.footer`
  background-color: ${Colors.footer.background};
`;

const LeftRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Credit = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1;
  padding: 5px 10px 10px;
  font-family: ${Fonts.serif};
  color: ${Colors.footer.text};
`;

const FooterUtilNav = styled.ul`
  display: table;
  padding: 0;

  li {
    display: table-cell;
    vertical-align: middle;

    a {
      text-align: center;
      font-size: 14px;
      line-height: 1;
      padding: 5px 10px 10px;
      font-family: ${Fonts.serif};
    }
  }
`;
const LogOutButton = styled.button`
  fill: ${Colors.footer.text};
  font-family: ${Fonts.serif};
  font-size: 14px;
  color: ${Colors.footer.text};
  z-index: 10;
  background: transparent;
  border: none;
  padding: 5px 10px 11px;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: underline;
  svg {
    width: 10px; height: 10px;
  }
`;

function Footer(props){
  return (
    <FooterWrap>
      <Border.Foil />
      <Countdown />
      <Border.Line />

      <LeftRight>
        <Credit>
          Site by Iain & Christina McCallum
        </Credit>

        <FooterUtilNav>
          {/* <li><Link to="/rsvp">RSVP</Link></li> */}
          <li><Link to="/travel">Travel</Link></li>
          <li>
            <LogOutButton handleLogout={props.handleLogout}>Logout</LogOutButton>
          </li>
        </FooterUtilNav>
      </LeftRight>

    </FooterWrap>
  );
}

export default Footer;