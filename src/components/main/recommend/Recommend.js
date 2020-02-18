import React, { Component } from 'react';
import './recommend.scss';
import SectionTitle from '../section-title/Section-title';

export default class Recommend extends Component {
  state = {
    actived: 0,
  };
  handleIndexClick = event => {
    this.setState({
      actived: Number(event.target.dataset.index),
    });
  };

  componentDidMount() {
    const { recommands } = this.props;
    this.intervalId = setInterval(() => {
      this.setState(currentState => {
        return { actived: (currentState.actived + 1) % recommands.length };
      });
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  handleMouseEnter = () => {
    clearInterval(this.intervalId);
  };
  handleMouseLeave = () => {
    const { recommands } = this.props;
    this.intervalId = setInterval(() => {
      this.setState(currentState => {
        return { actived: (currentState.actived + 1) % recommands.length };
      });
    }, 5000);
  };

  render() {
    const { actived } = this.state;
    const { recommands, title } = this.props;
    return (
      <div className="recommend-container">
        <SectionTitle title={title} />
        {recommands.map(({ avatar, drecommandDescription, name, jobTitle }, index) => (
          <div
            className={
              index === actived
                ? 'carousel-recommend'
                : 'carousel-recommend carousel-recommend-actived'
            }
            key={index}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <div className="carousel-recommend__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="carousel-recommend__content">
              <p>{drecommandDescription}</p>
              <span>{name}</span>
              <span>{jobTitle}</span>
            </div>
          </div>
        ))}

        <div className="recommend-slider">
          {recommands.map((x, index) => (
            <div
              className={
                index === actived
                  ? 'recommend-slider__li recommend-slider__li_actived'
                  : 'recommend-slider__li'
              }
              key={`slider-${index}`}
              data-index={index}
              onClick={this.handleIndexClick}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
