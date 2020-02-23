/* eslint-disable no-console */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ErrorBoundary extends Component {
   state = { hasError: false, redirect: false }

   static getDerivedStateFromError() {
      return { hasError: true }
   }

   componentDidUpdate() {
      const { hasError } = this.state
      if (hasError) {
         setTimeout(() => {
            this.setState({ redirect: true })
         }, 5000)
      }
   }

   componentDidCatch(error, info) {
      console.warn(
         'ErrorBoundary caught an error, after 5 seconds to go back the home page ',
         error,
         info,
      )
   }

   render() {
      const { redirect, hasError } = this.state
      const { children } = this.props
      if (redirect) {
         return <Redirect to="/" />
      }
      if (hasError) {
         return (
            <h2 style={{ marginTop: '80px' }}>
               There wan an error with this things. After 5 seconds to go back
               the home page.
            </h2>
         )
      }

      return children
   }
}
