import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Colors from '../Services/colors';

export default function Day(props){
  //console.log('props!', props);
  const Day = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${Colors.white};
    display: inline-block;
    margin: 1px;
    overflow: hidden;
  `;
  
  if (props.isBlank) {
    const BlankDay = Day.extend`
      background-color: transparent;
    `;
    return (<BlankDay />);
  }
  
  //check for enguagement day
  if (props.date.isSame(props.startDate)) {
    const EngagementDay = Day.extend`
      background-color: transparent;
      fill: #fff;
    `;
    //return (<EngagementDay />);
    return(
      <EngagementDay>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 299.493 299.492">
          <path d="M173.545,77.224l36.516-50.049L188.189,0h-36.454h-3.977h-36.454L89.432,27.175l36.519,50.049    c-50.595,10.955-88.631,56.015-88.631,109.841c0,61.987,50.438,112.428,112.428,112.428c61.992,0,112.427-50.44,112.427-112.428    C262.173,133.238,224.135,88.178,173.545,77.224z M149.747,262.375c-41.529,0-75.311-33.781-75.311-75.311    c0-41.531,33.782-75.313,75.311-75.313c41.528,0,75.311,33.782,75.311,75.313C225.057,228.594,191.275,262.375,149.747,262.375z"/>
        </svg>
      </EngagementDay>
    )
  }
  
  //check for wedding day
  if (props.date.isSame(props.endDate)) {
    const WeddingDay = Day.extend`
      background-color: transparent;
      fill: #fff;
    `;
    //return (<WeddingDay />);
    return (
      <WeddingDay>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 50 556.213 556.213">
          <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z     M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z     M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861    C47.812,250.796,104.279,194.33,173.684,194.33z"></path>
        </svg>
      </WeddingDay>
    )
  }

  let opacity = 1;
  //if the day has passed, or is beyond the wedding day
  if (props.date.diff(moment()) < 0 || props.date.diff(props.endDate) > 0) {
    const OutDay = Day.extend`
      background-color: ${Colors.gold3};
      opacity: 0.3;
    `;
    return (<OutDay />);
  }
  
  var day = props.date.day();
  var isWeekend = (day == 6) || (day == 0);
  if (isWeekend) {
    const WeekendDay = Day.extend`
      background-color: ${Colors.white};
    `;
    return (<WeekendDay />);
  }

  const WeekDay = Day.extend`
    opacity: 0.5;
  `;
  // just a boring old normal day
  return (<WeekDay />);
}
