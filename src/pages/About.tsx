import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeartPulse, Wrench, Zap, Eye, Target,
    ChevronLeft, ChevronRight, Dumbbell,
    UserX, WrenchIcon, EyeOff, TrendingDown, Unlink
} from 'lucide-react';
import { FadeIn } from '../components/Reveal.tsx';
import './About.css';

/* ─── Data ─── */
const pillars = [
    { label: 'ASSET LONGEVITY', icon: <Wrench size={20} />, desc: 'Preventive maintenance. Equipment lifecycle mastery. Zero breakdowns.' },
    { label: 'OPERATIONAL CONTINUITY', icon: <Zap size={20} />, desc: 'SOP-driven. Audit-led. 24/7 facility uptime guaranteed.' },
    { label: 'STAKEHOLDER CONFIDENCE', icon: <HeartPulse size={20} />, desc: 'Transparent audits. Real-time reporting. Consistent quality.' },
];

/* ─── Problems ─── */
const problems = [
    { icon: <UserX size={20} />, text: 'Inconsistent staffing & high attrition' },
    { icon: <WrenchIcon size={20} />, text: 'Reactive maintenance instead of prevention' },
    { icon: <EyeOff size={20} />, text: 'No accountability or visibility' },
    { icon: <TrendingDown size={20} />, text: 'Declining usage & member dissatisfaction' },
    { icon: <Unlink size={20} />, text: 'Asset wear, breakdowns, and brand dilution' },
];


/* ─── Carousel Hook ─── */
const useCarousel = (length: number) => {
    const [active, setActive] = useState(0);
    const next = useCallback(() => setActive(p => (p + 1) % length), [length]);
    const prev = useCallback(() => setActive(p => (p - 1 + length) % length), [length]);

    return { active, setActive, next, prev };
};

/* ─── Component ─── */
const About: React.FC = () => {
    const problemCarousel = useCarousel(problems.length);

    return (
        <div className="about-page">

            {/* ══════════ HERO ══════════ */}
            <section className="about-hero">
                <div className="about-hero__img" aria-hidden="true">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80"
                        alt=""
                        loading="eager"
                    />
                </div>
                <div className="about-hero__overlay" aria-hidden="true" />
                <div className="about-hero__grid-overlay" aria-hidden="true" />
                <div className="about-hero__pulse-ring" aria-hidden="true" />

                <div className="container about-hero__content">
                    <div>
                        <span className="about-eyebrow">
                            <Dumbbell size={14} />
                            TECHFIT ACTIVE
                        </span>
                    </div>
                    <div >
                        <h1 className="about-title">
                            <span>PREVENTIVE.</span>
                            <span className="text-gradient">SOP-DRIVEN.</span>
                            <span>AUDIT-LED.</span>
                        </h1>
                    </div>
                    <FadeIn delay={0.4}>
                        <p className="about-hero__subtitle">
                            We don't just manage gyms <strong>we engineer excellence.</strong>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════ ABOUT US ══════════ */}
            <section className="about-story section-padding ambient-glow">
                <div className="container">
                    <div className="about-story__layout">
                        <div className="about-story__left">
                            <div>
                                <span className="section-label">WHO WE ARE</span>
                            </div>
                            <div>
                                <h2 className="about-story__heading">
                                    ABOUT <span className="text-outline">US</span>
                                </h2>
                            </div>
                            <div>
                                <p className="about-story__body">
                                    Techfit Active works on a <strong>preventive, SOP-driven, and audit-led model.</strong> Our objective goes beyond daily operations. We build stable systems that ensure asset longevity, operational continuity, and stakeholder confidence.
                                </p>
                            </div>
                            <div>
                                <p className="about-story__body about-story__body--highlight">
                                    Born out of the <strong>Techfit and Matrix ecosystem</strong>, we bring deep technical understanding of equipment lifecycle, usage patterns, and preventive maintenance, allowing us to manage facilities <em>proactively, not reactively.</em>
                                </p>
                            </div>
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


            {/* ══════════ THE PROBLEM WE SOLVE ══════════ */}
            <section className="problem-section section-padding">
                <div className="container">
                    <div className="problem-layout">

                        {/* Left — Carousel */}
                        <div className="problem-carousel-wrap">
                            <div className="problem-carousel">
                                <button className="problem-carousel__btn" onClick={problemCarousel.prev} aria-label="Previous">
                                    <ChevronLeft size={20} />
                                </button>
                                <div className="problem-carousel__stage">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={problemCarousel.active}
                                            className="problem-card glass-card"
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            <div className="problem-card__icon">{problems[problemCarousel.active].icon}</div>
                                            <p>{problems[problemCarousel.active].text}</p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <button className="problem-carousel__btn" onClick={problemCarousel.next} aria-label="Next">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                            <div className="problem-dots">
                                {problems.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`mc-dot ${problemCarousel.active === i ? 'mc-dot--active' : ''}`}
                                        onClick={() => problemCarousel.setActive(i)}
                                        aria-label={`Problem ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right — Header */}
                        <div className="problem-intro">
                            <div>
                                <span className="section-label">The Challenge</span>
                            </div>
                            <div>
                                <h2 className="problem-section__heading">
                                    THE PROBLEM <span className="text-gradient">WE SOLVE</span>
                                </h2>
                            </div>
                            <FadeIn delay={0.2}>
                                <p className="problem-section__lead">
                                    Most gyms and clubhouse fitness facilities deteriorate over time due to inconsistent staffing, reactive maintenance, and zero accountability.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.35}>
                                <p className="problem-section__resolve">
                                    Techfit Active replaces ad-hoc management with <strong>systems, visibility, and accountability.</strong>
                                </p>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════ DNA / STATS ══════════ */}
            {/* <section className="dna-section section-padding">
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
            </section> */}

            {/* ══════════ MISSION CAROUSEL ══════════ */}


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
