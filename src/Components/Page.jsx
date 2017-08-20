import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors.js'

function Page(props){

  let picUrl = '';
  if (window.isLive) {
    picUrl += '/public/images/';
  } else {
    picUrl += '/images/';
  }
  picUrl += props.heroPic;

  const PageHeader = styled.div`
    text-align: center;
    position: relative;
    h2 {
      color: ${Colors.hero.text};
      text-shadow: -2px 1px 0 ${Colors.hero.textshadow};
      margin: 20px 10px;
    }
  `;
  
  const HeroPic = styled.div`
    width: 100%;
    height: 300px;
    img {
      max-width: 100%;
      max-height: 300px;
    }
  `;

  const PageContent = styled.div`
    text-align: center;
    padding: 30px;
    color: ${Colors.body.text};
    background: ${Colors.body.background};
  `;

  return (
    <div>
      <PageHeader>
        <h2>{props.title}</h2>
        <HeroPic>
          <img src={picUrl} />
        </ HeroPic>
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