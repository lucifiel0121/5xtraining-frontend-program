import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn(
      'ErrorBoundary caught an error, after 5 seconds to go back the home page ',
      error,
      info,
    );
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2 style={{ marginTop: '80px' }}>
          There wan an error with this things. After 5 seconds to go back the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}
