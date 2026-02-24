import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Dumbbell, Building2, HeartPulse,
    ChevronLeft, ChevronRight, Lightbulb, CheckCircle2,
    LayoutDashboard, Users, Wrench,
    BarChart3, MessageSquare
} from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './Services.css';

/* ─── 3 CORE SERVICES ─── */
const coreServices = [
    {
        icon: <Dumbbell size={28} />,
        title: 'Gym Management',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80',
        bullets: [
            'Daily supervision & operational control',
            'Certified trainers, floor staff & front desk',
            'Preventive maintenance & safety inspections',
            'Member onboarding & retention programs',
            'Monthly performance & compliance reporting',
        ],
    },
    {
        icon: <Building2 size={28} />,
        title: 'Clubhouse & Sports Facility Management',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80',
        bullets: [
            'Pool & indoor/outdoor sports operations',
            'Housekeeping, hygiene & safety management',
            'Front desk & access control',
            'Event curation & community engagement',
            'Vendor coordination & AMC management',
        ],
    },
    {
        icon: <HeartPulse size={28} />,
        title: 'Wellness & Community Programming',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80',
        bullets: [
            'Group classes (Yoga, Zumba, HIIT, Functional Training)',
            'Personal training programs & challenges',
            'Nutrition talks & lifestyle workshops',
            'Seasonal engagement campaigns',
        ],
    },
];

/* ─── CONSULTING POINTS ─── */
const consultPoints = [
    'Gym layout & space planning',
    'Equipment selection & specification guidance',
    'Capex optimization & lifecycle planning',
    'Safety, compliance & operational readiness',
    'Staffing & SOP planning before handover',
];

const consultBenefits = [
    'No redesigns after launch',
    'No wasted capex',
    'Smooth transition from construction to operations',
    'Higher usage from Day 1',
];

/* ─── END-TO-END MANAGEMENT ─── */
const e2ePoints = [
    { icon: <Users size={20} />, label: 'Staffing, scheduling & supervision' },
    { icon: <Wrench size={20} />, label: 'Equipment care & facility maintenance' },
    { icon: <HeartPulse size={20} />, label: 'Member engagement & service delivery' },
    { icon: <BarChart3 size={20} />, label: 'Real-time tracking & MIS' },
    { icon: <LayoutDashboard size={20} />, label: 'Monthly dashboards & reviews' },
    { icon: <MessageSquare size={20} />, label: 'Feedback integration & continuous improvement' },
];

/* ─── Carousel Hook ─── */
const useCarousel = (length: number) => {
    const [active, setActive] = useState(0);
    const next = useCallback(() => setActive(p => (p + 1) % length), [length]);
    const prev = useCallback(() => setActive(p => (p - 1 + length) % length), [length]);

    return { active, setActive, next, prev };
};

/* ─── COMPONENT ─── */
const Services: React.FC = () => {
    const [activeService, setActiveService] = useState(0);
    const consultCarousel = useCarousel(consultPoints.length);

    return (
        <div className="services-page">

            {/* ══════════ HERO ══════════ */}
            <section className="svc-hero">
                <div className="svc-hero__img" aria-hidden="true">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80"
                        alt=""
                        loading="eager"
                    />
                </div>
                <div className="svc-hero__overlay" aria-hidden="true" />
                <div className="svc-hero__grid" aria-hidden="true" />
                <div className="container svc-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">What We Do</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="svc-hero__title">
                            OUR <span className="text-gradient">SERVICES</span>
                        </h1>
                    </Reveal>
                    <FadeIn delay={0.3}>
                        <p className="svc-hero__subtitle">
                            End-to-end management of fitness, wellness, and recreation spaces.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════ CORE SERVICES — TAB LAYOUT ══════════ */}
            <section className="svc-core section-padding ambient-glow">
                <div className="container">
                    <Reveal>
                        <span className="section-label">Core Offerings</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="svc-section-heading">
                            WHAT WE <span className="text-gradient">MANAGE</span>
                        </h2>
                    </Reveal>

                    {/* Tab Buttons */}
                    <div className="svc-tabs">
                        {coreServices.map((s, i) => (
                            <button
                                key={i}
                                className={`svc-tab ${activeService === i ? 'svc-tab--active' : ''}`}
                                onClick={() => setActiveService(i)}
                            >
                                <span className="svc-tab__icon">{s.icon}</span>
                                <span>{s.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active Service Detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            className="svc-detail"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className="svc-detail__image">
                                <img
                                    src={coreServices[activeService].image}
                                    alt={coreServices[activeService].title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="svc-detail__info">
                                <h3>{coreServices[activeService].title}</h3>
                                <ul className="svc-detail__bullets">
                                    {coreServices[activeService].bullets.map((b, j) => (
                                        <li key={j}>
                                            <CheckCircle2 size={16} className="svc-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {activeService === 2 && (
                        <FadeIn delay={0.2}>
                            <p className="svc-note">
                                All programs are structured to increase participation and long-term asset value.
                            </p>
                        </FadeIn>
                    )}
                </div>
            </section>

            {/* ══════════ PRE-OPENING CONSULTING ══════════ */}
            <section className="svc-consult section-padding">
                <div className="container">
                    <div className="svc-consult__layout">

                        {/* Left — Text */}
                        <div className="svc-consult__intro">
                            <Reveal>
                                <span className="svc-consult__badge">NEW — KEY DIFFERENTIATOR</span>
                            </Reveal>
                            <div>
                                <h2 className="svc-section-heading">
                                    PRE-OPENING<br />
                                    <span className="text-gradient">CONSULTING</span> & ADVISORY
                                </h2>
                            </div>
                            <div>
                                <p className="svc-consult__lead">
                                    We don't just manage gyms. We help build them right — from day one.
                                </p>
                            </div>
                            <div>
                                <p className="svc-consult__body">
                                    Techfit Active acts as a fitness & clubhouse consultant for developers and new projects, ensuring facilities are planned for real-world usage, efficiency, and longevity before they open.
                                </p>
                            </div>
                        </div>

                        {/* Right — Carousel + Benefits */}
                        <div className="svc-consult__right">
                            <FadeIn delay={0.2}>
                                <h4 className="svc-consult__sub">Our consulting support includes:</h4>
                            </FadeIn>
                            <div className="svc-consult__carousel">
                                <button className="svc-consult__btn" onClick={consultCarousel.prev} aria-label="Previous">
                                    <ChevronLeft size={18} />
                                </button>
                                <div className="svc-consult__stage">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={consultCarousel.active}
                                            className="svc-consult__slide glass-card"
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Lightbulb size={22} className="svc-consult__slide-icon" />
                                            <span>{consultPoints[consultCarousel.active]}</span>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <button className="svc-consult__btn" onClick={consultCarousel.next} aria-label="Next">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                            <div className="svc-consult__dots">
                                {consultPoints.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`mc-dot ${consultCarousel.active === i ? 'mc-dot--active' : ''}`}
                                        onClick={() => consultCarousel.setActive(i)}
                                        aria-label={`Point ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <FadeIn delay={0.35}>
                                <div className="svc-consult__benefits">
                                    <h4>This ensures:</h4>
                                    <div className="svc-consult__benefits-grid">
                                        {consultBenefits.map((b, i) => (
                                            <div key={i} className="svc-benefit-chip">
                                                <CheckCircle2 size={14} />
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ TRUE END-TO-END MANAGEMENT ══════════ */}
            <section className="svc-e2e section-padding ambient-glow">
                <div className="container">
                    <div className="svc-e2e__layout">
                        <div className="svc-e2e__left">
                            <Reveal>
                                <span className="section-label">Full Spectrum</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="svc-section-heading">
                                    TRUE <span className="text-gradient">END-TO-END</span><br />MANAGEMENT
                                </h2>
                            </Reveal>
                            <FadeIn delay={0.2}>
                                <p className="svc-e2e__lead">
                                    Single-point ownership across people, processes, and performance.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="svc-e2e__grid">
                            {e2ePoints.map((p, i) => (
                                <FadeIn key={i} delay={0.15 + i * 0.06}>
                                    <div className="svc-e2e-card glass-card">
                                        <div className="svc-e2e-card__icon">{p.icon}</div>
                                        <span>{p.label}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA BAND ══════════ */}
            <section className="svc-cta section-padding">
                <div className="svc-cta__bg" aria-hidden="true" />
                <div className="container svc-cta__inner">
                    <div>
                        <h2 className="section-title">Custom <span className="text-gradient">Engagement</span></h2>
                    </div>
                    <div>
                        <p>Every facility is unique. Let's design a service package that's tailored precisely to your needs.</p>
                    </div>
                    <div>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Request a Proposal <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
