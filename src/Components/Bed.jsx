import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors';


const Room = styled.div`
  border: 1px solid ${Colors.rule};
  border-radius: 5px;
  padding: 10px;
  word-break: break-word;
  font-size: 14px;
`;
const Title = styled.a``;
const Description = styled.div``;
const Price = styled.div``;
const Distance = styled.div``;
const Address = styled.a``;
const Url = styled.a``;

function Bed(props){
  return (
    <Room>
      <Title href={`${props.details.url}`}>{props.details.title}</Title>
      <Description>{props.details.description}</Description>
      <Price>{props.details.price}</Price>
      <Distance>{props.details.distance}</Distance>
      <Address>{props.details.address}</Address>
    </Room>
  );
}

export default Bed;