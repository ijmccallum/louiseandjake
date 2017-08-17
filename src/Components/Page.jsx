import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors.js'

function Page(props){

  const PageHeader = styled.div`
    padding: 120px 0 100px;
    text-align: center;
    color: ${Colors.white};
    position: relative;
    text-shadow: -2px 1px 0 rgba(0,0,0,0.2);
  `;
  
  let picUrl = '';
  if (props.isLive) {
    picUrl += '/public/images/';
  } else {
    picUrl += '/images/';
  }
  picUrl += props.heroPic;
  
  const PageHero = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('${picUrl}');
    background-color: ${Colors.gold3};
    background-blend-mode: soft-light;
    background-size: ${props.backgroundSize};
    background-repeat: no-repeat;
    background-position: center 33%;
  `;

  const PageContent = styled.div`
    text-align: center;
    padding: 30px;
  `;

  return (
    <div>
      <PageHeader>
          <h2>{props.title}</h2>
        <PageHero />
      </PageHeader>
      <Layouts.ContentWidthWrapper>
        <PageContent>
          {props.children}
        </PageContent>
      </Layouts.ContentWidthWrapper>
    </div>
  );
}

const StyledPage = styled(Page)`
  padding: 10px;
  color: white;
`;

export default Page;