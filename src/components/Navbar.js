// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo3.png'; // Caminho para a sua logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo2">
        <img src={logo} alt="NerdNet Logo" />
      </Link>
      <div className="nav-buttons">
        <Link to="/signin" className="button">Login</Link>
        <Link to="/signup" className="button">Cadastro</Link>
      </div>
    </nav>
  );
};

export default Navbar;
