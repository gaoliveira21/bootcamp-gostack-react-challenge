import React from 'react';

import './style.css';

function Comment({ data }) {
  return (
    <div className="comments">
      <img src={data.author.avatar} className="avatar" />

      <div className="comment-content">
        <p>
          <strong>{data.author.name} </strong>
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
