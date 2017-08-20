import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../Services/colors.js';

export default function Section(props){
  const ContentBlock = styled.div`
    text-align: center;
    position: relative;
    color: ${Colors.body.text};
    margin: 40px 10px;
  `;

  return (
    <ContentBlock>
      {props.children}
    </ContentBlock>
  );
}