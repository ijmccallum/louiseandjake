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
const Title = styled.p`
  color: ${Colors.subTitle};
  text-transform: uppercase;
  font-family: ${Fonts.serif};
  font-size: 20px;
  margin: 0 0 10px;
`;
const Description = styled.div``;
const Price = styled.div``;
const Distance = styled.div``;
const Address = styled.a``;
const Url = styled.a`
  display: block;
  color: ${Colors.subTitle};
`;

function Bed(props){
  return (
    <Room>
      <Title>{props.details.title}</Title>
      <Description>{props.details.description}</Description>
      <Price>{props.details.price}</Price>
      <Distance>{props.details.distance}</Distance>
      <Address>{props.details.address}</Address>
      <Url href={`${props.details.url}`}>{props.details.url}</Url>
    </Room>
  );
}

export default Bed;