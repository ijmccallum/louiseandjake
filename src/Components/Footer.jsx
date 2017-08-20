import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../Services/colors';
import Layouts from './Layouts';
import Countdown from './Countdown';
import Border from './Border';

const FooterWrap = styled.footer`
  background-color: ${Colors.footer.background};
`;

function Footer(props){
  return (
    <FooterWrap>
      <Border.Foil />
      <Countdown />
    </FooterWrap>
  );
}

export default Footer;