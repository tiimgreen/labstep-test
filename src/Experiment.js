import React, { Component } from 'react'

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thread: this.props.experiment.thread,
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress(evt) {
    if(evt.charCode !== 13) return
    this.onSubmit()
  }

  onInputChange(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  onSubmit() {
    const id = this.state.thread.comments.length + 1
    const comment = {
      id,
      body: this.state.value,
      verified: true,
      timesShared: 10,
      author: this.props.user
    }
    const thread = this.state.thread

    const updatedThread = {
      ...thread, comments: [...thread.comments, comment]
    }

    this.setState({
      thread: updatedThread,
      value: ''
    })
  }

  render() {
    const experiment = this.props.experiment

    /* TO-DO:
    1. Write some code to show only verified comments (comments have a verified field of type boolean)
    2. Write some code to show the total number of times the verified comments
    have been shared (use the timesShared field to calculate the total)
    3. Append a fullName ( concatenation of first and second name ) field to the author of your verified comments
    4. Style the comment-bar according to specs
    */
    const verifiedComments = this.state.thread.comments.filter(c => c.verified)
    const comments = verifiedComments.map(c => {
      c.author.fullName = `${c.author.first} ${c.author.second}`
      return c
    })
    const timesShared = verifiedComments
      .map(c => c.timesShared)
      .reduce((a, b) => a + b, 0)
    /* END TO-DO */

    return (
      <div className='experiment'>
        <h2>{ experiment.title }</h2>

        <div className="comments">
          { comments.map(comment => (
              <div className="comment" key={comment.id}>
                <p>{ comment.author.fullName }</p>
                <p>{ comment.body }</p>
              </div>
            )
          )}
        </div>

        <div className="comment-bar">
          <input type="text" value={this.state.value} placeholder="Reply with a comment" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
          <button onClick={this.onSubmit}>Send</button>
        </div>

        <p>Times Shared: { timesShared }</p>
      </div>
    )
  }
}

export default Experiment
