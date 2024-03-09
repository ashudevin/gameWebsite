import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">FIRE WATCH</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/more" className="nav-link">MORE</Link>
        </li>
        <li className="nav-item">
          <Link to="https://store.steampowered.com/app/383870/Firewatch/" className="nav-link">BUY</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
