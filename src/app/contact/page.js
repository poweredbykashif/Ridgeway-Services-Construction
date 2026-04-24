"use client";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

function CustomDropdown({ options, defaultValue }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="custom-dropdown-container">
            <div 
                className={`dropdown-selected ${isOpen ? 'active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selected}</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
            
            {isOpen && (
                <div className="dropdown-options">
                    {options.map((option) => (
                        <div 
                            key={option} 
                            className={`dropdown-option ${selected === option ? 'selected' : ''}`}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                .custom-dropdown-container {
                    position: relative;
                    width: 100%;
                    font-family: inherit;
                }
                .dropdown-selected {
                    width: 100%;
                    padding: 0.85rem 1.25rem;
                    background-color: var(--ds-bg-primary);
                    border: 1px solid var(--ds-border-light);
                    border-radius: var(--ds-radius-sm);
                    color: var(--ds-text-primary);
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                }
                .dropdown-selected:hover {
                    border-color: var(--ds-accent-main);
                }
                .dropdown-selected.active {
                    border-color: var(--ds-accent-main);
                    box-shadow: 0 0 0 3px rgba(0, 66, 187, 0.1);
                }
                .dropdown-options {
                    position: absolute;
                    top: calc(100% + 5px);
                    left: 0;
                    width: 100%;
                    background-color: #ffffff;
                    border: 1px solid var(--ds-border-light);
                    border-radius: var(--ds-radius-sm);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    z-index: 100;
                    overflow: hidden;
                    animation: slideDown 0.2s ease-out;
                }
                .dropdown-option {
                    padding: 0.85rem 1.25rem;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 0.95rem;
                }
                .dropdown-option:hover {
                    background-color: var(--ds-bg-secondary);
                    color: var(--ds-accent-main);
                }
                .dropdown-option.selected {
                    background-color: rgba(0, 66, 187, 0.05);
                    color: var(--ds-accent-main);
                    font-weight: 600;
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* Header Section */}
                <section className="contact-hero section-padding" style={{ paddingTop: 'calc(var(--ds-spacing-xl) + 40px)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 213, 79, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

                    <div className="container contact-header-container" style={{ position: 'relative', zIndex: 1 }}>
                        <div className="contact-badge" style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: 'var(--ds-accent-main)', color: '#fff', fontWeight: 'bold', fontSize: '0.75rem', borderRadius: '4px', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Get In Touch
                        </div>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>Contact Us</h1>
                        <p className="body-text contact-header-desc" style={{ maxWidth: '700px', margin: '0', fontSize: '1.1rem' }}>
                            Have a project in mind or need expert advice? Reach out to our team today.
                            We're here to turn your vision into reality with precision and excellence.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="container" style={{ paddingBottom: 'var(--ds-spacing-xl)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                        <div className="animate-fade-in" style={{ gridColumn: 'span 1' }}>
                                <div className="grid-2 contact-grid" style={{ gap: '2rem' }}>
                                    {/* Left Side: Info */}
                                    <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                        <div>
                                            <h2 className="heading-2" style={{ fontSize: '1.75rem', color: 'var(--ds-text-primary)' }}>Our Office</h2>
                                            <p className="body-text" style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                                                123 Builder Ave, Suite 500<br />
                                                Metro City, ON M5V 2L1<br />
                                                Canada
                                            </p>
                                        </div>

                                        <div>
                                            <h3 style={{ color: 'var(--ds-accent-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Call Us</h3>
                                            <a href="tel:+15551234567" style={{ color: 'var(--ds-text-primary)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>+1 (555) 123-4567</a>
                                        </div>

                                        <div>
                                            <h3 style={{ color: 'var(--ds-accent-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email Us</h3>
                                            <a href="mailto:info@ridgeway.com" style={{ color: 'var(--ds-text-primary)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>info@ridgeway.com</a>
                                        </div>

                                        <div style={{ marginTop: 'auto', padding: '2rem', backgroundColor: 'var(--ds-bg-secondary)', borderRadius: '1rem', border: '1px solid var(--ds-border-light)' }}>
                                            <h4 style={{ marginBottom: '0.5rem' }}>Business Hours</h4>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                                <span style={{ color: 'var(--ds-text-secondary)' }}>Monday - Friday</span>
                                                <span>9:00 AM - 6:00 PM</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'var(--ds-text-secondary)' }}>Saturday</span>
                                                <span>10:00 AM - 2:00 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Form */}
                                    <div className="contact-form-container" style={{ backgroundColor: 'var(--ds-bg-secondary)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--ds-border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            <div className="form-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>FIRST NAME</label>
                                                    <input type="text" className="input-field" placeholder="John" style={{ backgroundColor: 'var(--ds-bg-primary)' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>LAST NAME</label>
                                                    <input type="text" className="input-field" placeholder="Doe" style={{ backgroundColor: 'var(--ds-bg-primary)' }} />
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>EMAIL ADDRESS</label>
                                                <input type="email" className="input-field" placeholder="john@example.com" style={{ backgroundColor: 'var(--ds-bg-primary)' }} />
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
                                                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>SUBJECT</label>
                                                <CustomDropdown 
                                                    options={['Residential Project Inquiry', 'Commercial Project Inquiry', 'General Support', 'Other']}
                                                    defaultValue="Residential Project Inquiry"
                                                />
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>MESSAGE</label>
                                                <textarea className="input-field" rows="5" placeholder="Tell us about your project..." style={{ backgroundColor: 'var(--ds-bg-primary)', resize: 'none' }}></textarea>
                                            </div>

                                            <button type="submit" className="btn" style={{ padding: '1rem', marginTop: '1rem', backgroundColor: 'var(--ds-accent-main)', color: '#fff', fontWeight: '700', fontSize: '1rem' }}>
                                                Send Message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: `
                        .contact-hero {
                            text-align: left;
                        }
                        .contact-header-container {
                            text-align: inherit;
                        }
                        .contact-grid {
                            text-align: left;
                        }
                        .form-grid {
                            grid-template-columns: 1fr;
                        }
                        @media (max-width: 768px) {
                            .contact-hero {
                                text-align: center !important;
                            }
                            .contact-header-container {
                                display: flex !important;
                                flex-direction: column !important;
                                align-items: center !important;
                                text-align: center !important;
                            }
                            .contact-badge {
                                margin-left: auto !important;
                                margin-right: auto !important;
                            }
                            .contact-header-desc {
                                margin: 0 auto !important;
                            }
                            .contact-grid {
                                text-align: center !important;
                            }
                            .contact-form-container {
                                padding: 1.5rem !important;
                                text-align: left !important;
                            }
                            .contact-info {
                                text-align: center !important;
                                align-items: center !important;
                            }
                        }
                        .styled-select {
                            appearance: none !important;
                            -webkit-appearance: none !important;
                            -moz-appearance: none !important;
                            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
                            background-repeat: no-repeat !important;
                            background-position: right 1rem center !important;
                            background-size: 1.2em !important;
                            padding-right: 3rem !important;
                            cursor: pointer !important;
                            transition: border-color 0.3s ease, box-shadow 0.3s ease !important;
                        }
                        .styled-select:focus {
                            border-color: var(--ds-accent-main) !important;
                            box-shadow: 0 0 0 3px rgba(0, 66, 187, 0.1) !important;
                        }
                        .styled-select option {
                            background-color: #ffffff;
                            color: #333333;
                            padding: 10px;
                        }
                        @media (min-width: 600px) {
                            .form-grid {
                                grid-template-columns: 1fr 1fr;
                            }
                        }
                    ` }} />
                </section>


                <Newsletter />
            </main>

            <Footer />
        </div >
    );
}
