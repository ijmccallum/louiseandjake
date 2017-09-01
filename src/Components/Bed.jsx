import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';

const Room = styled.div`
  word-break: break-word;
  font-size: 18px;
`;
const Title = styled.div`
  color: ${Colors.subTitle};
  text-transform: uppercase;
  font-family: ${Fonts.serif};
  font-size: 20px;
  margin: 0 0 10px;
`;
const Description = styled.div`
  p {
    margin-bottom: 10px !important;
  }
`;
const Price = styled.div``;
const Distance = styled.div``;
const Address = styled.div``;
const Url = styled.a`
  display: block;
  color: ${Colors.subTitle};
  margin-bottom: 20px;
`;

function Bed(props){
  return (
    <Room>
      <Title>{props.title}</Title>
      <Address>{props.address}</Address>
      <Url href={`${props.url}`} target="_blank">{props.url}</Url>
      <Description>{props.description}</Description>
    </Room>
  );
}

export default Bed;