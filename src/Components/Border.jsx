import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Countdown from './Countdown';

function Foil(props){
  
  const BR = styled.div`
    background-image: url('${window.imgRoot}/border.jpg');
    background-repeat: repeat-x;
    width: 100%;
    height: 5px;
  `;

  return (
    <BR />
  );
}

function Line(props){
  const BR = styled.div`
    width: 100%;
    height: 1px;
    background-image: url('${window.imgRoot}/border.jpg');
    background-repeat: repeat-x;
  `;

  return (
    <BR />
  )
}


export default {
  Foil,
  Line
}