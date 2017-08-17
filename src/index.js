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
import Icons from './Components/Icons.jsx';
import EnsureAuth from './Components/EnsureAuth.jsx';

//Scenes
import Home from './Scenes/Home.jsx';
import DundasCastle from './Scenes/DundasCastle.jsx';
import Accommodation from './Scenes/Accommodation.jsx';
import Edinburgh from './Scenes/Edinburgh.jsx';
import Gifts from './Scenes/Gifts.jsx';
import Music from './Scenes/Music.jsx';
import RSVP from './Scenes/RSVP.jsx';
import Transport from './Scenes/Transport.jsx';
import WeddingParty from './Scenes/WeddingParty.jsx';

const history = createHashHistory();

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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


class App extends React.Component {
  constructor(props) {
    super(props);
    const loggedInCookie = document.cookie.replace(/(?:(?:^|.*;\s*)l\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.state = {
      isLoggedIn: (loggedInCookie == '1')
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(){
    document.cookie = "l=1; expires=Thu, 31 Dec 2018 00:00:00 GMT";
    history.push("/");
    this.setState({ isLoggedIn: true });
  }

  handleLogout(){
    console.log("loggin out");
    document.cookie = "l=0; expires=Thu, 31 Dec 2018 00:00:00 GMT";
    history.push("/login");
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <AppContainer>

        <Router history={history}>
          <div>
            <AppHeader>
              <Route path="/" component={Nav} />
            </AppHeader>
    
            <EnsureAuth.Body isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout}>
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
            </EnsureAuth.Body>
          </div>
        </Router>
    
        <EnsureAuth.Footer isLoggedIn={this.state.isLoggedIn}>
          <AppFooter>
            <Footer />
          </AppFooter>
        </EnsureAuth.Footer>
    
        <MusicPlayer />

      </AppContainer>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'));

registerServiceWorker();
