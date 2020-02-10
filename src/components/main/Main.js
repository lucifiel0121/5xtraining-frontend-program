import React, { Component } from 'react';
import Carousel from '../carousel/Carousel';
import './main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </div>
        <Carousel />
      </div>
    );
  }
}
