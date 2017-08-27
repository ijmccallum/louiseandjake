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
`;

const Pic = styled.img`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  max-width: 100%;
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
      <Name>
        {props.name},
      </Name>
      <Role>
        {props.role}
      </Role>
      <Description>
        {props.children}
      </Description>
    </Wrap>
  );
}