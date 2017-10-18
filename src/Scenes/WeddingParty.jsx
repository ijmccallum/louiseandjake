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
        <Layouts.BigContentWidthWrapper>
          <Section>
            <Party>
              <Person fileName="plj.jpg">
                Father of the Bride: <br />
                Peter McCallum
              </Person>
              <Person fileName="mum.jpg">
                Late Mother of the Bride:<br />
                Alexandra McCallum who we will miss forever but we have many happy memories of her to cherish.
              </Person>
              <Person fileName="jlki.jpg">
                Mother of the Groom: <br />
                Kate Shackleford, <br />
                Father of the Groom: <br />
                Ian Shackleford
              </Person>
              <Person fileName="beach.jpg">
                Louise’s brother: <br />
                Iain McCallum <br />
                (Groomsman) <br />
                Louise’s sister-in-law: <br />
                Christina McCallum <br />
                (Bridesmaid)
              </Person>
              {/* <Person fileName="ha.jpg">
                Jake’s sister: <br />
                Hannah Shackleford <br />
                (Maid of Honour), <br />
                Hannah’s boyfriend: <br />
                Andy Foulkes
              </Person> */}
              <Person fileName="hannah.jpg">
                Jake’s sister: <br />
                Hannah Shackleford <br />
                (Maid of Honour)
              </Person>

              <Person fileName="ell.jpg">
                Ell Heward <br />
                (Best man)
              </Person>
              <Person fileName="bb.jpg">
                Lloyd Stephenson <br />
                (Best man)
              </Person>
              <Person fileName="Jake-and-pals-3.jpg">
                Graham Kimber <br />
                (Groomsman), <br />
                Ell Heward <br />
                (Best man), <br />
                and Will Lloyd <br />
                (Groomsman)
              </Person>
              <Person fileName="Louise-Hayley-Amelia.jpg">
                Hayley Martin, <br />
                Amelia Mackin<br />
                (Bridesmaids) 
              </Person>
              <Person fileName="p.jpg">
                Louise’s cousin: <br />
                Pamela McCallum <br />
                (Bridesmaid)
              </Person>
            </Party>
          </Section>
        </Layouts.BigContentWidthWrapper>


            {/* <Person name="" role="Louise’s brother: Iain McCallum (Groomsman) Louise’s sister-in-law: Christina McCallum (Bridesmaid)" fileName="wk.jpg" /> */}
            {/* <Person name="" role="Louise’s God-mum: Margaret McCallum" fileName="m.jpg" /> */}
            {/* <Person name="Hayley-Amelia-Louise" role="Hayley-Amelia-Louise" fileName="Hayley-Amelia-Louise.jpg" />
            <Person name="" role="" fileName="Jake-lou-on-vacay.jpg" />
            <Person name="" role="" fileName="Lou-Jake-in-south-africa.jpg" />
            <Person name="" role="" fileName="Jake-Lou.jpg" />
             <Person name="Jake-Pete-london" role="Jake-Pete-london" fileName="Jake-Pete-london.jpg" />
            <Person name="Peter" role="Father of the Bride" fileName="sun.jpg">Left</Person> 
             <Person name="Hannah & Andy" role="Maid of Honor" fileName="hannah.jpg">stuff</Person> 
             <Person name="us-manayunk" role="us-manayunk" fileName="us-manayunk.jpg" /> 
             <Person name="Pamela" role="Pamela" fileName="pamela.jpg">Pamela</Person> 
             <Person name="Lloyd" role="Groomsman" fileName="lloyd.jpg">Best man</Person>
            <Person name="Ell" role="Groomsman" fileName="ell.jpg">Best man</Person> 
             <Person name="Lloyd-Jake-Georgia-Louise" role="Lloyd-Jake-Georgia-Louise" fileName="Lloyd-Jake-Georgia-Louise.jpg" /> 
             <Person name="jake-and-pals-2" role="jake-and-pals-2" fileName="jake-and-pals-2.jpg" /> 
             <Person name="Jake-and-pals" role="Jake-and-pals" fileName="Jake-and-pals.jpg" /> 
             <Person name="Lou-Jake-Georgia-Lloyds" role="Lou-Jake-Georgia-Lloyd" fileName="Lou-Jake-Georgia-Lloyd.jpg" /> 
             <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="us.jpg">
              also in the party!
            </Person>
            <Person name="Christina & Iain" role="Brother & sister-in-law of the bride" fileName="az.jpg">
              also in the party!
            </Person>  */}


      </div>
    );
  }
}

export default WeddingParty;

