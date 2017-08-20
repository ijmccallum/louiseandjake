import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../Services/colors.js';
import Fonts from '../Services/fonts';

export default function SubTitle(props){
  const Sub = styled.h4`
    text-align: center;
    font-family: ${Fonts.serif};
    position: relative;
    color: ${Colors.subTitle};
    margin: 20px 10px;
    font-size: 40px;
  `;

  return (
    <Sub>
      {props.children}
    </Sub>
  );
}