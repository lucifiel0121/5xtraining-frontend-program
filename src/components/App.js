import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
