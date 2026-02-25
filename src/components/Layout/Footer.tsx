import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/techfit-active-logo.png';
import './Footer.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    const links = [
        { name: 'About', path: '/about' },
        { name: 'Why Techfit', path: '/why-techfit' },
        { name: 'Services', path: '/services' },
        { name: 'Technology', path: '/technology' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="footer">
            <div className="footer__glow" aria-hidden="true" />
            <div className="container">
                <div className="footer__inner">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="nav-logo footer__logo">
                            <img src={logo} alt="Techfit Active" className="nav-logo__img" />
                        </Link>
                        <p className="footer__desc">
                            Next-generation fitness & clubhouse management. We manage spaces like long-term assets.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className="footer__social" aria-label="Youtube"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Navigate</h4>
                        <ul className="footer__links">
                            {links.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="footer__link">
                                        {l.name} <ArrowUpRight size={12} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact</h4>
                        <ul className="footer__contact-list">
                            <li>
                                <Phone size={15} className="footer__icon" />
                                <a href="tel:+919326447321">+91-9326447321</a>
                            </li>
                            <li>
                                <Mail size={15} className="footer__icon" />
                                <a href="mailto:info@techfitactive.com">info@techfitactive.com</a>
                            </li>
                            <li>
                                <MapPin size={15} className="footer__icon" />
                                <span>Coal Bunder Rd, Darukhana,<br />Mumbai 400010</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">&copy; {year} Techfit Active. All Rights Reserved.</p>
                    <a href="#top" className="footer__back-top">Back to Top ↑</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
