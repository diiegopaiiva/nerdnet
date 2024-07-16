// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import logo from '../img/logo.png'; // Certifique-se de ter a imagem da logo no caminho correto

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="NerdNet Logo" />
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p className="signup-prompt">
        Não tem uma conta? <a href="/signup">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Home;
