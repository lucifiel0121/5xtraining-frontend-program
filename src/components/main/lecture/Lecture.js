import React, { Component } from 'react';
import './lecture.scss';
import SectionTitle from '../section-title/Section-title';

export default class Lecture extends Component {
  render() {
    return (
      <div className="lecture">
        <SectionTitle title="熱門網頁設計課程推薦" />
        <div className="lecture-lists">
          {[1, 2, 3].map((x, index) => (
            <div className="lecture-lists__item" key={index}>
              <div className="lecture-card">
                <div className="lecture-card__pic">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/functional.jpg`} alt="" />
                </div>
                <div className="lecture-card__content">
                  <span className="badge badge__color badge__color_red">開放報名中</span>
                  <h4 className="lecture-card__title">客製化進階 RWD 手機版網頁設計班 - 假日班</h4>
                  <small className="lecture-card__teacher">講師：李建杭 (Amos Lee)</small>
                  <div className="lecture-card__time">
                    <small>開課時間</small>
                    <span className="badge badge__color badge__color_gray badge__time">
                      3 月｜假日班
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
