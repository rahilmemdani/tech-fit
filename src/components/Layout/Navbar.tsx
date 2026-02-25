import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/techfit-active-logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Why Techfit', path: '/why-techfit' },
    { name: 'Services', path: '/services' },
    // { name: 'Technology', path: '/technology' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background state
      setScrolled(currentScrollY > 40);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${!isVisible ? 'navbar--hidden' : ''}`}>
        <div className="container nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Techfit Active Home">
            <img src={logo} alt="Techfit Active" className="nav-logo__img" />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link--active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-nav" id="navbar-cta-btn">
              Talk to Us
            </Link>
            {/* Hamburger */}
            <button
              className="nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className={`nav-toggle__icon ${isOpen ? 'is-open' : ''}`}>
                {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer__header">
          <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Techfit Active" className="nav-logo__img" />
          </Link>
          <button className="nav-toggle" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <nav className="mobile-drawer__links">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'mobile-link--active' : ''}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              {/* <span className="mobile-link__index">0{i + 1}</span> */}
              <span className="mobile-link__name">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
            Talk to Us
          </Link>
          <p className="mobile-drawer__tagline">Premium Fitness Management</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
