import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './pages/Main';
import Author from './pages/Author';
import User from './pages/User';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/author" element={<Author />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
