import React from 'react';

import Post from './components/Post';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Post />
      </div>
    </>
  );
}

export default App;
