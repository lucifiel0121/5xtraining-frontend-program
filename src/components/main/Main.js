import React, { Component } from 'react';
import Test from './test/Test';
import CarouselImg from './carousel-img/Carousel-img';
import './main.scss';
import FeatureSection from './feature-section/Feature-section';
export default class Main extends Component {
  state = {
    bannerImgs: [
      `${process.env.PUBLIC_URL}/assets/images/banner_astro.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/banner_imcodingit.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/banner_mokumokukai.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/banner_5xruby.jpg`,
    ],
    featureLists: [
      {
        featureImg: `${process.env.PUBLIC_URL}/assets/images/feature-list-img1.png`,
        featureTitle: ['網頁設計', '前後端課程教學'],
        featureContent:
          '帶你掌握 程式技能轉職工程師， 程式課程 從入門到進階讓你快速上手，學員好評推薦 轉職課程！',
      },
      {
        featureImg: `${process.env.PUBLIC_URL}/assets/images/feature-list-img2.png`,
        featureTitle: ['頂尖技術', '網頁製作、專案開發'],
        featureContent:
          '網站開發到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。',
      },
      {
        featureImg: `${process.env.PUBLIC_URL}/assets/images/feature-list-img3.png`,
        featureTitle: ['資訊軟體開發', '技術顧問'],
        featureContent:
          '協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！',
      },
      {
        featureImg: `${process.env.PUBLIC_URL}/assets/images/feature-list-img4.png`,
        featureTitle: ['前後端工程師', '社群經營'],
        featureContent:
          'Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。',
      },
    ],
  };
  render() {
    const { bannerImgs, featureLists } = this.state;
    return (
      <div className="main-container">
        <CarouselImg imgsSrc={bannerImgs} />
        <FeatureSection featureDescription={featureLists} />
        <Test />
        <div className="scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
