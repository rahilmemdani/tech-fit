import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Shield, TrendingUp, Zap, Target, Award, Users } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './Home.css';

/* ── Animated Counter Hook ── */
function useCounter(end: number, duration = 2000) {
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { start = end; clearInterval(timer); }
            if (ref.current) ref.current.textContent = Math.floor(start) + '+';
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration]);
    return ref;
}

const stats = [
    { value: 50, suffix: '+', label: 'Facilities Managed' },
    { value: 98, suffix: '%', label: 'Client Retention' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Trained Staff' },
];

const services = [
    { icon: <Shield size={28} strokeWidth={1.5} />, title: 'Facility Management', desc: 'End-to-end operational control. SOPs, compliance, audits — all managed for you.' },
    { icon: <Users size={28} strokeWidth={1.5} />, title: 'Staffing Solutions', desc: 'Trained, certified staff deployed on-site with zero-downtime backup systems.' },
    { icon: <Zap size={28} strokeWidth={1.5} />, title: 'Preventive Maintenance', desc: 'Structured cycles that extend equipment lifespan and eliminate reactive breakdowns.' },
    { icon: <TrendingUp size={28} strokeWidth={1.5} />, title: 'Performance Analytics', desc: 'Monthly MIS, audit scores, usage analytics and real-time reporting dashboards.' },
    { icon: <Target size={28} strokeWidth={1.5} />, title: 'Member Experience', desc: 'Programming, onboarding and service touchpoints that members actually love.' },
    { icon: <Award size={28} strokeWidth={1.5} />, title: 'Advisory & Consulting', desc: 'Strategic consulting for new facility launches, expansions and brand repositioning.' },
];

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
    const stat50 = useCounter(50);
    const stat98 = useCounter(98);
    const stat10 = useCounter(10);
    const stat500 = useCounter(500);
    const statRefs = [stat50, stat98, stat10, stat500];

    return (
        <div className="home-page">

            {/* ══════════════════════════════
          HERO — KINETIC FULL FRAME
      ══════════════════════════════ */}
            <section className="hero" id="top">
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
                            Professional Fitness Management
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <h1 className="hero__headline">
                            <span className="hero__headline-line1">MANAGING</span>
                            <span className="hero__headline-accent">FITNESS.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h2 className="hero__subheadline">MAXIMIZING EXPERIENCE.</h2>
                    </Reveal>

                    <Reveal delay={0.28}>
                        <p className="hero__body">
                            We run fitness spaces like long-term assets — not just amenities.<br className="desktop-only" />
                            Preventive. Transparent. World-class.
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

                    {/* Stats Strip */}
                    <Reveal delay={0.46}>
                        <div className="hero__stats">
                            {stats.map((s, i) => (
                                <div className="hero__stat" key={i}>
                                    <div className="hero__stat-value">
                                        <span ref={statRefs[i]}>0+</span>
                                        {s.suffix === '%' && <span className="hero__stat-suffix">%</span>}
                                    </div>
                                    <div className="hero__stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <a href="#services" className="hero__scroll-hint" aria-label="Scroll down">
                    <span className="hero__scroll-label">SCROLL</span>
                    <ChevronDown size={18} className="hero__scroll-arrow" />
                </a>
            </section>

            {/* ══════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════ */}
            <div className="marquee-strip" aria-hidden="true">
                <div className="marquee-track">
                    {['FACILITY MANAGEMENT', 'PREVENTIVE MAINTENANCE', 'TRAINED STAFF', 'AUDIT-LED OPERATIONS', 'MEMBER EXPERIENCE', 'ZERO DOWNTIME', 'PERFORMANCE REPORTING', 'TRANSPARENT PRICING'].map((t, i) => (
                        <span key={i} className="marquee-item">
                            <DumbbellSVG className="marquee-icon" />
                            {t}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {['FACILITY MANAGEMENT', 'PREVENTIVE MAINTENANCE', 'TRAINED STAFF', 'AUDIT-LED OPERATIONS', 'MEMBER EXPERIENCE', 'ZERO DOWNTIME', 'PERFORMANCE REPORTING', 'TRANSPARENT PRICING'].map((t, i) => (
                        <span key={'b' + i} className="marquee-item" aria-hidden="true">
                            <DumbbellSVG className="marquee-icon" />
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════
          SERVICES GRID
      ══════════════════════════════ */}
            <section className="services-section" id="services">
                <div className="services-section__bg" aria-hidden="true" />
                <div className="container">
                    <div className="services-section__header">
                        <Reveal>
                            <span className="section-label">What We Do</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="section-title">
                                Six Ways We Help<br />
                                <span className="text-gradient">Your Facility Win.</span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="services-grid">
                        {services.map((s, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="service-card">
                                    <div className="service-card__number">0{i + 1}</div>
                                    <div className="service-card__icon">{s.icon}</div>
                                    <h3 className="service-card__title">{s.title}</h3>
                                    <p className="service-card__desc">{s.desc}</p>
                                    <div className="service-card__bar" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          GYM SHOWCASE — DRAMATIC VISUAL SECTION
      ══════════════════════════════ */}
            <section className="showcase-section">
                <div className="showcase-section__content">
                    <div className="showcase-left">
                        <Reveal>
                            <span className="section-label">Our Philosophy</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="section-title showcase-title">
                                Built for<br /><span className="text-gradient">Iron.</span><br />
                                Designed for<br /><span className="text-gradient">Excellence.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="showcase-body">
                                We don't just manage gyms — we curate high-performance environments. From the moment
                                a member walks in to when they rack their last weight, every touchpoint is designed,
                                trained for, and audited.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <Link to="/why-techfit" className="btn btn-primary" id="showcase-why-btn">
                                Why Techfit <ArrowRight size={16} />
                            </Link>
                        </Reveal>
                    </div>

                    <div className="showcase-right">
                        <FadeIn delay={0.2}>
                            <div className="showcase-visual">
                                {/* Dramatic gym equipment art */}
                                <div className="showcase-visual__bg" />
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
                                    <strong>Managed Inventory</strong>
                                    <span>Equipment tracked &amp; maintained</span>
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
                <div className="container">
                    <div className="promise-header">
                        <Reveal>
                            <span className="section-label">Our Guarantee</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="section-title">The Techfit <span className="text-gradient">Standard.</span></h2>
                        </Reveal>
                    </div>
                    <div className="promise-grid">
                        {[
                            { eq: <KettlebellSVG className="promise-card__svg" />, title: 'No Revenue Sharing', body: 'Your revenue belongs to you. We charge a clear management fee and nothing else.' },
                            { eq: <BarbellSVG className="promise-card__svg promise-card__svg--barbell" />, title: 'No Hidden Commissions', body: 'Vendor relationships are conflict-free. Every recommendation is in your best interest.' },
                            { eq: <WeightPlateSVG className="promise-card__svg promise-card__svg--plate" />, title: 'Full Transparency', body: 'Monthly performance reports with audit scores, uptime stats, and member satisfaction data.' },
                        ].map((p, i) => (
                            <FadeIn key={i} delay={i * 0.15}>
                                <div className="promise-card">
                                    <div className="promise-card__visual">{p.eq}</div>
                                    <h3>{p.title}</h3>
                                    <p>{p.body}</p>
                                </div>
                            </FadeIn>
                        ))}
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
