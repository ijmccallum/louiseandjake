import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors.js'

function Page(props){

  const PageHeader = styled.div`
    padding: 100px 0 100px;
    text-align: center;
    color: ${Colors.white};
    position: relative;
  `;
  
  const PageHero = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: -1;
    background-color: ${Colors.gold1};
    background-image: url('/images/${props.heroPic}');
    background-size: cover;
    background-position: center 33%;
  `;

  return (
    <div>
      <PageHeader>
          <h2>{props.title}</h2>
        <PageHero />
      </PageHeader>
      <Layouts.ContentWidthWrapper>
        {props.children}
      </Layouts.ContentWidthWrapper>
    </div>
  );
}

const StyledPage = styled(Page)`
  padding: 10px;
  color: white;
`;

export default Page;