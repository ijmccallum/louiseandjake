import React, { Component } from 'react';
import styled from 'styled-components';


export default function HeroPic(props){

  const Container = styled.div`
    position: relative;
    z-index: 1;
    img {
      display: block;
      margin: 0 auto; 
      max-height: 700px;
      border: 8px solid rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
    }
  `;
  const Blur = styled.div`
    position: absolute;
    z-index: -1;
    top: -20px; bottom: -20px;
    left: -20px; right: -20px;
    background-image: url('${window.imgRoot}/${props.fileName}');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    filter: blur(20px);
  `;
  
  return (
    <Container>
      <img src={`${window.imgRoot}/${props.fileName}`} alt=""/>
      {/* <Blur /> */}
    </Container>
  );
}