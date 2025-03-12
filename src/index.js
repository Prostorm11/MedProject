import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';
import Overview from './Overview/overview';
import { Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Dashboard/>
    <Router>  {/* ✅ Wrap everything with BrowserRouter */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='overview' element={<Overview/>}></Route>
          <Route path='navigate' element={<Navigate/>}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
