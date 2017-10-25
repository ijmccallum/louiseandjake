import React from 'react';
import styled from 'styled-components';
//import CountdownMonth from './CountdownMonth.jsx';
import Month from './Month.jsx';
import moment from 'moment';


export default function Countdown(props){

  //months are 0 based
  const startDay = 11;
  const startMonth = 6;
  const startYear = 2017;
  const endDay = 1;
  const endMonth = 8;
  const endYear = 2018;

  var startDate = moment([startYear, startMonth, startDay]);
  var endDate = moment([endYear, endMonth, endDay]);
  var noMonthsToRender = (endDate.diff(startDate, 'months')) + 1; // +1 to include the final month

  let calMarkup = [];
  
  for (var m = 0; m <= noMonthsToRender; m++){
    //get the month to render
    const thisMonth = moment([startYear, startMonth, 1]).add(m, 'months');
    
    calMarkup.push(
      <Month key={m} month={thisMonth} startDate={startDate} endDate={endDate}/>
    );
  }

  const CountdownBlock = styled.div`
    line-height: 0;
    font-size: 0;
    text-align: center;
    padding: 40px 10px;
  `;

  return (
    <CountdownBlock>
      {calMarkup}
    </CountdownBlock>
  );
}
