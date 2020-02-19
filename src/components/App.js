import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './Landing';
import { BrowserRouter as Router } from 'react-router-dom';
export default class App extends React.Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Router>
        <Header />
        <Landing />
        <Footer />
        <div className="scroll-to-top" onClick={this.handleClick}>
          <i className="fa fa-angle-up"></i>
        </div>
      </Router>
    );
  }
}
