import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/techfit-active-logo.png';
import './PageTransition.css';

const PageTransition: React.FC = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Skip the very first render (initial page load is handled by Suspense)
        if (isFirstLoad) {
            setIsFirstLoad(false);
            return;
        }

        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!isLoading) return null;

    return (
        <div className="page-transition">
            <div className="page-transition__glow" aria-hidden="true" />
            <div className="page-transition__logo-wrapper">
                <img
                    src={logo}
                    alt="Techfit Active"
                    className="page-transition__logo"
                    draggable={false}
                />
            </div>
            <div className="page-transition__bar-track">
                <div className="page-transition__bar-fill" />
            </div>
        </div>
    );
};

export default PageTransition;
