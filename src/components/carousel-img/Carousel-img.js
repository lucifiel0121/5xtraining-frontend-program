import React, { Component } from 'react';
import './carousel-img.scss';

export default class CarouselImg extends Component {
  state = {
    actived: 0,
  };
  handleIndexClick = event => {
    this.setState({
      actived: Number(event.target.dataset.index),
    });
  };
  render() {
    const { actived } = this.state;
    const { imgsSrc } = this.props;
    return (
      <div className="carousel-img">
        <img src={imgsSrc[actived]} alt="default" />

        <div className="carousel-slider">
          {imgsSrc.map((x, index) => (
            <i
              className={
                index === actived
                  ? 'carousel-slider__li carousel-slider__li_actived'
                  : 'carousel-slider__li'
              }
              key={index}
              data-index={index}
              onClick={this.handleIndexClick}
            ></i>
          ))}
        </div>
      </div>
    );
  }
}
