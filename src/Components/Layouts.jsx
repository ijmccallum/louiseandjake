import React from 'react';
import styled from 'styled-components';
import settings from '../Services/layoutSettings';

const BigStyledWidthWrapper = styled.div`
  max-width: ${settings.bigContentWidth};
  margin: 0 auto;
  width: 100%;
`;
function BigContentWidthWrapper(props){
  return (
    <BigStyledWidthWrapper>
      {props.children}
    </BigStyledWidthWrapper>
  );
}

const StyledWidthWrapper = styled.div`
  max-width: ${settings.contentWidth};
  margin: 0 auto;
  width: 100%;
`;

function ContentWidthWrapper(props){
  return (
    <StyledWidthWrapper>
      {props.children}
    </StyledWidthWrapper>
  );
}

const StyledContentPadder = styled.div`
  padding: 10px;
`;

function ContentPadder(props){
  return (
    <StyledContentPadder>
      {props.children}
    </StyledContentPadder>
  )
}

export default {
  ContentWidthWrapper,
  ContentPadder,
  BigContentWidthWrapper
};