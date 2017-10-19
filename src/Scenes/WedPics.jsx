
import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';
import Icons from '../Components/Icons';

const CutOff = styled.div`
  height: calc(100vh - 110px);
  overflow-Y: hidden;
`;

class WedPics extends Component {
  
  render() {

    return (
      <div>
        {/* <PageTitle>RSVP</PageTitle> */}

        <Image fileName={"wedpics.png"}/>
        <Layouts.ContentWidthWrapper>
        <p>Please download the <a href="https://gm2dkmryha2q.wedpics.com/album" style={{display: 'inline'}}>wedpics app</a> so you can upload and see all the pics from our day!</p>
        </Layouts.ContentWidthWrapper>
        <CutOff>
        <iframe src="https://gm2dkmryha2q.wedpics.com/album" frameborder="0" style={{width:'100%',border:'none', height:'100vh', display: 'block'}}></iframe>
        </CutOff>
      </div>
    );
  }
}

export default WedPics;
