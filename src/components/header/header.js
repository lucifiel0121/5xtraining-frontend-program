import React, { Component } from 'react';
import './header.scss';

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
    let { navToggle } = this.state;
    navToggle = !navToggle;
    this.setState({ navToggle });
  };

  render() {
    const { navToggle } = this.state;
    return (
      /*  <header className="navbar-actived"> */
      <header className={navToggle ? 'navbar-actived' : ''}>
        <div className="logo-link">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
        </div>

        <div className="navbar">
          <li className="navbar__items">
            <i className="far fa-gem"></i>
            <p>線上課程</p>
          </li>
          <li className="navbar__items navbar__items_fake-tag">
            <i className="far fa-compass fa-lg"></i>
            <p>ASTRO Camp</p>
          </li>
          <li className="navbar__items">
            <p>短期課程</p>
          </li>
          <li className="navbar__items">
            <p>專案開發</p>
          </li>
          <li className="navbar__items">
            <p>企業代訓</p>
          </li>
          <li className="navbar__items">
            <p>空間租借</p>
          </li>
          <li className="navbar__items">
            <p>最新消息</p>
          </li>
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
