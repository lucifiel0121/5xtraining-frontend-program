import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  /*   constructor(props) {
    super(props);
    this.state = {
      navToggle: false,
    };
  }
 */
  state = {
    navToggle: false,
  };

  handleNavClick = () => {
    // Kent C. Dodds :
    // if you need to reference current states than you can update a function
    // if you don't than you can just use an object
    this.setState(currentState => {
      return { navToggle: !currentState.navToggle };
    });
  };

  render() {
    const { navToggle } = this.state;
    return (
      /*  <header className="navbar-actived"> */
      <header className={navToggle ? 'navbar-actived' : ''}>
        <div className="logo-link">
          <NavLink to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
          </NavLink>
        </div>

        <div className="navbar">
          <NavLink to="/class" activeClassName="navbar__items_selected">
            <li className="navbar__items">
              <i className="far fa-gem"></i>
              <p>線上課程</p>
            </li>
          </NavLink>
          <NavLink to="/camp" activeClassName="navbar__items_selected">
            <li className="navbar__items navbar__items_fake-tag">
              <i className="far fa-compass fa-lg"></i>
              <p>ASTRO Camp</p>
            </li>
          </NavLink>
          <NavLink to="/talks" activeClassName="navbar__items_selected">
            <li className="navbar__items">
              <p>短期課程</p>
            </li>
          </NavLink>
          <NavLink to="/project" activeClassName="navbar__items_selected">
            <li className="navbar__items">
              <p>專案開發</p>
            </li>
          </NavLink>
          <NavLink to="/training" activeClassName="navbar__items_selected">
            {' '}
            <li className="navbar__items">
              <p>企業代訓</p>
            </li>
          </NavLink>
          <NavLink to="/space" activeClassName="navbar__items_selected">
            {' '}
            <li className="navbar__items">
              <p>空間租借</p>
            </li>
          </NavLink>
          <NavLink to="/posts" activeClassName="navbar__items_selected">
            <li className="navbar__items">
              <p>最新消息</p>
            </li>
          </NavLink>
        </div>
        <button className="nav-toggler" onClick={this.handleNavClick}>
          <i className="icon-bar"></i>
          <i className="icon-bar"></i>
          <i className="icon-bar"></i>
        </button>
      </header>
    );
  }
}
