import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layouts from './Layouts';
import Icons from './Icons';
import Colors from '../Services/colors';
import Fonts from '../Services/fonts';

const Wrap = styled.div`
  flex: 1;
  max-width: 260px;
  min-width: 230px;
  margin: 20px;
`;

const PicRatio = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 0 20px;
  border: 8px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  perspective: 1000px;
`;

const Pic = styled.img`
  position: absolute;
  top: 0; bottom: -8px;
  left: -4px; right: -4px;
  max-width: calc(100% + 16px);
`;

const Name = styled.div`
  margin: 0;
  text-align: center;
  line-height: 1.1;
  font-family: ${Fonts.serif};
  position: relative;
  color: ${Colors.subTitle};
  font-size: 35px;
`;

const Role = styled.div`
  margin: 0 0 20px;
  text-align: center;
  line-height: 1.1;
  font-family: ${Fonts.serif};
  position: relative;
  color: ${Colors.subTitle};
  font-size: 25px;
`;

const Description = styled.div`
`;

export default function Person(props){

  return (
    <Wrap>
      <PicRatio>
        {props.fileName && 
          <Pic src={`${window.imgRoot}/${props.fileName}`}/>
        }
        {props.placeholder && 
          <Pic src={`${props.placeholder}`}/>
        }
      </PicRatio>

      {props.name && <Name>{props.name},</Name>}
      
      {props.role && <Role>{props.role}</Role>}
      
      <Description>
        {props.children}
      </Description>
    </Wrap>
  );
}