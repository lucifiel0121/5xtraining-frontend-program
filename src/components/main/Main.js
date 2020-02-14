import React, { Component } from 'react';
import Test from './test/Test';
import CarouselImg from './carousel-img/Carousel-img';
import './main.scss';
import FeatureSection from './feature-section/Feature-section';
import Lecture from './lecture/Lecture';
import json from './static-data';
export default class Main extends Component {
  render() {
    const { bannerImgs, featureLists } = json.data;
    return (
      <div className="main-container">
        <CarouselImg imgsSrc={bannerImgs} />
        <FeatureSection featureDescription={featureLists} />
        <Lecture />
        <Test />
        <div className="scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
