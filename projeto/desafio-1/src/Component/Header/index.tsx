import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Título do seu Site/App</h1>
      <nav>
        {/* Adicione aqui seus links de navegação */}
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
};

export default Header;