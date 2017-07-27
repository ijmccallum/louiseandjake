import React, { Component } from 'react';
import './App.css';
import { Router, Route, Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

//Scenes
import DundasCastle from './Scenes/DundasCastle.jsx';
import Accommodation from './Scenes/Accommodation.jsx';
import Edinburgh from './Scenes/Edinburgh.jsx';
import Gifts from './Scenes/Gifts.jsx';
import Music from './Scenes/Music.jsx';
import RSVP from './Scenes/RSVP.jsx';
import Transport from './Scenes/Transport.jsx';
import WeddingParty from './Scenes/WeddingParty.jsx';

const history = createHashHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <div className="app__header">
            <nav className="nav">
              <Link to="/" className="nav__link">Dundas Castle</Link>
              <Link to="/accommodation" className="nav__link">Accomodation</Link>
              <Link to="/edinburgh" className="nav__link">Edinburgh</Link>
              <Link to="/gifts" className="nav__link">Gifts</Link>
              <Link to="/music" className="nav__link">Music</Link>
              <Link to="/rsvp" className="nav__link">RSVP</Link>
              <Link to="/transport" className="nav__link">Transport</Link>
              <Link to="/wedding-party" className="nav__link">WeddingParty</Link>
            </nav>
          </div>
          <div className="app__body">
            <Route path="/" exact component={DundasCastle} />
            <Route path="/accommodation" component={Accommodation} />
            <Route path="/edinburgh" component={Edinburgh} />
            <Route path="/gifts" component={Gifts} />
            <Route path="/music" component={Music} />
            <Route path="/rsvp" component={RSVP} />
            <Route path="/transport" component={Transport} />
            <Route path="/wedding-party" component={WeddingParty} />
          </div>
          <div className="app__footer">
            footer
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
