
import './App.css'
import TableComponent from './components/TableComponent'
import tablesData from './tablesData';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from 'react';
import Home from './Home'
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </Router>
  )
}

export default App
