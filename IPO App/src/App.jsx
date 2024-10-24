// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IPOList from './components/IPOList';
import { iposData, ipoDetails } from './assets/data.js';
import './App.css';
import IPODetails from './components/IPODetails';
import PRTCalculator from './components/PRTCalculator/PRTCalculator.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IPOList iposData={iposData} />} />
          <Route path="/ipo/:id" element={<IPODetails ipoDetails={ipoDetails} />} />
          <Route path="/prt" element={<PRTCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
