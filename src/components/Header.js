import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-inner">
        <div className="brand">
          <Link to="/">
            <img 
              className="logo" 
              src="https://i.imgur.com/K1HjBox.png" 
              alt="Southwest Industrial Logo" 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'active' : ''}
          >
            Products
          </Link>
          <Link 
            to="/services" 
            className={location.pathname === '/services' ? 'active' : ''}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/services" 
            className={location.pathname === '/services' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;