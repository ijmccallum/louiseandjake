import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import styled from 'styled-components';
import Layouts from './Layouts';
import Icons from './Icons';
import Colors from '../Services/colors';
import NavLink from './NavLink';
const history = createHashHistory();

const NavWrap = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 70px 0;
  text-align: center;
  background-color: ${Colors.white};
  opacity: 0.95;
`;

const Close = styled.button`
  padding: 0; border: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 10px;
  padding: 10px 20px;
  svg {
    width: 10px; height; 10px;
    fill: ${Colors.gold1};
  }
`;

const Menu = Close.extend`
  right: 10px;
  svg {
    width: 15px; height: 15px;
    fill: ${Colors.white};
  }
`;

class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleClose(event){
    this.setState({ isOpen: false });
  }

  handleOpen(event){
    this.setState({ isOpen: true });
  }

  handleLinkClick(url){
    console.log('link click!', url);
    history.push(url);
    this.setState({ isOpen: false });
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <Menu onClick={this.handleOpen}>
          <Icons.Ham />
        </Menu>
      );
    }
    return (
      <NavWrap>
        <div>
          <Close onClick={this.handleClose}>
            <Icons.X />
          </Close>
        </div>
        <NavLink url="/" text="Louise & Jake" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/dundas-castle" text="Dundas Castle" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/accommodation" text="Accomodation" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/edinburgh" text="Edinburgh" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/gifts" text="Gifts" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/music" text="Music" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/rsvp" text="RSVP" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/transport" text="Transport" routeProps={this.props} handleClick={this.handleLinkClick} />
        <NavLink url="/wedding-party" text="Wedding Party" routeProps={this.props} handleClick={this.handleLinkClick} />
      </NavWrap>
    )
  }
}

export default Nav;