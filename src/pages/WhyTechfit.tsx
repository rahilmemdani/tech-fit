import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ClipboardCheck, UsersRound, Wrench,
    BarChart3, Shield, ChevronLeft, ChevronRight,
    Activity, CalendarCheck, UserCheck, Settings, LayoutDashboard, Zap
} from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './WhyTechfit.css';

/* ─── WHY TECHFIT PILLARS ─── */
const whyPillars = [
    { icon: <ClipboardCheck size={24} />, title: 'SOP-Led Operations', desc: 'Operations & audits driven by structured SOPs.' },
    { icon: <UsersRound size={24} />, title: 'Team Staffing', desc: 'Team-based staffing with trained backups.' },
    { icon: <Wrench size={24} />, title: 'Preventive Maintenance', desc: 'Preventive maintenance & real-time issue tracking.' },
    { icon: <BarChart3 size={24} />, title: 'Transparent Reporting', desc: 'Transparent reporting & periodic reviews.' },
    { icon: <Shield size={24} />, title: 'Asset-First Management', desc: 'Asset-first, audit-driven management model.' },
];

/* ─── CONTRAST STRIPS ─── */
const contrasts = [
    { wrong: 'Self-managed', right: 'Professionally run' },
    { wrong: 'Reactive', right: 'Preventive' },
    { wrong: 'Opaque', right: 'Transparent' },
];

/* ─── MIS FEATURES ─── */
const misFeatures = [
    { icon: <Activity size={22} />, label: 'Attendance & Usage Tracking' },
    { icon: <UserCheck size={22} />, label: 'Staff Performance & Task Completion' },
    { icon: <Settings size={22} />, label: 'Maintenance & AMC Logs' },
    { icon: <CalendarCheck size={22} />, label: 'Monthly Audits & Dashboards' },
];

/* ─── MIS CAROUSEL SLIDES ─── */
const misSlides = [
    {
        title: 'Real-Time Dashboards',
        desc: 'Live facility metrics at your fingertips — attendance, equipment status, staff deployment.',
        icon: <LayoutDashboard size={28} />,
    },
    {
        title: 'Automated Audit Trails',
        desc: 'Every task logged, every SOP verified, every deviation flagged automatically.',
        icon: <ClipboardCheck size={28} />,
    },
    {
        title: 'Predictive Maintenance',
        desc: 'AI-powered alerts before equipment fails. Zero downtime. Maximum asset life.',
        icon: <Zap size={28} />,
    },
    {
        title: 'Performance Reports',
        desc: 'Monthly reports with actionable insights for RWAs, developers, and decision-makers.',
        icon: <BarChart3 size={28} />,
    },
];

/* ─── Auto Carousel Hook ─── */
const useAutoCarousel = (length: number, interval = 4000) => {
    const [active, setActive] = useState(0);
    const next = useCallback(() => setActive(p => (p + 1) % length), [length]);
    const prev = useCallback(() => setActive(p => (p - 1 + length) % length), [length]);

    useEffect(() => {
        const id = setInterval(next, interval);
        return () => clearInterval(id);
    }, [next, interval]);

    return { active, setActive, next, prev };
};

/* ─── COMPONENT ─── */
const WhyTechfit: React.FC = () => {
    const misCarousel = useAutoCarousel(misSlides.length, 4000);

    return (
        <div className="why-page">

            {/* ══════════ HERO ══════════ */}
            <section className="why-hero">
                <div className="why-hero__grid" aria-hidden="true" />
                <div className="why-hero__radial" aria-hidden="true" />
                <div className="container why-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">The Difference</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="why-hero__title">
                            WHY <span className="text-gradient">TECHFIT</span> ACTIVE
                        </h1>
                    </Reveal>
                    <FadeIn delay={0.3}>
                        <p className="why-hero__subtitle">
                            Because great facilities deserve <strong>professional management.</strong>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════ PILLARS GRID ══════════ */}
            <section className="why-pillars section-padding ambient-glow">
                <div className="container">
                    <Reveal>
                        <span className="section-label">What Sets Us Apart</span>
                    </Reveal>
                    <div className="why-pillars__grid">
                        {whyPillars.map((p, i) => (
                            <FadeIn key={i} delay={0.08 * i}>
                                <div className="wp-card glass-card">
                                    <div className="wp-card__num">0{i + 1}</div>
                                    <div className="wp-card__icon">{p.icon}</div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                    <div className="wp-card__bar" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CONTRAST STRIPS ══════════ */}
            <section className="why-contrast section-padding">
                <div className="container">
                    <div className="contrast-strips">
                        {contrasts.map((c, i) => (
                            <FadeIn key={i} delay={0.1 * i}>
                                <div className="contrast-row">
                                    <span className="contrast-wrong">
                                        Not {c.wrong}.
                                    </span>
                                    <span className="contrast-arrow">→</span>
                                    <span className="contrast-right">
                                        {c.right}.
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TECH-ENABLED / MIS SECTION ══════════ */}
            <section className="mis-section section-padding ambient-glow">
                <div className="container">
                    <div className="mis-layout">

                        {/* Left — Intro */}
                        <div className="mis-intro">
                            <Reveal>
                                <span className="section-label">Tech-Enabled Operations</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="mis-intro__title">
                                    TECHFIT <span className="text-gradient">MIS</span>
                                </h2>
                            </Reveal>
                            <FadeIn delay={0.2}>
                                <p className="mis-intro__lead">
                                    You don't just get staff on-site. You get <strong>control and peace of mind.</strong>
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <p className="mis-intro__body">
                                    This is not reporting. This is <em>operational control.</em> Techfit MIS is our centralized management and reporting system that ensures structure, visibility, and accountability across facilities.
                                </p>
                            </FadeIn>

                            {/* MIS Feature Tags */}
                            <div className="mis-tags">
                                {misFeatures.map((f, i) => (
                                    <FadeIn key={i} delay={0.3 + i * 0.08}>
                                        <div className="mis-tag">
                                            <span className="mis-tag__icon">{f.icon}</span>
                                            <span>{f.label}</span>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            <FadeIn delay={0.6}>
                                <p className="mis-intro__footer">
                                    Designed for <strong>RWAs, developers, and decision-makers</strong> — not just operators.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Right — Carousel */}
                        <div className="mis-carousel-wrap">
                            <FadeIn delay={0.2}>
                                <div className="mis-carousel">
                                    <div className="mis-carousel__stage">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={misCarousel.active}
                                                className="mis-slide"
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -30 }}
                                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                <div className="mis-slide__icon">
                                                    {misSlides[misCarousel.active].icon}
                                                </div>
                                                <h3>{misSlides[misCarousel.active].title}</h3>
                                                <p>{misSlides[misCarousel.active].desc}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <div className="mis-carousel__nav">
                                        <button className="mc-btn" onClick={misCarousel.prev} aria-label="Previous">
                                            <ChevronLeft size={18} />
                                        </button>
                                        <div className="mc-dots">
                                            {misSlides.map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`mc-dot ${misCarousel.active === i ? 'mc-dot--active' : ''}`}
                                                    onClick={() => misCarousel.setActive(i)}
                                                    aria-label={`Slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <button className="mc-btn" onClick={misCarousel.next} aria-label="Next">
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Bottom mini cards */}
                            <div className="mis-mini-row">
                                {misSlides.map((s, i) => (
                                    <FadeIn key={i} delay={0.1 * i}>
                                        <div
                                            className={`mis-mini ${misCarousel.active === i ? 'mis-mini--active' : ''}`}
                                            onClick={() => misCarousel.setActive(i)}
                                        >
                                            <span className="mis-mini__icon">{s.icon}</span>
                                            <span className="mis-mini__label">{s.title}</span>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="why-cta section-padding">
                <div className="why-cta__bg" aria-hidden="true" />
                <div className="container why-cta__inner">
                    <Reveal>
                        <h2 className="section-title">Convinced? Let's<br /><span className="text-gradient">Work Together.</span></h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p>Reach out today to discuss how Techfit Active can transform your facility.</p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Get in Touch <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

export default WhyTechfit;
