import React, { useState, useEffect } from 'react';
import './Navbar.css';
import linkedinIcon from './SVG/linkedin-icon.svg';
import githubIcon from './SVG/github-icon.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container d-flex justify-content-end w-100">
        <div className="icons pe-5 py-1">
          <a href="https://www.linkedin.com/in/eduardovf-code/" target="_blank" rel="noopener noreferrer">
            <img className='icon px-2' src={linkedinIcon} alt="LinkedIn" fill="red"/>
          </a>
          <a href="https://github.com/Plaloq/" target="_blank" rel="noopener noreferrer">
            <img className='icon px-2' src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
