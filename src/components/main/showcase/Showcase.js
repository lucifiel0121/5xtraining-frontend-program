import React, { Component } from 'react';
import './showcase.scss';
import SectionTitle from '../section-title/Section-title';

export default class Showcase extends Component {
  render() {
    const { showcaseInfo, title, socialIcon } = this.props;
    return (
      <div className="showcase">
        <SectionTitle title={title} />
        <div className="showcase-lists">
          {showcaseInfo.map(({ showcaseImg, showcaseTitle, showcaseText }, index) => (
            <div className="showcase-lists__item" key={index}>
              <div className="showcase-card">
                <div className="showcase-card__pic">
                  <img src={showcaseImg} alt="" />
                </div>
                <div className="showcase-card__content">
                  <h4 className="showcase-card__title">{showcaseTitle}</h4>
                  <div className="showcase-card__text">{showcaseText}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="showcase-btn">
          <p>...更多案例</p>
        </div>
        <div className="know-about-us">
          <h3>想更瞭解我們嗎？</h3>
          <div className="know-about-us__text">
            <span>
              您可以看看<a href="/faq">常見問題</a>
              或者直接<a href="/contacts">線上洽詢</a>，會有親切的客服人員回答您的問題，
            </span>
            <span> 也可以透過社群網站隨時關注我們的動態。</span>
          </div>
          <div className="social-btn">
            {socialIcon.map((icon, index) => (
              <img src={icon} alt="icon" key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
