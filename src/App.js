import React from 'react';

import PostList from './components/PostList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PostList />
      </div>
    </>
  );
}

export default App;
