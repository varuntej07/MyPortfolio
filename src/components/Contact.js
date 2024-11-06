import React, { useState } from 'react';
import './componentStyles.css';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [activeInput, setActiveInput] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Submitted:', formData);

        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <section className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
            <div className="contact-container">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-description">
                    Have an idea? Let's bring it to life together.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className={`input-group ${activeInput === 'name' ? 'active' : ''}`}>
                        <div className="input-wrapper">
                            <label>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setActiveInput('name')}
                                onBlur={() => setActiveInput(null)}
                                placeholder="Elon Musk"
                                required
                            />
                        </div>
                    </div>
                    <div className={`input-group ${activeInput === 'email' ? 'active' : ''}`}>
                        <div className="input-wrapper">
                            <label>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setActiveInput('email')}
                                onBlur={() => setActiveInput(null)}
                                placeholder="elonmusk@spacex.com"
                                required
                            />
                        </div>
                    </div>
                    <div className={`input-group ${activeInput === 'message' ? 'active' : ''}`}>
                        <div className="input-wrapper">
                            <label>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setActiveInput('message')}
                                onBlur={() => setActiveInput(null)}
                                placeholder="Your message here..."
                                required
                                rows={4}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;