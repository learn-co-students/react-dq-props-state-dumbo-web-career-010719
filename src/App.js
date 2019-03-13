import React, { Component } from 'react'
import MasterHog from './MasterHog'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <MasterHog weight={2.54} />
      </div>
    )
  }

}
