import React, { Component } from 'react';

import Comment from '../Comment';

import './style.css';

function Post({ data }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={data.author.avatar} className="avatar" />
        <div className="post-info">
          <p>{data.author.name}</p>
          <span>{data.date}</span>
        </div>
      </div>
      <div className="post-body">
        <p>
          {data.content}
        </p>
      </div>
      <div className="divider"></div>
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  );
}

export default Post;
