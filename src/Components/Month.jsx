import React from 'react';
import styled from 'styled-components';
import Day from './Day.jsx';
import moment from 'moment';

export default function Month(props){

  //what day of the week does this month start on?
  //M(1) T(2) W(3) T(4) F(5) [ S(6) S(0) ]
  let firstDayOfThisMonth = props.month.day();
  if (firstDayOfThisMonth == 0) { firstDayOfThisMonth = 7; }
  firstDayOfThisMonth = firstDayOfThisMonth - 1;
  //M(0) T(1) W(2) T(3) F(4) [ S(5) S(6) ]
  
  //how many days in this month
  let lastDayOfMonth = moment(props.month).endOf('month');
  let daysInThisMonth = lastDayOfMonth.diff(props.month, 'days') + 1; // + 1 to include the last day... or it's just 0 based

  // build the month's array of days!
  
  // 1. build one big array with all the days of this month
  const Days = [];
  for (var d = -firstDayOfThisMonth, we = 0; d < daysInThisMonth; d++, we ++){
    if (d < 0) {
      Days.push(<Day key={d} isBlank={true}/>);  
    } else {
      let day = props.month.clone();
      Days.push(<Day key={d} date={day.add(d, 'days')} startDate={props.startDate} endDate={props.endDate}/>);  
    }
  }
  
  // 2. split the days array into weekly chunks
  const Weeks = []; 
  let keyId = 0;
  while (Days.length) {
    keyId ++;
    Weeks.push(<div key={keyId}>{Days.splice(0,7)}</div>)
  }
  
  const MonthBlock = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    text-align: left;
  `;

  const MonthName = styled.div`
    font-size: 12px;
    line-height: 1;
    margin-bottom: 5px;
    text-align: center;
  `;

  return (
    <MonthBlock>
      <MonthName>
        {props.month.format('MMM')}
      </MonthName> 
      {Weeks}
    </MonthBlock>
  )
}

