import React, { Component } from 'react'

class Posts extends Component {
  render() {
    const posts = this.props.posts

    return (
      <div className='posts'>
        { posts.map(post => (
            <div className="post" key={post.id}>
              
              {/* TO-DO: Write the HTML and CSS to display the post according to specs */}

              {/* END TO-DO */}
            </div>
          )
        )}
      </div>  
    )
  }
}

export default Posts
