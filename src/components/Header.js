import React from 'react';
import './Header.css';
import githubLogo from './image/github-logo.png'; // Import your GitHub logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Family Wellness</h1>
        <h2>MASSAGE THERAPY</h2>
      </div>
      <nav className="nav">
        <ul>
        <li><a href="https://github.com/MaverickCod/d3-hw_FamilyWellness" target="_blank"><img src={githubLogo} alt="GitHub Logo" /></a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
