import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';

//days as boxes counting down to the wedding!

const Day = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  display: inline-block;
  margin: 1px;
`;

const WeekendDay = Day.extend`
  background-color: white;
  line-height: 10px;
`;

function Week(props){
  return (
    <div>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <WeekendDay />
      <WeekendDay />
    </div>
  );
}

const CountDownCal = styled.div`
  line-height: 5px;
`;

function Footer(props){
  return (
    <Layouts.ContentWidthWrapper>
      <CountDownCal>
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </CountDownCal>
    </Layouts.ContentWidthWrapper>
  );
}

export default Footer;