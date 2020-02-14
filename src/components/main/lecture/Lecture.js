import React, { Component } from 'react';
import './lecture.scss';
import SectionTitle from '../section-title/Section-title';

export default class Lecture extends Component {
  render() {
    const { lectureInfo, title } = this.props;
    return (
      <div className="lecture">
        <SectionTitle title={title} />
        <div className="lecture-lists">
          {lectureInfo.map(
            (
              {
                lectureImg,
                isLectureOpen,
                isLectureNew,
                lectureTitle,
                lectureTeacher,
                lectureTime,
              },
              index,
            ) => (
              <div className="lecture-lists__item" key={index}>
                <div className="lecture-card">
                  <div className="lecture-card__pic">
                    <img src={lectureImg} alt="" />
                  </div>
                  <div className="lecture-card__content">
                    {isLectureNew && (
                      <span className="badge badge__color badge__color_orange">新開課</span>
                    )}
                    {isLectureOpen && (
                      <span className="badge badge__color badge__color_red">開放報名中</span>
                    )}

                    <h4 className="lecture-card__title">{lectureTitle}</h4>
                    <small className="lecture-card__teacher">{`講師：${lectureTeacher}`}</small>
                    <div className="lecture-card__time">
                      <small>開課時間</small>
                      <span className="badge badge__color badge__color_gray badge__time">
                        {lectureTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="lecture-btn">
          <button>看更多網頁課程</button>
        </div>
      </div>
    );
  }
}
