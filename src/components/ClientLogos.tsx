import React from 'react';
import antarikshLogo from '../assets/Logos/Antariksh.jpg';
import geeceeLogo from '../assets/Logos/Geecee.jpeg';
import srahejaLogo from '../assets/Logos/S-raheja.png';

interface LogoProps {
    className?: string;
}

export const AntarikshLogo: React.FC<LogoProps> = ({ className }) => (
    <img src={antarikshLogo} alt="Antariksh" className={className} style={{ objectFit: 'contain' }} />
);

export const GeeceeLogo: React.FC<LogoProps> = ({ className }) => (
    <img src={geeceeLogo} alt="Geecee" className={className} style={{ objectFit: 'contain' }} />
);

export const SrahejaLogo: React.FC<LogoProps> = ({ className }) => (
    <img src={srahejaLogo} alt="S. Raheja" className={className} style={{ objectFit: 'contain' }} />
);

