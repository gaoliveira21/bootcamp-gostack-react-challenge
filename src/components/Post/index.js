import React, { Component } from 'react';

import './style.css';

class Post extends Component {
  state = this.props.data;

  render() {
    console.log(this.props)
    return (
      <div className="post">
        <div className="post-header">
          <img src={this.state.author.avatar} className="avatar" />
          <div className="post-info">
            <p>{this.state.author.name}</p>
            <span>{this.state.date}</span>
          </div>
        </div>
        <div className="post-body">
          <p>
            {this.state.content}
          </p>
        </div>
        <div className="divider"></div>
        <div className="comments">
          <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4" className="avatar" />

          <div className="comment-content">
            <p>
              <strong>Diego fernandes </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin in dui non velit consectetur laoreet ut ac libero.
              Pellentesque in consectetur velit. Suspendisse
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
