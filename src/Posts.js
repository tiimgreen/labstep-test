import React, { Component } from 'react'

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(p => {
      p.author.fullName = `${p.author.first} ${p.author.second}`
      return p
    })

    return (
      <div className='posts'>
        { posts.map(post => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <div className="pull-right">
                  <img src="icon-edit.svg" className="post-edit" />
                </div>
                <div>
                  <img src="icon-user.svg" className="post-author-image" />
                  <div className="post-meta-info">
                    <span className="post-author">{ post.author.fullName }</span> created a post
                    <div className="post-posted">{ post.posted }</div>
                  </div>
                </div>
              </div>
              <div className="post-body">{ post.body }</div>
            </div>
          )
        )}
      </div>
    )
  }
}

export default Posts
