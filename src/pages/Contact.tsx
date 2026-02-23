import React from 'react';
import { useForm } from 'react-hook-form';
import { Reveal, FadeIn } from '../components/Reveal';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Youtube } from 'lucide-react';
import './Contact.css';

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
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        alert("Thank you! Your enquiry has been sent. We'll get back to you shortly.");
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
            <section className="page-header contact-header">
                <div className="container">
                    <Reveal>
                        <h1>Let's Talk <span className="text-red">About It</span></h1>
                    </Reveal>
                </div>
            </section>

            <section className="contact-main section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-list">
                            <Reveal>
                                <h2 className="section-title">Get in Touch</h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p>Ready to elevate your fitness asset? Partner with us today.</p>
                            </Reveal>

                            <div className="info-cards">
                                <FadeIn delay={0.3}>
                                    <div className="info-card glass">
                                        <Phone className="text-red" />
                                        <div>
                                            <h4>Call Us</h4>
                                            <p>+91-9326447321</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <div className="info-card glass">
                                        <Mail className="text-red" />
                                        <div>
                                            <h4>Email Us</h4>
                                            <p>info@techfitactive.com</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.5}>
                                    <div className="info-card glass">
                                        <MapPin className="text-red" />
                                        <div>
                                            <h4>Address</h4>
                                            <p>Plot No 309, Coal Bunder Road, E, Reay Rd, Darukhana, Mumbai, Maharashtra 400010</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            <div className="social-box">
                                <h4>Follow Our Journey</h4>
                                <div className="social-links">
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Twitter /></a>
                                    <a href="#"><Youtube /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container glass">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
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
                                    <label>Company Name *</label>
                                    <input {...register("companyName", { required: true })} placeholder="Your Company / Society" />
                                </div>

                                <div className="form-group">
                                    <label>Enquiry For *</label>
                                    <select {...register("enquiryFor", { required: true })}>
                                        <option value="">Select an option</option>
                                        {enquiryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Briefly Describe your Requirement</label>
                                    <textarea {...register("requirement")} rows={4} placeholder="Tell us more about your facility..." />
                                </div>

                                <button type="submit" className="btn btn-primary w-full">
                                    Send Enquiry <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
