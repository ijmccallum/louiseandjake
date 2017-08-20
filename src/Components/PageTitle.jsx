import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../Services/colors.js';
import Fonts from '../Services/fonts';

export default function PageTitle(props){
  const Title = styled.h1`
    font-family: ${Fonts.cursive};
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    position: relative;
    color: ${Colors.hero.text};
    text-shadow: -2px 1px 0 ${Colors.hero.textshadow};
    margin: 20px 10px;
  `;

  return (
    <Title>
      {props.children}
    </Title>
  );
}