import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Social from './social/Social';
import Create from './social/Create';
import SocialDetails from './social/SocialDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/social' element={<Social />} />
        <Route path='/create' element={<Create />} />
        <Route path="/posts/:id" element={<SocialDetails />} />
              
      </Routes>
    </div>

)}

export default App;
