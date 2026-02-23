import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './About.css';

const pillars = [
    { icon: <TrendingUp size={22} />, title: 'Asset Longevity', desc: 'Maximizing the life and value of your fitness equipment and facilities through expert preventive maintenance.' },
    { icon: <ShieldCheck size={22} />, title: 'Operational Continuity', desc: 'Zero downtime through structured SOPs, backup staffing, and real-time monitoring protocols.' },
    { icon: <Users size={22} />, title: 'Member Experience', desc: 'Delivering world-class service through rigorously trained and courteous staff who represent your brand.' },
    { icon: <BarChart2 size={22} />, title: 'Stakeholder Confidence', desc: 'Transparent reporting and audit-driven management that gives management teams complete peace of mind.' },
];

const About: React.FC = () => {
    return (
        <div className="about-page">

            {/* ─── HEADER ─── */}
            <section className="page-hero section-frame">
                <div className="page-hero__bg" aria-hidden="true">
                    <div className="page-hero__radial" />
                    <div className="page-hero__grid" />
                </div>
                <div className="container page-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">Who We Are</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="page-hero__title">
                            About <span className="text-gradient">Techfit</span><br />
                            <span className="page-hero__title--dim">Active.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="page-hero__desc">
                            Born from the Techfit and Matrix ecosystem, we bring deep technical understanding of equipment lifecycle,
                            usage patterns, and preventive maintenance — managing facilities proactively, not reactively.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ─── OUR MODEL ─── */}
            <section className="about-model section-frame">
                <div className="about-model__bg" aria-hidden="true" />
                <div className="container about-model__inner">
                    <div className="about-model__text">
                        <Reveal>
                            <span className="section-label">Our Approach</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="section-title">The Techfit <span className="text-gradient">Model</span></h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p>
                                Techfit Active works on a preventive, SOP-driven, and audit-led model. Our objective goes
                                beyond daily operations — we build stable systems that ensure asset longevity, operational
                                continuity, and stakeholder confidence.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p>
                                We combine trained manpower, structured SOPs, preventive maintenance systems, and
                                technology-enabled oversight to deliver a seamlessly managed fitness environment.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <Link to="/services" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                                View Services <ArrowRight size={16} />
                            </Link>
                        </Reveal>
                    </div>
                    <div className="about-model__visual">
                        <FadeIn delay={0.3}>
                            <div className="about-model__badge glass-card">
                                <div className="about-model__badge-num">10+</div>
                                <div className="about-model__badge-label">Years of expertise in fitness management ecosystems</div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.45}>
                            <div className="about-model__badge glass-card">
                                <div className="about-model__badge-num">50+</div>
                                <div className="about-model__badge-label">Premium facilities managed across India</div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── CORE PILLARS ─── */}
            <section className="core-pillars section-frame">
                <div className="container">
                    <div className="core-pillars__header">
                        <Reveal>
                            <span className="section-label">What Drives Us</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="section-title">Our Core <span className="text-gradient">Pillars</span></h2>
                        </Reveal>
                    </div>
                    <div className="core-pillars__grid">
                        {pillars.map((p, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="core-pillar-card glass-card">
                                    <div className="core-pillar-card__num">0{i + 1}</div>
                                    <div className="core-pillar-card__icon">{p.icon}</div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
