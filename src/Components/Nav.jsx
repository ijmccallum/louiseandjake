import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layouts from "./Layouts";
import Icons from "./Icons";
import Colors from "../Services/colors";
import NavLink from "./NavLink";
import LogOutBtn from "./LogOutBtn.jsx";
import createHashHistory from "history/createHashHistory";
const history = createHashHistory();

const NavWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 70px 0;
  text-align: center;
  opacity: 0.95;
  background-color: ${Colors.nav.background};
  @media (min-width: 1000px) {
    background-color: transparent;
    flex-direction: row;
    padding: 5px;
    position: static;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Close = styled.button`
  border: 0;
  background-color: ${Colors.nav.closebg};
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 10px;
  padding: 7px 15px 6px;
  border-radius: 5px;
  svg {
    width: 10px; height; 10px;
    fill: ${Colors.nav.text};
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Menu = Close.extend`
  right: 10px;
  position: absolute;
  z-index: 5;
  svg {
    width: 15px;
    height: 15px;
    fill: ${Colors.nav.text};
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleClose(event) {
    this.setState({ isOpen: false });
  }

  handleOpen(event) {
    this.setState({ isOpen: true });
  }

  handleLinkClick(url) {
    console.log("link click!", url);
    history.push(url);
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen || document.documentElement.clientWidth > 1000) {
      return (
        <NavWrap className="serif">
          <div>
            <Close onClick={this.handleClose}>
              <Icons.X />
            </Close>
          </div>
          <NavLink
            url="/"
            text="Louise & Jake"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/dundas-castle"
            text="Dundas Castle"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/wedding-party"
            text="Wedding Party"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          {/* <NavLink url="/travel" text="Travel" routeProps={this.props.routeProps} handleClick={this.handleLinkClick} /> */}
          <NavLink
            url="/accommodation"
            text="Accommodation"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/gifts"
            text="Gifts"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/travel"
            text="Travel"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/photos"
            text="Photos"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />
          <NavLink
            url="/bbq"
            text="Sunday BBQ"
            routeProps={this.props.routeProps}
            handleClick={this.handleLinkClick}
          />

          {/* 
          <NavLink url="/edinburgh" text="Edinburgh" routeProps={this.props.routeProps} handleClick={this.handleLinkClick} />
          <NavLink url="/music" text="Playlist Requests" routeProps={this.props.routeProps} handleClick={this.handleLinkClick} /> */}
          {/* <div>
            <LogOutBtn handleLogout={this.props.handleLogout}>Logout</LogOutBtn>
          </div> */}
        </NavWrap>
      );
    }
    return (
      <Menu onClick={this.handleOpen}>
        <Icons.Ham />
      </Menu>
    );
  }
}

export default Nav;
