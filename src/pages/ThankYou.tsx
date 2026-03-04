import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou: React.FC = () => {
    return (
        <div className="thankyou-page">
            <div className="thankyou-bg">
                <div className="thankyou-glow-1" />
                <div className="thankyou-glow-2" />
                <div className="thankyou-grid" />
            </div>

            <div className="thankyou-content">
                <motion.div
                    className="thankyou-icon-wrap"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                >
                    <CheckCircle2 size={64} strokeWidth={2} />
                </motion.div>

                <motion.h1
                    className="thankyou-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    className="thankyou-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                >
                    Your enquiry has been received successfully. Our team will get back to you shortly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link to="/" className="btn btn-primary thankyou-btn">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ThankYou;
