import React from 'react';
import './post.css';

function Post({ title, body }) {
  return (
    <div className="post animate__animated animate__backInLeft wow">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
}

export default Post;
