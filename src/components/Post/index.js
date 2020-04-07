import React, { Component } from 'react';

import './style.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img src="https://avatars2.githubusercontent.com/u/7559318?s=400&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4" className="avatar" />
          <div className="post-info">
            <p>Lucas Montano</p>
            <span>04 Jun 2019</span>
          </div>
        </div>
        <div className="post-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse nec tortor nisi. Ut nibh quam, feugiat vitae ipsum quis,
            elementum aliquam justo.
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
