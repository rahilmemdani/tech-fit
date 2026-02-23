import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, FadeIn } from '../components/Reveal.tsx';
import './WhyTechfit.css';

const reasons = [
    { num: '01', title: 'Preventive-First Philosophy', desc: 'We fix problems before they happen. Structured inspection cycles and predictive maintenance eliminate reactive fire-fighting.' },
    { num: '02', title: 'Zero Vendor Bias', desc: 'Our recommendations are based purely on what serves your facility best — no commissions, no kickbacks, ever.' },
    { num: '03', title: 'Trained & Certified Staff', desc: 'Every staff member undergoes a rigorous training programme covering technical, soft skills, and safety protocols.' },
    { num: '04', title: 'Technology-Enabled Oversight', desc: 'Digital SOPs, audit dashboards, and real-time reporting give you 24/7 visibility into your facility\'s performance.' },
    { num: '05', title: 'Full Transparency', desc: 'No hidden costs, no revenue sharing. You see exactly where every rupee goes with monthly performance reports.' },
    { num: '06', title: 'Scalable Engagement', desc: 'Whether you manage 1 facility or 50, our model scales with you — fixed fee, hybrid or staffing-only.' },
];

const WhyTechfit: React.FC = () => {
    return (
        <div className="why-page">

            <section className="page-hero section-frame">
                <div className="page-hero__bg" aria-hidden="true">
                    <div className="page-hero__radial" />
                    <div className="page-hero__grid" />
                </div>
                <div className="container page-hero__content">
                    <Reveal delay={0.05}>
                        <span className="section-label">The Difference</span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="page-hero__title">
                            Why Choose<br /><span className="text-gradient">Techfit?</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="page-hero__desc">
                            We don't just manage gyms. We build high-performance operational systems that protect your investment and elevate every member interaction.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="why-reasons section-frame">
                <div className="container">
                    <div className="why-grid">
                        {reasons.map((r, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="why-card glass-card">
                                    <div className="why-card__num">{r.num}</div>
                                    <div className="why-card__icon"><CheckCircle2 size={22} /></div>
                                    <h3>{r.title}</h3>
                                    <p>{r.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="why-cta section-frame">
                <div className="why-cta__bg" aria-hidden="true" />
                <div className="container why-cta__inner">
                    <Reveal>
                        <h2 className="section-title">Convinced? Let's<br /><span className="text-gradient">Work Together.</span></h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p>Reach out today to discuss how Techfit Active can transform your facility.</p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Get in Touch <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

export default WhyTechfit;
