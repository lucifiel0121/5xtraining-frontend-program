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
          <li className="navbar__items">
            <i className="far fa-compass fa-lg"></i>
            <span>ASTRO Camp</span>
            <div className="navbar__items_fake-tag">報名優惠中</div>
          </li>
          <li className="navbar__items">短期課程</li>
          <li className="navbar__items">專案開發</li>
          <li className="navbar__items">企業代訓</li>
          <li className="navbar__items">空間租借</li>
          <li className="navbar__items">最新消息</li>
        </div>
      </header>
    );
  }
}
