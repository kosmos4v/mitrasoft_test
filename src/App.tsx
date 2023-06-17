import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Author from './pages/Author';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/author" element={<Author />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
