import React, { Component } from 'react';
import './carousel-img.scss';

export default class CarouselImg extends Component {
  state = {
    actived: 0,
  };
  componentDidMount() {
    const { imgsSrc } = this.props;
    this.intervalId = setInterval(() => {
      this.setState(currentState => {
        return { actived: (currentState.actived + 1) % imgsSrc.length };
      });
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  handleIndexClick = event => {
    this.setState({
      actived: Number(event.target.dataset.index),
    });
  };
  handleMouseEnter = () => {
    clearInterval(this.intervalId);
  };
  handleMouseLeave = () => {
    const { imgsSrc } = this.props;
    this.intervalId = setInterval(() => {
      this.setState(currentState => {
        return { actived: (currentState.actived + 1) % imgsSrc.length };
      });
    }, 5000);
  };
  render() {
    const { actived } = this.state;
    const { imgsSrc } = this.props;
    return (
      <div className="carousel-img">
        <picture onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <img src={imgsSrc[actived]} alt="banner" />
        </picture>

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
            />
          ))}
        </div>
      </div>
    );
  }
}
