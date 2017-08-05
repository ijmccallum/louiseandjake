import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors.js'


export default function MusicPlayer(props){
  
  const BackgroundMusic = styled.div`
    position: absolute;
    z-index: -2;
  `;

  return (
    <BackgroundMusic>
      <iframe width="100" height="10" src="https://www.youtube.com/embed/p3bKWNWFNZQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
    </BackgroundMusic>
  );
}
