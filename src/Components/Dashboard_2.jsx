import React from 'react';
import About from './About';
import { NavLink, Routes, Route } from 'react-router-dom';

function DashboardContent() {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard_2">Dashboard</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <hr />
      Dashboard Page
    </div>
  );
}

export default function Dashboard_2() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
