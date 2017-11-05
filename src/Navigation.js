import React, { Component } from 'react'
import { entities } from './api'

export const getTimelinesForUser = (timelines, userId) => {
  return timelines.filter(t => {
    return t.owner_id === userId
  })
}

export class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      timelines: entities.timelines
    }
  }

  render() {
    const timelines = this.state.timelines
    const userId = parseInt(this.props.userId, 10)

    /* TO-DO: Fix the following code to show the timelines
    that are associated with the above userId
    */
   const currentUserTimelines = getTimelinesForUser(timelines, userId)
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
