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
            <Person name="" role="" fileName="Jake-lou-on-vacay.jpg" />
            <Person name="" role="" fileName="Lou-Jake-in-south-africa.jpg" />
            <Person name="" role="" fileName="Jake-Lou.jpg" />
          </Party>
          <Party>

            <Person name="Jake-Pete-london" role="Jake-Pete-london" fileName="Jake-Pete-london.jpg" />
            <Person name="Peter" role="Father of the Bride" fileName="sun.jpg">Left</Person>
            <Person name="Kate & Iain" role="Mother & Father of the groom" fileName="jlki.jpg">Right</Person>
            
            <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="beach.jpg">also in the party!</Person>
            <Person name="Hannah & Andy" role="Maid of Honor" fileName="hannah.jpg">stuff</Person>
          </Party>
          <Party>
            {/* <Person name="us-manayunk" role="us-manayunk" fileName="us-manayunk.jpg" /> */}
            <Person name="Pamela" role="Pamela" fileName="pamela.jpg">Pamela</Person>
            <Person name="Lloyd" role="Groomsman" fileName="lloyd.jpg">Best man</Person>
            <Person name="Ell" role="Groomsman" fileName="ell.jpg">Best man</Person>
            <Person name="Lloyd-Jake-Georgia-Louise" role="Lloyd-Jake-Georgia-Louise" fileName="Lloyd-Jake-Georgia-Louise.jpg" />
          </Party>
          <Party>
            <Person name="Jake-and-pals-3" role="Jake-and-pals-3" fileName="Jake-and-pals-3.jpg" />
            <Person name="jake-and-pals-2" role="jake-and-pals-2" fileName="jake-and-pals-2.jpg" />
            <Person name="Jake-and-pals" role="Jake-and-pals" fileName="Jake-and-pals.jpg" />

          </Party>
          <Party>

            <Person name="Hayley-Amelia-Louise" role="Hayley-Amelia-Louise" fileName="Hayley-Amelia-Louise.jpg" />
            <Person name="Louise-Hayley-Amelia" role="Louise-Hayley-Amelia" fileName="Louise-Hayley-Amelia.jpg" />
            <Person name="Lou-Jake-Georgia-Lloyd" role="Lou-Jake-Georgia-Lloyd" fileName="Lou-Jake-Georgia-Lloyd.jpg" />

          </Party>
          <Party>

            <Person name="Hayle" role="Hayle" placeholder="http://morganfillman.space/540">Hayle</Person>
            <Person name="Amelia" role="Amelia" placeholder="http://morganfillman.space/542">Amelia</Person>
            <Person name="Will" role="Will" placeholder="http://morganfillman.space/544">Will</Person>
            <Person name="Graham" role="Graham" placeholder="http://morganfillman.space/546">Graham</Person>

          </Party>
            {/* <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="us.jpg">
              also in the party!
            </Person>
            <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="az.jpg">
              also in the party!
            </Person> */}
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

