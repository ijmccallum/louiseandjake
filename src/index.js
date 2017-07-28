import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Scenes
import DundasCastle from './Scenes/DundasCastle.jsx';
import Accommodation from './Scenes/Accommodation.jsx';
import Edinburgh from './Scenes/Edinburgh.jsx';
import Gifts from './Scenes/Gifts.jsx';
import Music from './Scenes/Music.jsx';
import RSVP from './Scenes/RSVP.jsx';
import Transport from './Scenes/Transport.jsx';
import WeddingParty from './Scenes/WeddingParty.jsx';
import styled from 'styled-components';

const history = createHashHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/">
      <App>
        <Route
          path="/"
          exact
          title="Dundas Castle"
          component={DundasCastle}
        />
        <Route
          path="/accommodation"
          title="Accommodation"
          component={Accommodation}
        />
        <Route
          path="/edinburgh"
          title="Edinburgh"
          component={Edinburgh}
        />
        <Route
          path="/gifts"
          title="Gifts"
          component={Gifts}
        />
        <Route
          path="/music"
          title="Music"
          component={Music}
        />
        <Route
          path="/rsvp"
          title="RSVP"
          component={RSVP}
        />
        <Route
          path="/transport"
          title="Transport"
          component={Transport}
        />
        <Route
          path="/wedding-party"
          title="Wedding Party"
          component={WeddingParty}
        />
      </App>
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
