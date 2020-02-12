import React, { Component } from 'react';
import './feature-section.scss';
export default class FeatureSection extends Component {
  render() {
    const { featureDescription } = this.props;
    return (
      <div className="feature-section">
        <div className="feature-section__title">
          <span>關於五倍紅寶石 About 5xRuby</span>
        </div>

        <div className="feature-lists">
          {featureDescription.map(({ featureImg, featureTitle, featureContent }, index) => (
            <div className="feature-lists__item" key={index}>
              <img src={featureImg} alt="feature-img" />
              <div className="feature-lists__title">
                {featureTitle.map((text, idx) => (
                  <h3 key={idx}>{text}</h3>
                ))}
              </div>
              <div className="feature-lists__content">
                <p>{featureContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}