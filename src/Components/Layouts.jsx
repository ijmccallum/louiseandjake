import React from 'react';
import styled from 'styled-components';
import settings from '../Services/layoutSettings';

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

export default {
  ContentWidthWrapper
};