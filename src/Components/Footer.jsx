import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';
import Layouts from './Layouts';
import Countdown from './Countdown';
import Border from './Border';

const FooterWrap = styled.footer`
  background-color: ${Colors.footer.background};
`;

const Credit = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1;
  padding: 5px 10px 10px;
  font-family: ${Fonts.serif};
  color: ${Colors.footer.text};
`;

function Footer(props){
  return (
    <FooterWrap>
      <Border.Foil />
      <Countdown />
      <Credit>
        Site by Iain & Christina McCallum
      </Credit>
    </FooterWrap>
  );
}

export default Footer;