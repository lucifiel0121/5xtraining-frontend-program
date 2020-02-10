import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-link">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
        </div>
        <div className="navbar">
          <li className="navbar__items">
            <i className="far fa-gem"></i>
            <span>線上課程</span>
          </li>
          <li className="navbar__items navbar__items_fake-tag">
            <i className="far fa-compass fa-lg"></i>
            <span>ASTRO Camp</span>
          </li>
          <li className="navbar__items">
            <span>短期課程</span>
          </li>
          <li className="navbar__items">
            <span>專案開發</span>
          </li>
          <li className="navbar__items">
            <span>企業代訓</span>
          </li>
          <li className="navbar__items">
            <span>空間租借</span>
          </li>
          <li className="navbar__items">
            <span>最新消息</span>
          </li>
        </div>
      </header>
    );
  }
}
