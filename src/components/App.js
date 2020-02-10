import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
