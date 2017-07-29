import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';

const PageHeader = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const PageHero = styled.div`
  height: 480px;
  background-color: gold;
  background-image: url('http://dundascastle.co.uk/wp-content/uploads/2014/08/postcard1_castle_with_bridges-1024x704.jpg');
  background-size: cover;
  background-position: center 33%;
  -webkit-box-shadow: inset 0px 91px 19px -87px rgba(97,130,153,0.54);
  -moz-box-shadow: inset 0px 91px 19px -87px rgba(97,130,153,0.54);
  box-shadow: inset 0px 91px 19px -87px rgba(97,130,153,0.54);
  border-top: 1px solid #98acb9;
`;

function Page(props){
  return (
    <div>
      <Layouts.ContentWidthWrapper>
        <PageHeader>
            <h2>{props.title}</h2>
        </PageHeader>
      </Layouts.ContentWidthWrapper>
      <PageHero>
        hero!
      </PageHero>
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