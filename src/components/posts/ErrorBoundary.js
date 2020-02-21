import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log('yooooo', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary caught an error', error, info);
  }

  render() {
    console.log('render Error?', this.state.hasError);
    if (this.state.hasError) {
      return <h2 style={{ marginTop: '80px' }}>There wan an error with this things.</h2>;
    }

    return this.props.children;
  }
}
