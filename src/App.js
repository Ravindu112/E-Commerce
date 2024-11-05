import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Searchbar from './Searchbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessHome from './BusinessHome';

function App() {
  return (
    <div>
    < HomePage/>
    </div>
  );
}

export default App;
