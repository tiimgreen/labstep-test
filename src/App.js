import React, { Component } from 'react'
import Navigation from './Navigation'
import Experiment from './Experiment'
import Posts from './Posts'

import './scss/index.scss'

import { experiment, posts, user } from './api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Navigation userId="35" />
        </div>
        <div className="main">
          <Experiment experiment={experiment} user={user} />
          <Posts posts={posts} />
        </div>
        <div className="right">
          
        </div>
      </div>
    )
  }
}

export default App
