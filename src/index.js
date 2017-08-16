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
const loggedInCookie = document.cookie.replace(/(?:(?:^|.*;\s*)l\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (loggedInCookie == '1') {
  isLoggedIn = true;
}

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
        //set cookie to remember!!
        document.cookie = "l=1; expires=Thu, 31 Dec 2018 00:00:00 GMT";
        history.push("/");
      }}/>
    }
  }
}

const LogOutBtn = styled.button`
  position: absolute;
  color: white;
  z-index: 10;
  bottom: 0;
  right: 0;
  background: transparent;
  border: none;
  padding: 5px;
`;

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick(){
    document.cookie = "l=0; expires=Thu, 31 Dec 2018 00:00:00 GMT";
    console.log('log out!');
    history.push("/login");
  }

  render() {
    return (
      <LogOutBtn onclick={this.handleClick}>
        X
      </LogOutBtn>
    )
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
            <LogOut />
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
