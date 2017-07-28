import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 20px 0;
`;

const StyledBody = styled.div`
  
`;

function Page(props){
  return (
    <div className="page">
      <StyledHeader>
        <div className="content-width-wrap">
          <h2>{props.title}</h2>
        </div>
      </StyledHeader>
      <div className="page__body">
        <div className="content-width-wrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

const StyledPage = styled(Page)`
  padding: 10px;
  color: white;
`;

export default Page;