import React, { Component } from 'react';
import styled from 'styled-components';

export default function Image(props){

  const Container = styled.div`
    position: relative;
    z-index: 1;
    margin: 60px 0;
    img {
      display: block;
      margin: 0 auto; 
      max-width: 100%;
    }
  `;
  
  return (
    <Container>
      <img src={`${window.imgRoot}/${props.fileName}`} alt=""/>
    </Container>
  );
}