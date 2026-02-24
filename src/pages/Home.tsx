import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Handshake, BarChart3 } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './Home.css';
import heroBg from "../assets/hero-bg.png";
import { LodhaLogo, GodrejLogo, KalpataruLogo, HiranandaniLogo, OberoiLogo } from '../components/ClientLogos.tsx';





/* ── Dumbbell SVG ── */
const DumbbellSVG = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="18" width="28" height="24" rx="5" fill="currentColor" opacity="0.9" />
        <rect x="28" y="22" width="14" height="16" rx="3" fill="currentColor" opacity="0.7" />
        <rect x="42" y="25" width="136" height="10" rx="5" fill="currentColor" opacity="0.5" />
        <rect x="178" y="22" width="14" height="16" rx="3" fill="currentColor" opacity="0.7" />
        <rect x="192" y="18" width="28" height="24" rx="5" fill="currentColor" opacity="0.9" />
    </svg>
);

/* ── Barbell SVG ── */
const BarbellSVG = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 320 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="10" width="20" height="30" rx="4" fill="currentColor" opacity="0.9" />
        <rect x="20" y="15" width="12" height="20" rx="3" fill="currentColor" opacity="0.7" />
        <rect x="32" y="18" width="256" height="14" rx="7" fill="currentColor" opacity="0.4" />
        <rect x="288" y="15" width="12" height="20" rx="3" fill="currentColor" opacity="0.7" />
        <rect x="300" y="10" width="20" height="30" rx="4" fill="currentColor" opacity="0.9" />
    </svg>
);

/* ── Kettle Bell SVG ── */
const KettlebellSVG = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M40 5 C20 5, 5 20, 5 40 C5 60, 20 75, 40 75 C60 75, 75 60, 75 40 C75 20, 60 5, 40 5Z" fill="currentColor" opacity="0.8" />
        <path d="M30 5 C30 5, 25 0, 40 0 C55 0, 50 5, 50 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.9" fill="none" />
        <circle cx="40" cy="40" r="14" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
    </svg>
);

/* ── Weight Plate SVG ── */
const WeightPlateSVG = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="currentColor" opacity="0.85" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <circle cx="40" cy="40" r="8" fill="rgba(0,0,0,0.5)" />
    </svg>
);

const Home: React.FC = () => {



    return (
        <div className="home-page">

            {/* ══════════════════════════════
          HERO — KINETIC FULL FRAME
            ══════════════════════════════ */}
            <section
                className="hero"
                id="top"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)" // adjust opacity here
                    }}
                />
                {/* Layered backgrounds */}
                <div className="hero__bg" aria-hidden="true">
                    <div className="hero__bg-radial" />
                    <div className="hero__bg-grid" />
                    <div className="hero__bg-noise" />
                    <div className="hero__bg-vignette" />
                </div>

                {/* Floating equipment decorations */}
                <div className="hero__deco" aria-hidden="true">
                    <DumbbellSVG className="hero__deco-item hero__deco-dumbbell-1" />
                    <DumbbellSVG className="hero__deco-item hero__deco-dumbbell-2" />
                    <BarbellSVG className="hero__deco-item hero__deco-barbell" />
                    <KettlebellSVG className="hero__deco-item hero__deco-kettlebell-1" />
                    <KettlebellSVG className="hero__deco-item hero__deco-kettlebell-2" />
                    <WeightPlateSVG className="hero__deco-item hero__deco-plate-1" />
                    <WeightPlateSVG className="hero__deco-item hero__deco-plate-2" />
                    <WeightPlateSVG className="hero__deco-item hero__deco-plate-3" />
                    <div className="hero__scan-line" />
                </div>

                <div className="container hero__content">
                    <Reveal delay={0.05}>
                        <div className="hero__eyebrow">
                            <span className="hero__eyebrow-dot" />
                            Professional Gym & Clubhouse Management
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <h1 className="hero__headline">
                            <span className="hero__headline-line1">MANAGING FITNESS.</span>
                            <span className="hero__headline-accent">MAXIMIZING EXPERIENCE.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h2 className="hero__subheadline">TECHFIT ACTIVE | ADVISORY & CONSULTING</h2>
                    </Reveal>

                    <Reveal delay={0.28}>
                        <p className="hero__body">
                            We manage fitness spaces like long-term assets — not amenities.<br className="desktop-only" />
                            Protecting, operating, and elevating your investment.
                        </p>
                    </Reveal>

                    <Reveal delay={0.36}>
                        <div className="hero__cta-row">
                            <Link to="/contact" className="btn btn-primary hero__cta-primary" id="hero-main-cta">
                                Partner With Us <ArrowRight size={18} />
                            </Link>
                            <Link to="/services" className="btn btn-secondary" id="hero-services-link">
                                Explore Services
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════════════════════════
          COMPANY OVERVIEW — DRAMATIC VISUAL SECTION
      ══════════════════════════════ */}
            <section className="showcase-section">
                <div className="showcase-section__content">
                    <div className="showcase-left">
                        <div>
                            <span className="section-label">Target Sectors</span>
                        </div>
                        <div>
                            <h2 className="section-title showcase-title">
                                End-to-End <br /><span className="text-gradient">Operational Mastery.</span>
                            </h2>
                        </div>
                        <div>
                            <p className="showcase-body">
                                Techfit Active is a next-generation fitness, clubhouse, and wellness management company, delivering end-to-end operational mastery.
                            </p>
                            <p className="showcase-body showcase-body--sm">
                                Delivering consistently high standards of service quality, hygiene, and safety across elite fitness environments.
                            </p>
                        </div>

                        {/* ── WEIGHT STACK SECTORS ── */}
                        <div className="weight-stack" style={{ color: "white" }}>
                            <div className="weight-stack__cable" />
                            {[
                                { id: "corp", label: "Corporate fitness facilities", weight: "250 KG" },
                                { id: "res", label: "Residential & developer clubhouses", weight: "200 KG" },
                                { id: "elite", label: "Elite clubs & hospitality projects", weight: "150 KG" }
                            ].map((s) => (
                                <div key={s.id}>
                                    <div className="weight-plate">
                                        <div className="weight-plate__hole" />
                                        <div className="weight-plate__content">
                                            <span className="weight-plate__label">{s.label}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="showcase-right">
                        <FadeIn delay={0.2}>
                            <div className="showcase-visual">
                                <div className="showcase-visual__bg" />
                                {/* RESTORED DUMBBELL RACK */}
                                <div className="showcase-rack">
                                    <div className="rack-row rack-row--1">
                                        {[70, 65, 60, 55, 50, 45].map(w => (
                                            <div key={w} className="rack-dumbbell">
                                                <div className="rack-dumbbell__head" />
                                                <div className="rack-dumbbell__bar" />
                                                <div className="rack-dumbbell__head" />
                                                <span className="rack-dumbbell__label">{w}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rack-row rack-row--2">
                                        {[40, 35, 30, 25, 20, 15].map(w => (
                                            <div key={w} className="rack-dumbbell">
                                                <div className="rack-dumbbell__head rack-dumbbell__head--sm" />
                                                <div className="rack-dumbbell__bar" />
                                                <div className="rack-dumbbell__head rack-dumbbell__head--sm" />
                                                <span className="rack-dumbbell__label">{w}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rack-shelf rack-shelf--1" />
                                    <div className="rack-shelf rack-shelf--2" />
                                    <div className="rack-shelf rack-shelf--3" />
                                    <div className="rack-floor-glow" />
                                </div>
                                <div className="showcase-visual__tag">
                                    <strong>Elite Management</strong>
                                    <span>Trained manpower &amp; SOPs</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          PROMISE SECTION 3 COLUMNS
      ══════════════════════════════ */}
            <section className="promise-section">
                <div className="container promise-container">
                    <Reveal>
                        <div className="promise-frame">
                            <div className="promise-left">
                                <div className="promise-header">
                                    <span className="section-label">Our Positioning</span>
                                    <h2 className="section-title">
                                        Asset-Performance <span className="text-gradient">Partner.</span>
                                    </h2>
                                    <div className="positioning-content">
                                        <p className="promise-desc">
                                            We focus on long-term asset health, predictable operations, and consistent member experience.
                                        </p>

                                        {/* ── CABLE MACHINE GYM PROP ── */}
                                        <div className="cable-machine-frame">
                                            <div className="cable-machine__upright" />
                                            <div className="cable-machine__pulley top" />
                                            <div className="cable-machine__cable" />
                                            <div className="cable-machine__content">
                                                <blockquote className="philosophy-quote">
                                                    "We don’t manage when something breaks.<br />
                                                    <strong>We manage so things don’t break.</strong>"
                                                </blockquote>
                                            </div>
                                            <div className="cable-machine__pulley bottom" />
                                            <div className="cable-machine__bolt t-bolt" />
                                            <div className="cable-machine__bolt b-bolt" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="promise-right">
                                <div className="promise-carousel">
                                    {[
                                        {
                                            eq: <ShieldCheck size={40} strokeWidth={1.5} />,
                                            title: "No Revenue Sharing",
                                            body: "Your revenue belongs to you. We charge a clear management fee and nothing else.",
                                        },
                                        {
                                            eq: <Handshake size={40} strokeWidth={1.5} />,
                                            title: "No Hidden Commissions",
                                            body: "Vendor relationships are conflict-free. Every recommendation is in your best interest.",
                                        },
                                        {
                                            eq: <BarChart3 size={40} strokeWidth={1.5} />,
                                            title: "Full Transparency",
                                            body: "Monthly performance reports with audit scores, uptime stats, and member satisfaction data.",
                                        },
                                    ].map((p, i) => (
                                        <FadeIn key={i} delay={i * 0.15}>
                                            <div className="promise-card">
                                                <div className="promise-card__visual">{p.eq}</div>
                                                <div className="promise-card__content">
                                                    <h3 className="promise-card__title">{p.title}</h3>
                                                    <p className="promise-card__body">{p.body}</p>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════════════════════════
          OUR CLIENTS — INFINITE MARQUEE
      ══════════════════════════════ */}
            <section className="clients-section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Trusted By</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="section-title">
                            Our <span className="text-gradient">Clients</span>
                        </h2>
                    </div>
                </div>

                <div className="clients-marquee-wrap">
                    <div className="clients-marquee">
                        <div className="clients-marquee__track">
                            {[...Array(4)].map((_, setIdx) => (
                                <div className="clients-marquee__set" key={setIdx} aria-hidden={setIdx > 0}>
                                    {[
                                        <LodhaLogo className="client-svg" />,
                                        <GodrejLogo className="client-svg" />,
                                        <KalpataruLogo className="client-svg" />,
                                        <HiranandaniLogo className="client-svg" />,
                                        <OberoiLogo className="client-svg" />,
                                    ].map((logo, i) => (
                                        <div className="client-logo-card glass-card" key={`${setIdx}-${i}`}>
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          KINETIC CTA
      ══════════════════════════════ */}
            <section className="home-cta">
                <div className="home-cta__bg" aria-hidden="true">
                    <div className="home-cta__radial" />
                    <BarbellSVG className="home-cta__deco home-cta__deco--barbell" />
                    <WeightPlateSVG className="home-cta__deco home-cta__deco--plate-l" />
                    <WeightPlateSVG className="home-cta__deco home-cta__deco--plate-r" />
                </div>
                <div className="container home-cta__inner">
                    <Reveal>
                        <span className="section-label">Let's Connect</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="home-cta__headline">
                            Ready to Build<br />
                            <span className="text-gradient">Something Great?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="home-cta__body">
                            Partner with Techfit Active and turn your fitness space into a premium, high-performance experience your members will stay for.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="home-cta__btns">
                            <Link to="/contact" className="btn btn-primary" id="home-final-cta-btn">
                                Talk to Us <ArrowRight size={18} />
                            </Link>
                            <a href="tel:+919326447321" className="btn btn-secondary" id="home-call-btn">
                                +91 9326 447 321
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

export default Home;
