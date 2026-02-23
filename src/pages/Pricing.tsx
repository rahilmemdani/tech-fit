import React from 'react';
import { Reveal, FadeIn } from '../components/Reveal';
import { Check, ShieldCheck, RefreshCcw, Settings2 } from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
    const models = [
        {
            title: "Fixed Monthly Management",
            icon: <Check />,
            desc: "Standard management fee for complete operational control and reporting. Ideal for established facilities."
        },
        {
            title: "Staffing-based Engagement",
            icon: <Settings2 />,
            desc: "Resource-focused model providing trained manpower and on-site supervision. Flexible and scalable."
        },
        {
            title: "Hybrid Model",
            icon: <ShieldCheck />,
            desc: "Combination of base fee plus performance metrics (member satisfaction, usage growth, audit scores)."
        }
    ];

    return (
        <div className="pricing-page">
            <section className="page-header black-gradient">
                <div className="container">
                    <Reveal>
                        <span className="subtitle">Engagement & Pricing</span>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1>Flexible <span className="text-red">Models</span></h1>
                    </Reveal>
                </div>
            </section>

            <section className="pricing-models section-padding">
                <div className="container">
                    <div className="models-grid">
                        {models.map((model, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="model-card glass">
                                    <div className="model-icon text-red">{model.icon}</div>
                                    <h3>{model.title}</h3>
                                    <p>{model.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <Reveal delay={0.5}>
                        <div className="custom-model glass border-red">
                            <h3>Large Developments?</h3>
                            <p>We offer custom models tailored for massive residential townships and corporate hubs.</p>
                            <a href="/contact" className="btn btn-primary">Request Custom Proposal</a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="transparency section-padding bg-dark">
                <div className="container">
                    <div className="transparency-box">
                        <Reveal>
                            <h2 className="section-title text-center">Transparency Commitment</h2>
                        </Reveal>
                        <div className="transparency-grid">
                            {[
                                { title: "No Revenue Sharing", desc: "Our focus is on performance, not taking a cut of your growth." },
                                { title: "No Hidden Commissions", desc: "What you see is what you pay. Full financial clarity." },
                                { title: "No Vendor Bias", desc: "We recommend what's best for you, not our pockets." }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={0.2 * i}>
                                    <div className="trans-item">
                                        <div className="trans-header">
                                            <RefreshCcw size={20} className="text-red" />
                                            <h4>{item.title}</h4>
                                        </div>
                                        <p>{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
