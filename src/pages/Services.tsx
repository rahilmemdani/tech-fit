import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, Wrench, Star, ClipboardList, Activity } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './Services.css';

const services = [
    { icon: <Settings size={30} strokeWidth={1.5} />, title: 'Facility Management', desc: 'End-to-end operational management of your fitness or clubhouse facility — from daily opens to monthly audits.' },
    { icon: <Users size={30} strokeWidth={1.5} />, title: 'Staffing Solutions', desc: 'Trained, courteous, and certified staff deployed on-site, backed by backup staffing protocols for zero downtime.' },
    { icon: <Wrench size={30} strokeWidth={1.5} />, title: 'Preventive Maintenance', desc: 'Structured inspection cycles and equipment maintenance frameworks that extend asset lifespan significantly.' },
    { icon: <ClipboardList size={30} strokeWidth={1.5} />, title: 'SOP Development', desc: 'Custom standard operating procedures crafted for your specific facility type, member demographics, and brand standards.' },
    { icon: <Activity size={30} strokeWidth={1.5} />, title: 'Performance Reporting', desc: 'Monthly MIS reports, usage analytics, member satisfaction scores, and audit-driven performance dashboards.' },
    { icon: <Star size={30} strokeWidth={1.5} />, title: 'Member Experience Design', desc: 'Programming, events, onboarding journeys, and service touchpoints designed to delight members at every interaction.' },
];

const Services: React.FC = () => {
    return (
        <div className="services-page">

            <section className="page-hero section-frame">
                <div className="page-hero__bg" aria-hidden="true">
                    <div className="page-hero__radial" />
                    <div className="page-hero__grid" />
                </div>
                <div className="container page-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">What We Do</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="page-hero__title">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="page-hero__desc">
                            A complete suite of management services designed to run fitness and clubhouse facilities at peak performance — every single day.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="services-grid-section section-frame">
                <div className="container">
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="service-card glass-card">
                                    <div className="service-card__icon">{s.icon}</div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-cta section-frame">
                <div className="services-cta__bg" aria-hidden="true" />
                <div className="container services-cta__inner">
                    <Reveal>
                        <h2 className="section-title">Custom <span className="text-gradient">Engagement</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p>Every facility is unique. Let's design a service package that's tailored precisely to your needs and budget.</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Request a Proposal <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

export default Services;
