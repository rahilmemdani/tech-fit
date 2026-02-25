import React from 'react';
import logo from '../assets/techfit-active-logo.png';
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="loader__glow" aria-hidden="true" />
            <div className="loader__logo-wrapper">
                <img
                    src={logo}
                    alt="Techfit Active"
                    className="loader__logo"
                    draggable={false}
                />
            </div>
            <div className="loader__bar-track">
                <div className="loader__bar-fill" />
            </div>
        </div>
    );
};

export default Loader;
