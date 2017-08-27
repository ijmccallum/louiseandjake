import React, { Component } from 'react';
import Layouts from '../Components/Layouts';
import HeroPic from '../Components/HeroPic.jsx';
import Image from '../Components/Image.jsx';
import PageTitle from '../Components/PageTitle.jsx';
import SubTitle from '../Components/SubTitle.jsx';
import Section from '../Components/Section.jsx';
import styled from 'styled-components';
import Person from '../Components/Person.jsx';
const Party = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


class WeddingParty extends Component {
  render() {
    return (
      <div>
        {/* <PageTitle>Wedding Party</PageTitle> */}

        <Image fileName={"wedding-party.jpg"}/>

        <Section>
          <Party>
            <Person name="Peter" role="Father of the Bride" fileName="sun.jpg">
              Left
            </Person>
            <Person name="Kate & Iain" role="Mother & Father of the groom" fileName="jlki.jpg">
              Right
            </Person>
            <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="us.jpg">
              also in the party!
            </Person>
            <Person name="Hannah & Andy" role="Maid of Honor" fileName="hannah.jpg">
              stuff
            </Person>
            <Person name="Pamela" role="Pamela" fileName="pamela.jpg">
              Pamela
            </Person>
            <Person name="Lloyd" role="Groomsman" fileName="lloyd.jpg">
              Best man
            </Person>
            <Person name="Ell" role="Groomsman" fileName="ell.jpg">
              Best man
            </Person>

            <Person name="Hayle" role="Hayle" placeholder="http://morganfillman.space/540">
            Hayle
            </Person>
            <Person name="Amelia" role="Amelia" placeholder="http://morganfillman.space/542">
            Amelia
            </Person>
            <Person name="Will" role="Will" placeholder="http://morganfillman.space/544">
            Will
            </Person>
            <Person name="Graham" role="Graham" placeholder="http://morganfillman.space/546">
            Graham
            </Person>

          </Party>
        </Section>
        <Section>
          <Party>
            
          </Party>
        </Section>


      </div>
    );
  }
}

export default WeddingParty;

