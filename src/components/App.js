/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Landing from './Landing'

export default class App extends React.Component {
   handleClick = () => {
      window.scrollTo(0, 0)
   }

   render() {
      return (
         <Router>
            <Header />
            <Landing />
            <Footer />
            <div className="scroll-to-top" onClick={this.handleClick}>
               <i className="fa fa-angle-up" />
            </div>
         </Router>
      )
   }
}
