import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">

            {/* ─── BOLD HERO ─── */}
            <section className="about-hero">
                <div className="about-hero__bg" aria-hidden="true">
                    <div className="about-hero__radial" />
                    <div className="about-hero__grid" />
                </div>

                <div className="container about-hero__content text-center">
                    <Reveal delay={0.05}>
                        <div className="about-hero__eyebrow justify-center">
                            <span className="about-hero__eyebrow-dot" />
                            Our DNA
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <h1 className="about-hero__headline">
                            <span className="about-hero__line1">TECHFIT</span>
                            <span className="about-hero__accent">ACTIVE.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.25}>
                        <p className="about-hero__desc mx-auto">
                            Techfit Active works on a preventive, SOP-driven, and audit-led model.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ─── CORE NARRATIVE ─── */}
            <section className="about-story section-padding">
                <div className="container">
                    <div className="about-story__grid">
                        <div className="about-story__text">
                            <Reveal>
                                <span className="section-label">Our Objective</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="section-title">Stable Systems. <br /><span className="text-gradient">Predictable Results.</span></h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="about-story__main-desc">
                                    Our objective goes beyond daily operations — we build stable systems that ensure peak performance and long-term sustainability.
                                </p>
                            </Reveal>

                            <div className="about-story__pillars">
                                {[
                                    { icon: <Shield size={24} />, title: "Asset Longevity", desc: "Protecting and maximizing the life of your equipment through technical precision." },
                                    { icon: <Zap size={24} />, title: "Operational Continuity", desc: "Zero downtime through structured protocols and proactive maintenance." },
                                    { icon: <Target size={24} />, title: "Stakeholder Confidence", desc: "Complete transparency and peace of mind through audit-led management." }
                                ].map((pillar, i) => (
                                    <FadeIn key={i} delay={0.3 + i * 0.1}>
                                        <div className="about-pillar">
                                            <div className="about-pillar__icon text-primary">{pillar.icon}</div>
                                            <div className="about-pillar__content">
                                                <h4>{pillar.title}</h4>
                                                <p>{pillar.desc}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        <div className="about-story__lineage">
                            <FadeIn delay={0.5}>
                                <div className="lineage-card glass-card">
                                    <h3 className="lineage-title">Technical Pedigree</h3>
                                    <p>
                                        Born out of the <strong>Techfit and Matrix ecosystem</strong>, we bring deep technical understanding of equipment lifecycle, usage patterns, and preventive maintenance.
                                    </p>
                                    <p className="mt-4">
                                        This allow us to manage facilities <strong>proactively — not reactively</strong>.
                                    </p>

                                    <div className="lineage-footer">
                                        <Link to="/contact" className="btn btn-primary w-full justify-center mt-8">
                                            Partner with Us <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;

