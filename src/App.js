import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
//import ForumModal from './features/forum/ForumModal';
import Learn from './pages/Learn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/forum' element={<ForumPage />} />
          
      </Routes>
    </div>

)}

export default App;
