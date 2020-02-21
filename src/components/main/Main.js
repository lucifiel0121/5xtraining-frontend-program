import React, { Component } from 'react';
import CarouselImg from './carousel-img/Carousel-img';
import './main.scss';
import FeatureSection from './feature-section/Feature-section';
import Lecture from './lecture/Lecture';
import Showcase from './showcase/Showcase';
import Recommend from './recommend/Recommend';
import StaticDataContext from '../StaticDataContext';
export default class Main extends Component {
  render() {
    return (
      <StaticDataContext.Consumer>
        {([jsonData]) => {
          const {
            bannerImgs,
            featureLists,
            lectureInfo,
            showcaseInfo,
            socialIcon,
            recommands,
          } = jsonData.data;
          return (
            <div className="main-container">
              <CarouselImg imgsSrc={bannerImgs} />
              <FeatureSection featureDescription={featureLists} />
              <Lecture title="熱門網頁設計課程推薦" lectureInfo={lectureInfo} />
              <Recommend title="網頁課程推薦" recommands={recommands} />
              <Showcase
                title="案例作品 Showcase"
                showcaseInfo={showcaseInfo}
                socialIcon={socialIcon}
              />
            </div>
          );
        }}
      </StaticDataContext.Consumer>
    );
  }
}
