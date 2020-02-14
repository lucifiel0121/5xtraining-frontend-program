import React, { Component } from 'react';
import './section-title.scss';
export default class SectionTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="section-title">
        <span>{title}</span>
      </div>
    );
  }
}
