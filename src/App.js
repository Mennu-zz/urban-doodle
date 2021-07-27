import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login'
import userLocalStore from './store/localStore'

function App() {
  const [user,] = userLocalStore({}, 'user');

  const comp = (
    user && user.name ? (
      <Home />
    ) : (
      <Login />
    )
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={comp} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
