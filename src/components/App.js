import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

import './app.scss';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
