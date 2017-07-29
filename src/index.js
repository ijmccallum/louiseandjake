import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';

//Scenes
import DundasCastle from './Scenes/DundasCastle.jsx';
import Accommodation from './Scenes/Accommodation.jsx';
import Edinburgh from './Scenes/Edinburgh.jsx';
import Gifts from './Scenes/Gifts.jsx';
import Music from './Scenes/Music.jsx';
import RSVP from './Scenes/RSVP.jsx';
import Transport from './Scenes/Transport.jsx';
import WeddingParty from './Scenes/WeddingParty.jsx';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppHeader = styled.header`
  background-color: #323232;
  padding: 4px;
  color: white;
`;

const AppFooter = styled.footer`
  margin-top: auto;
  background-color: #323232;
  padding: 4px;
  color: white;
`;

const history = createHashHistory();

ReactDOM.render((
  <Router history={history}>
    <AppContainer>
      <AppHeader>
        <Route path="/" component={Nav} />
      </AppHeader>

      <Route path="/" exact component={DundasCastle} />
      <Route path="/accommodation" exact component={Accommodation} />
      <Route path="/edinburgh" exact component={Edinburgh} />
      <Route path="/gifts" exact component={Gifts} />
      <Route path="/music" exact component={Music} />
      <Route path="/rsvp" exact component={RSVP} />
      <Route path="/transport" exact component={Transport} />
      <Route path="/wedding-party" exact component={WeddingParty} />

      <AppFooter>
        <Route path="/" component={Footer} />
      </AppFooter>
    </AppContainer>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
