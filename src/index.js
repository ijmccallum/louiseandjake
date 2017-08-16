import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';
import Colors from './Services/colors';

import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';
import MusicPlayer from './Components/MusicPlayer.jsx';

//Scenes
import Login from './Scenes/Login.jsx';
import Home from './Scenes/Home.jsx';
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

// background-color: ${Colors.gold1};
const AppHeader = styled.header`
  padding: 4px;
  color: white;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;

const AppFooter = styled.footer`
  margin-top: auto;
  background-color: ${Colors.gold1};
  padding: 4px;
  color: white;
`;

const history = createHashHistory();

let isLoggedIn = false;

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    if (!isLoggedIn) {
      history.replace("/login");
    }
  }

  render() {
    if (isLoggedIn) {
      return this.props.children
    } else {
      return <Login successHandler={() => {
        isLoggedIn = true;
        history.push("/");
      }}/>
    }
  }
}

ReactDOM.render((
  <AppContainer>

    <Router history={history}>
      <div>
        <AppHeader>
          <Route path="/" component={Nav} />
        </AppHeader>

        <EnsureLoggedInContainer>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/dundas-castle" exact component={DundasCastle} />
            <Route path="/accommodation" exact component={Accommodation} />
            <Route path="/edinburgh" exact component={Edinburgh} />
            <Route path="/gifts" exact component={Gifts} />
            <Route path="/music" exact component={Music} />
            <Route path="/rsvp" exact component={RSVP} />
            <Route path="/transport" exact component={Transport} />
            <Route path="/wedding-party" exact component={WeddingParty} />
          </div>
        </EnsureLoggedInContainer>
      </div>
    </Router>
    <AppFooter>
      <Footer />
    </AppFooter>

    <MusicPlayer />
  </AppContainer>
), document.getElementById('root'));

registerServiceWorker();
