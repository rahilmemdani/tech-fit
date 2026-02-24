import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Award, Users, Search, Activity,
    ChevronRight, ChevronLeft, Target, Eye,
    Zap, Dumbbell, HeartPulse, Wrench
} from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './About.css';

/* ─── Data ─── */
const pillars = [
    { label: 'ASSET LONGEVITY', icon: <Wrench size={20} />, desc: 'Preventive maintenance. Equipment lifecycle mastery. Zero breakdowns.' },
    { label: 'OPERATIONAL CONTINUITY', icon: <Zap size={20} />, desc: 'SOP-driven. Audit-led. 24/7 facility uptime guaranteed.' },
    { label: 'STAKEHOLDER CONFIDENCE', icon: <HeartPulse size={20} />, desc: 'Transparent audits. Real-time reporting. Consistent quality.' },
];

const missionPoints = [
    {
        title: "Discipline",
        desc: "World-class discipline & systems for every fitness space.",
        icon: <Award size={28} />,
    },
    {
        title: "Talent",
        desc: "Trained, courteous & reliable staff at every touchpoint.",
        icon: <Users size={28} />,
    },
    {
        title: "Transparency",
        desc: "Data-driven operations. Real-time dashboards.",
        icon: <Search size={28} />,
    },
    {
        title: "Standards",
        desc: "Highest hygiene, safety & compliance benchmarks.",
        icon: <Shield size={28} />,
    },
    {
        title: "Community",
        desc: "Active, engaged residential & corporate communities.",
        icon: <Activity size={28} />,
    },
];

const dnaStats = [
    { value: '500+', label: 'Equipment Managed' },
    { value: '50+', label: 'Facilities' },
    { value: '10K+', label: 'Active Members' },
    { value: '99%', label: 'Uptime Rate' },
];

/* ─── Carousel Hook ─── */
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

/* ─── Component ─── */
const About: React.FC = () => {
    const carousel = useAutoCarousel(missionPoints.length, 4500);

    return (
        <div className="about-page">

            {/* ══════════ HERO ══════════ */}
            <section className="about-hero">
                <div className="about-hero__grid-overlay" aria-hidden="true" />
                <div className="about-hero__radial" aria-hidden="true" />
                <div className="about-hero__pulse-ring" aria-hidden="true" />

                <div className="container about-hero__content">
                    <Reveal>
                        <span className="about-eyebrow">
                            <Dumbbell size={14} />
                            TECHFIT ACTIVE
                        </span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="about-title">
                            PREVENTIVE.<br />
                            <span className="text-gradient">SOP-DRIVEN.</span><br />
                            AUDIT-LED.
                        </h1>
                    </Reveal>
                    <FadeIn delay={0.4}>
                        <p className="about-hero__subtitle">
                            We don't just manage gyms — we engineer excellence.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════ ABOUT US ══════════ */}
            <section className="about-story section-padding ambient-glow">
                <div className="container">
                    <div className="about-story__layout">
                        <div className="about-story__left">
                            <Reveal>
                                <span className="section-label">WHO WE ARE</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="about-story__heading">
                                    ABOUT <span className="text-outline">US</span>
                                </h2>
                            </Reveal>
                            <FadeIn delay={0.25}>
                                <p className="about-story__body">
                                    Techfit Active works on a <strong>preventive, SOP-driven, and audit-led model.</strong> Our objective goes beyond daily operations — we build stable systems that ensure asset longevity, operational continuity, and stakeholder confidence.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.35}>
                                <p className="about-story__body about-story__body--highlight">
                                    Born out of the <strong>Techfit and Matrix ecosystem</strong>, we bring deep technical understanding of equipment lifecycle, usage patterns, and preventive maintenance, allowing us to manage facilities <em>proactively — not reactively.</em>
                                </p>
                            </FadeIn>
                        </div>

                        {/* Pillar Cards */}
                        <div className="about-pillars">
                            {pillars.map((p, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.12}>
                                    <div className="pillar-card glass-card">
                                        <div className="pillar-card__icon">{p.icon}</div>
                                        <div className="pillar-card__text">
                                            <h4>{p.label}</h4>
                                            <p>{p.desc}</p>
                                        </div>
                                        <div className="pillar-card__index">0{i + 1}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ VISION & MISSION SPLIT ══════════ */}
            <section className="vm-section section-padding">
                <div className="container">
                    <div className="vm-grid">

                        {/* Vision Card */}
                        <FadeIn delay={0.1}>
                            <div className="vm-card vm-card--vision">
                                <div className="vm-card__glow" aria-hidden="true" />
                                <div className="vm-card__icon-wrap">
                                    <Eye size={32} />
                                </div>
                                <span className="vm-card__label">OUR VISION</span>
                                <h3 className="vm-card__title">
                                    Redefining Fitness &amp; Recreation
                                </h3>
                                <p className="vm-card__body">
                                    To redefine fitness and recreation experiences through professional management, consistency, and innovation, and become <strong>India's most trusted fitness and clubhouse management partner.</strong>
                                </p>
                                <div className="vm-card__bar" />
                            </div>
                        </FadeIn>

                        {/* Mission Card */}
                        <FadeIn delay={0.25}>
                            <div className="vm-card vm-card--mission">
                                <div className="vm-card__glow" aria-hidden="true" />
                                <div className="vm-card__icon-wrap">
                                    <Target size={32} />
                                </div>
                                <span className="vm-card__label">OUR MISSION</span>
                                <h3 className="vm-card__title">
                                    Discipline · Talent · Transparency
                                </h3>
                                <p className="vm-card__body">
                                    World-class discipline & systems. Trained, reliable staff. Transparent, data-driven operations. Highest safety & compliance standards. <strong>Building engaged residential & corporate communities.</strong>
                                </p>
                                <div className="vm-card__bar" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════ DNA / STATS ══════════ */}
            <section className="dna-section section-padding">
                <div className="container">
                    <Reveal>
                        <span className="section-label">OUR STRENGTH</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="section-title">
                            THE TECHFIT <span className="text-gradient">DNA</span>
                        </h2>
                    </Reveal>
                    <FadeIn delay={0.2}>
                        <p className="dna-desc">
                            Born from the Techfit and Matrix ecosystem. Deep technical understanding of equipment lifecycle and usage patterns. We operate <strong>proactively — not reactively.</strong>
                        </p>
                    </FadeIn>

                    <div className="dna-stats-row">
                        {dnaStats.map((s, i) => (
                            <FadeIn key={i} delay={0.15 + i * 0.1}>
                                <div className="dna-stat-card">
                                    <span className="dna-stat__value">{s.value}</span>
                                    <span className="dna-stat__label">{s.label}</span>
                                    <div className="dna-stat__bar" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ MISSION CAROUSEL ══════════ */}
            <section className="mission-carousel-section section-padding ambient-glow">
                <div className="container">
                    <Reveal>
                        <span className="section-label">WHAT DRIVES US</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="section-title">OUR <span className="text-gradient">VALUES</span></h2>
                    </Reveal>

                    {/* Carousel */}
                    <div className="mc-carousel">
                        <div className="mc-carousel__stage">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={carousel.active}
                                    className="mc-slide"
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -60 }}
                                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <div className="mc-slide__icon">
                                        {missionPoints[carousel.active].icon}
                                    </div>
                                    <div className="mc-slide__content">
                                        <span className="mc-slide__number">0{carousel.active + 1}</span>
                                        <h3>{missionPoints[carousel.active].title}</h3>
                                        <p>{missionPoints[carousel.active].desc}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="mc-controls">
                            <button className="mc-btn" onClick={carousel.prev} aria-label="Previous">
                                <ChevronLeft size={20} />
                            </button>
                            <div className="mc-dots">
                                {missionPoints.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`mc-dot ${carousel.active === i ? 'mc-dot--active' : ''}`}
                                        onClick={() => carousel.setActive(i)}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button className="mc-btn" onClick={carousel.next} aria-label="Next">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Mini Cards Grid */}
                    <div className="mission-mini-grid">
                        {missionPoints.map((point, i) => (
                            <FadeIn key={i} delay={0.1 * i}>
                                <div
                                    className={`mission-mini-card ${carousel.active === i ? 'mission-mini-card--active' : ''}`}
                                    onClick={() => carousel.setActive(i)}
                                >
                                    <div className="mission-mini-card__icon">{point.icon}</div>
                                    <h4>{point.title}</h4>
                                    <div className="mission-mini-card__line" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CTA BAND ══════════ */}
            {/* <section className="about-cta">
                <div className="container about-cta__inner">
                    <Reveal>
                        <h2>Ready to <span className="text-gradient">Transform</span> Your Facility?</h2>
                    </Reveal>
                    <FadeIn delay={0.2}>
                        <p>Partner with India's most proactive fitness management team.</p>
                    </FadeIn>
                </div>
            </section> */}
        </div>
    );
};

export default About;
