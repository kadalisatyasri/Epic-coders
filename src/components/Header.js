import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/kadalisatyasri" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;