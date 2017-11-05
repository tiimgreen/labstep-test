import React, { Component } from 'react'
import { entities } from './api'

export class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      timelines: entities.timelines
    }
  }

  render() {
    const timelines = this.state.timelines
    const userId = this.props.userId

    /* TO-DO: Fix the following code to show the timelines 
    that are associated with the above userId
    */
    let currentUserTimelines = []
    
    for(var i=0; i<timelines.length; i++) {
      if (timelines[i].owner_id === userId) {
        currentUserTimelines.push(timelines[i])
      }
    }
    /* END TO-DO */

    return (
      <div>
        <div className="timelines-list">
          { currentUserTimelines.map(timeline => {  
            return <div key={timeline.id}>{ timeline.name }</div>
          }) }
        </div>        
      </div>
    )
  }
}

export default Navigation
