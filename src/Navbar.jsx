import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Učební rozvrh</span>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/pondeli" className="nav-link">Pondělí</Link></li>
        <li><Link to="/utery" className="nav-link">Úterý</Link></li>
        <li><Link to="/streda" className="nav-link">Středa</Link></li>
        <li><Link to="/ctvrtek" className="nav-link">Čtvrtek</Link></li>
        <li><Link to="/patek" className="nav-link">Pátek</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
