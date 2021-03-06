import React from 'react';
import styled from 'styled-components';
import settings from '../Services/layoutSettings';

function X(props){
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334">
      <path d={`M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
        c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
        c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
        l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
        L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z`}/>
    </svg>
  );
}

function Ham(props){
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124">
      <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
      <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
      <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
    </svg>
  );
}

function Phone(props){
  const PhoneIcon = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 46px;
    height: 46px;
    background-image: url(${window.imgRoot}/icons.jpg);
    background-position: center right;
  `;

  return (
    <PhoneIcon />
  )
}

function Email(props){
  const EmailIcon = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 46px;
    height: 46px;
    background-image: url(${window.imgRoot}/icons.jpg);
    background-position: center left;
  `;

  return (
    <EmailIcon />
  )
}

export default {
  X, Ham, Phone, Email
};