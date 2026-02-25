import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import {
    CheckCircle2, Users,
    ArrowRight, Zap
} from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
    const mainModels = [
        {
            title: "Fixed Monthly Management",
            icon: <CheckCircle2 size={32} />,
            desc: "A clear, predictable management fee for complete operational oversight, standards enforcement, and reporting.",
            lead: "Perfect for established facilities seeking professional structure."
        },
        {
            title: "Staffing-Based Engagement",
            icon: <Users size={32} />,
            desc: "Highly flexible model focused on delivering trained manpower, on-site supervision, and operational SOPs.",
            lead: "Scalable engagement tailored to specific manpower needs."
        }
    ];

    const transparencyPoint = [
        { id: 'hybrid', title: 'Hybrid Model', desc: 'Base + performance metrics' },
        { id: 'custom', title: 'Custom Models', desc: 'For large developments' },
        { id: 'rev', title: 'No Revenue Sharing', desc: 'Clear management fee only' },
        { id: 'comm', title: 'No Commissions', desc: 'Conflict-free vendor relations' },
        { id: 'bias', title: 'No Vendor Bias', desc: 'Independent expert advice' }
    ];

    return (
        <div className="pricing-page">
            {/* ══════════ HERO SECTION ══════════ */}
            <section className="prc-hero">
                <div className="prc-hero__bg">
                    <div className="prc-hero__glow-1" />
                    <div className="prc-hero__glow-2" />
                    <div className="prc-hero__grid" />
                </div>
                <div className="container prc-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">Investment</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="prc-hero__title">
                            ENGAGEMENT & <br />
                            <span className="text-gradient">PRICING</span>
                        </h1>
                    </Reveal>
                    <FadeIn delay={0.3}>
                        <p className="prc-hero__subtitle">
                            Flexible and scalable models designed for long-term asset performance.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════ CORE MODELS ══════════ */}
            <section className="prc-models section-padding">
                <div className="container">
                    <div className="prc-models__grid">
                        {mainModels.map((m, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="prc-card glass-card">
                                    <div className="prc-card__icon">{m.icon}</div>
                                    <h3>{m.title}</h3>
                                    <p className="prc-card__lead">{m.lead}</p>
                                    <div className="prc-card__bar" />
                                    <p className="prc-card__desc">{m.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TRANSPARENCY COMMITMENT ══════════ */}
            <section className="prc-transparency section-padding">
                <div className="container">
                    <div className="prc-trans__header">
                        <div>
                            <span className="section-label">Trust & Integrity</span>
                        </div>
                        <div>
                            <h2 className="section-title">
                                TRANSPARENCY <br /><span className="text-gradient">COMMITMENT</span>
                            </h2>
                        </div>
                    </div>

                    <div className="prc-trans__grid">
                        {transparencyPoint.map((p, i) => (
                            <FadeIn key={p.id} delay={i * 0.05}>
                                <div className="prc-trans-chip glass-card">
                                    <CheckCircle2 size={16} className="prc-trans-chip__icon" />
                                    <div className="prc-trans-chip__content">
                                        <h4>{p.title}</h4>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ FINAL CTA ══════════ */}
            <section className="prc-cta section-padding">
                <div className="container">
                    <div className="prc-cta__inner glass-card">
                        <div className="prc-cta__content">
                            <Reveal>
                                <h2 className="prc-cta__title">
                                    LET’S PROTECT, OPERATE, <br />
                                    AND <span className="text-gradient">ELEVATE</span> YOUR FITNESS ASSET.
                                </h2>
                            </Reveal>
                            <FadeIn delay={0.2}>
                                <p className="prc-cta__body">
                                    Partner with Techfit Active to deliver a seamless, professional,
                                    and future-ready fitness and wellness experience.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="prc-cta__btns">
                                    <Link to="/contact" className="btn btn-primary">
                                        Talk to an Expert <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="prc-cta__visual" aria-hidden="true">
                            <div className="prc-cta__orb" />
                            <Zap size={120} className="prc-cta__icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;

