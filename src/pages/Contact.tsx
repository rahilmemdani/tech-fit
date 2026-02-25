import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Reveal, FadeIn } from '../components/Reveal';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Youtube, Loader2 } from 'lucide-react';
import './Contact.css';
import { SuccessModal } from '../components/SuccessModal';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    companyName: string;
    enquiryFor: string;
    requirement: string;
}

const Contact: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://techfit-backend.vercel.app/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setShowSuccess(true);
                reset();
            } else {
                alert("❌ Failed to send enquiry.");
            }

        } catch (error) {
            console.error(error);
            alert("⚠️ Server error. Try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const enquiryOptions = [
        "Gym Management Services",
        "Clubhouse & Sports Facility Management",
        "Pre-Opening Gym Consulting & Advisory",
        "Developer / Residential Project Fitness Planning",
        "Corporate Fitness Facility Management",
        "Wellness & Community Programming",
        "Audit, SOP Setup & Operational Review",
        "Other (Please specify)"
    ];

    return (
        <div className="contact-page">
            {/* ══════════ HERO SECTION ══════════ */}
            <section className="contact-hero">
                <div className="contact-hero__bg">
                    <div className="contact-hero__glow-1" />
                    <div className="contact-hero__glow-2" />
                    <div className="contact-hero__grid" />
                </div>
                <div className="container contact-hero__content">
                    <Reveal delay={0.05} width="100%">
                        <span className="section-label">Contact Us</span>
                    </Reveal>
                    <Reveal delay={0.15} width="100%">
                        <h1 className="contact-hero__title">
                            LET'S TALK <br />
                            <span className="text-gradient">ABOUT IT</span>
                        </h1>
                    </Reveal>
                    <FadeIn delay={0.3}>
                        <p className="contact-hero__subtitle">
                            Ready to elevate your fitness asset? Partner with us today for professional, future-ready management.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="contact-main section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-list">
                            <Reveal width="100%">
                                <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
                            </Reveal>
                            <Reveal delay={0.2} width="100%">
                                <p className="contact-info-desc">We're here to answer your questions and help you transform your fitness facility into an elite destination.</p>
                            </Reveal>

                            <div className="info-cards">
                                <FadeIn delay={0.3}>
                                    <a href="tel:+919326447321" className="info-card-link">
                                        <div className="info-card glass-card">
                                            <div className="info-card__icon"><Phone size={24} /></div>
                                            <div className="info-card__content">
                                                <h4>Call Us</h4>
                                                <p>+91-9326447321</p>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <a href="mailto:info@techfitactive.com" className="info-card-link">
                                        <div className="info-card glass-card">
                                            <div className="info-card__icon"><Mail size={24} /></div>
                                            <div className="info-card__content">
                                                <h4>Email Us</h4>
                                                <p>info@techfitactive.com</p>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                                <FadeIn delay={0.5}>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Plot+No+309+Coal+Bunder+Road+E+Reay+Rd+Darukhana+Mumbai+Maharashtra+400010"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="info-card-link"
                                    >
                                        <div className="info-card glass-card">
                                            <div className="info-card__icon"><MapPin size={24} /></div>
                                            <div className="info-card__content">
                                                <h4>Address</h4>
                                                <p>Reay Rd, Darukhana, Mumbai - 400010</p>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                            </div>

                            <div className="social-box">
                                <h4 className="social-title">Follow Our Journey</h4>
                                <div className="social-links">
                                    <a href="#" className="social-link"><Facebook size={20} /></a>
                                    <a href="#" className="social-link"><Twitter size={20} /></a>
                                    <a href="#" className="social-link"><Youtube size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper glass-card">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                <Reveal delay={0.1} width="100%">
                                    <h3 className="form-title">Send an Enquiry</h3>
                                </Reveal>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name *</label>
                                        <input {...register("firstName", { required: true })} placeholder="John" />
                                        {errors.firstName && <span className="error">Required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name *</label>
                                        <input {...register("lastName", { required: true })} placeholder="Doe" />
                                        {errors.lastName && <span className="error">Required</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="john@example.com" />
                                        {errors.email && <span className="error">Valid email required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Number *</label>
                                        <input {...register("number", { required: true })} placeholder="+91" />
                                        {errors.number && <span className="error">Required</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Company / Society Name *</label>
                                    <input {...register("companyName", { required: true })} placeholder="Your Company Name" />
                                    {errors.companyName && <span className="error">Required</span>}
                                </div>

                                <div className="form-group">
                                    <label>Enquiry For *</label>
                                    <select {...register("enquiryFor", { required: true })}>
                                        <option value="">Select an option</option>
                                        {enquiryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                    {errors.enquiryFor && <span className="error">Please select an option</span>}
                                </div>

                                <div className="form-group">
                                    <label>Briefly Describe your Requirement</label>
                                    <textarea {...register("requirement")} rows={4} placeholder="Tell us more about your facility..." />
                                </div>

                                <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                    ) : (
                                        <>Submit Enquiry <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </div>
    );
};

export default Contact;


