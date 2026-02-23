import React from 'react';
import { Reveal, FadeIn } from '../components/Reveal';
import { CheckSquare, Clock, BarChart, ShieldCheck } from 'lucide-react';
import './Technology.css';

const Technology: React.FC = () => {
    return (
        <div className="technology-page">
            <section className="tech-hero">
                <div className="container">
                    <div className="tech-hero-grid">
                        <div className="tech-hero-text">
                            <Reveal>
                                <span className="subtitle">Operational Control</span>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <h1>TECH-ENABLED <br /><span className="text-red">OPERATIONS</span></h1>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <p>
                                    You don’t just get staff on-site. You get control and peace of mind.
                                    Techfit MIS is our centralized management and reporting system.
                                </p>
                            </Reveal>
                        </div>
                        <div className="dashboard-preview glass">
                            <div className="mock-ui">
                                <div className="ui-header">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <div className="ui-body">
                                    <div className="ui-sidebar"></div>
                                    <div className="ui-content">
                                        <div className="ui-stat"></div>
                                        <div className="ui-chart"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="preview-label">TECHFIT MIS DASHBOARD</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-tech section-padding bg-dark">
                <div className="container">
                    <Reveal>
                        <h2 className="section-title text-center">This is not reporting. <br /><span className="text-red">This is operational control.</span></h2>
                    </Reveal>

                    <div className="tech-features-grid">
                        {[
                            { title: "Attendance & Usage", icon: <Clock />, desc: "Real-time tracking of staff and member facility usage." },
                            { title: "Staff Performance", icon: <CheckSquare />, desc: "Task completion tracking and accountability systems." },
                            { title: "Maintenance Logs", icon: <ShieldCheck />, desc: "Preventive maintenance scheduling and AMC tracking." },
                            { title: "Audits & Dashboards", icon: <BarChart />, desc: "Monthly performance reviews and data-driven insights." }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="tech-feature-card glass">
                                    <div className="feat-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stakeholders section-padding">
                <div className="container text-center">
                    <Reveal>
                        <div className="stakeholder-box glass border-red">
                            <h2>Designed for Decision-Makers</h2>
                            <p>Our systems are built for RWAs, developers, and project leads—not just operators.</p>
                            <p className="small">Get the visibility you need to protect your investment.</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Technology;
