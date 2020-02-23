import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './main/Main'
import Contacts from './contacts/Contacts'
import Posts from './posts/Posts'

export default class Landing extends Component {
   state = {}

   render() {
      return (
         <Switch>
            <Route path="/class">
               <ClassComponent />
            </Route>
            <Route path="/camp">
               <Camp />
            </Route>
            <Route path="/talks">
               <Talks />
            </Route>
            <Route path="/project">
               <Project />
            </Route>
            <Route path="/training">
               <Training />
            </Route>
            <Route path="/space">
               <Space />
            </Route>
            <Route path="/posts">
               <Posts />
            </Route>
            <Route path="/contacts">
               <Contacts />
            </Route>
            <Route path="">
               <Main />
            </Route>
         </Switch>
      )
   }
}

function ClassComponent() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Class</h2>
}

function Camp() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Camp</h2>
}

function Talks() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Talks</h2>
}

function Project() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Project</h2>
}
function Training() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Training</h2>
}
function Space() {
   return <h2 style={{ marginTop: 70, height: `80vh` }}>Space</h2>
}
