import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
import registerServiceWorker from "./registerServiceWorker";
import styled from "styled-components";
import Colors from "./Services/colors";

import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import MusicPlayer from "./Components/MusicPlayer.jsx";
import Icons from "./Components/Icons.jsx";
import EnsureAuth from "./Components/EnsureAuth.jsx";
import LogOutBtn from "./Components/LogOutBtn.jsx";

//Scenes
import Home from "./Scenes/Home.jsx";
import DundasCastle from "./Scenes/DundasCastle.jsx";
import Accommodation from "./Scenes/Accommodation.jsx";
import Edinburgh from "./Scenes/Edinburgh.jsx";
import Gifts from "./Scenes/Gifts.jsx";
import Music from "./Scenes/Music.jsx";
import BBQ from "./Scenes/BBQ.jsx";
import Transport from "./Scenes/Transport.jsx";
import WeddingParty from "./Scenes/WeddingParty.jsx";
import Ceilidh from "./Scenes/Ceilidh.jsx";
import WedPics from "./Scenes/WedPics.jsx";

const history = createHashHistory();

if (document.location.host.indexOf("localhost") > -1) {
  window.isLive = false;
} else {
  window.isLive = true;
}

if (window.isLive) {
  window.imgRoot = "/public/images";
} else {
  window.imgRoot = "/images";
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
  button {
    display: block;
    margin: 0 auto -25px;
    max-width: 100%;
    background: transparent;
    border: none;
    outline: none;
  }
  img {
    display: block;
    margin: 0 auto -25px;
    max-width: 100%;
  }
`;

const FadeIn = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0;
`;

const AppFooter = styled.footer`
  margin-top: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    const loggedInCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)l\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.state = {
      isLoggedIn: loggedInCookie == "1",
      isSurprise: false,
      surpriseFading: false,
      hideForSurprise: false
    };
    this.headerBtnClick = this.headerBtnClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  headerBtnClick() {
    this.setState({
      surpriseFading: true
    });

    setTimeout(() => {
      this.setState({
        isSurprise: true
      });
    }, 1900);
  }

  handleLogin() {
    document.cookie = "l=1; expires=Thu, 31 Dec 2018 00:00:00 GMT";
    history.push("/");
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
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
            {this.state.surpriseFading && <FadeIn className="fade-it" />}
            {this.state.isSurprise && (
              <iframe
                style={{
                  position: "fixed",
                  zIndex: "10",
                  width: "100%",
                  height: "100vh",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  border: "none"
                }}
                src={`https://www.youtube.com/embed/HmwkqNud1R4?autoplay=1&rel=0`}
                frameBorder="0"
                allowFullScreen
              />
            )}
            {!this.state.isSurprise && (
              <div>
                <EnsureAuth.Header isLoggedIn={this.state.isLoggedIn}>
                  <AppHeader>
                    <button onClick={this.headerBtnClick}>
                      <img src={`${window.imgRoot}/flowers.jpg`} />
                    </button>
                    <Route
                      path="/"
                      render={routeProps => (
                        <Nav
                          routeProps={routeProps}
                          handleLogout={this.handleLogout}
                        />
                      )}
                    />
                  </AppHeader>
                </EnsureAuth.Header>

                <EnsureAuth.Body
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                >
                  <div>
                    <Route path="/" exact render={() => <Home />} />
                    <Route
                      path="/dundas-castle"
                      exact
                      render={() => <DundasCastle />}
                    />
                    <Route
                      path="/accommodation"
                      exact
                      render={() => <Accommodation />}
                    />
                    <Route
                      path="/edinburgh"
                      exact
                      render={() => <Edinburgh />}
                    />
                    <Route path="/gifts" exact render={() => <Gifts />} />
                    <Route path="/music" exact render={() => <Music />} />
                    <Route path="/bbq" exact render={() => <BBQ />} />
                    <Route path="/travel" exact render={() => <Transport />} />
                    <Route
                      path="/wedding-party"
                      exact
                      render={() => <WeddingParty />}
                    />
                    <Route path="/ceilidh" exact render={() => <Ceilidh />} />
                    <Route path="/photos" exact render={() => <WedPics />} />
                  </div>
                </EnsureAuth.Body>
              </div>
            )}
          </div>
        </Router>

        {!this.state.isSurprise && (
          <Router history={history}>
            <EnsureAuth.Footer isLoggedIn={this.state.isLoggedIn}>
              <AppFooter>
                <Footer handleLogout={this.handleLogout} />
              </AppFooter>
            </EnsureAuth.Footer>
          </Router>
        )}
        {!this.state.surpriseFading && <MusicPlayer />}
      </AppContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
