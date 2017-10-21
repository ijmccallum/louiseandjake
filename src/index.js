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
import LogOutBtn from './Components/LogOutBtn.jsx';

//Scenes
import Home from './Scenes/Home.jsx';
import DundasCastle from './Scenes/DundasCastle.jsx';
import Accommodation from './Scenes/Accommodation.jsx';
import Edinburgh from './Scenes/Edinburgh.jsx';
import Gifts from './Scenes/Gifts.jsx';
import Music from './Scenes/Music.jsx';
import BBQ from './Scenes/BBQ.jsx';
import Transport from './Scenes/Transport.jsx';
import WeddingParty from './Scenes/WeddingParty.jsx';
import Ceilidh from './Scenes/Ceilidh.jsx';
import WedPics from './Scenes/WedPics.jsx';

const history = createHashHistory();

if (document.location.host.indexOf("localhost") > -1) {
  window.isLive = false;
} else {
  window.isLive = true;
}

if (window.isLive) {
  window.imgRoot = '/public/images';
} else {
  window.imgRoot = '/images';
}

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${Colors.text};
  a {
    display: block;
    color: ${Colors.subTitle};
  }
`;

const AppHeader = styled.header`
  img {
    display: block;
    margin: 0 auto -25px;
    max-width: 100%;
  }
`;


const AppFooter = styled.footer`
  margin-top: auto;
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
            <EnsureAuth.Header isLoggedIn={this.state.isLoggedIn}>
              <AppHeader>
                <img src={`${window.imgRoot}/flowers.jpg`} />
                <Route path="/" render={(routeProps) => <Nav routeProps={routeProps} handleLogout={this.handleLogout} />} />
              </AppHeader>
            </EnsureAuth.Header>
    
            <EnsureAuth.Body 
              isLoggedIn={this.state.isLoggedIn} 
              handleLogin={this.handleLogin} 
            >
              <div>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/dundas-castle" exact render={() => <DundasCastle />} />
                <Route path="/accommodation" exact render={() => <Accommodation />} />
                <Route path="/edinburgh" exact render={() => <Edinburgh />} />
                <Route path="/gifts" exact render={() => <Gifts />} />
                <Route path="/music" exact render={() => <Music />} />
                <Route path="/bbq" exact render={() => <BBQ />} />
                <Route path="/travel" exact render={() => <Transport />} />
                <Route path="/wedding-party" exact render={() => <WeddingParty />} />
                <Route path="/ceilidh" exact render={() => <Ceilidh />} />
                <Route path="/photos" exact render={() => <WedPics />} />
                
              </div>
            </EnsureAuth.Body>
          </div>
        </Router>
    
        <Router history={history}>
          <EnsureAuth.Footer isLoggedIn={this.state.isLoggedIn}>
            <AppFooter>
              <Footer handleLogout={this.handleLogout}/>
            </AppFooter>
          </EnsureAuth.Footer>
        </Router>
    
        <MusicPlayer />

      </AppContainer>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'));

registerServiceWorker();
