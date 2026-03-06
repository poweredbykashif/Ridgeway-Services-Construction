import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* Header Section */}
                <section className="section-padding" style={{ textAlign: 'center', paddingTop: 'var(--ds-spacing-xl)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 213, 79, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#ffd54f', color: '#000', fontWeight: 'bold', fontSize: '0.75rem', borderRadius: '4px', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Get In Touch
                        </div>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>Contact Us</h1>
                        <p className="body-text" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Have a project in mind or need expert advice? Reach out to our team today.
                            We're here to turn your vision into reality with precision and excellence.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="container" style={{ paddingBottom: 'var(--ds-spacing-xl)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                        <div className="animate-fade-in" style={{ gridColumn: 'span 1' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {/* Left Side: Info */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                    <div>
                                        <h2 className="heading-2" style={{ fontSize: '1.75rem', color: 'var(--ds-text-primary)' }}>Our Office</h2>
                                        <p className="body-text" style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                                            123 Builder Ave, Suite 500<br />
                                            Metro City, ON M5V 2L1<br />
                                            Canada
                                        </p>
                                    </div>

                                    <div>
                                        <h3 style={{ color: '#ffd54f', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Call Us</h3>
                                        <a href="tel:+15551234567" style={{ color: 'var(--ds-text-primary)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>+1 (555) 123-4567</a>
                                    </div>

                                    <div>
                                        <h3 style={{ color: '#ffd54f', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email Us</h3>
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
                                <div className="contact-form-container" style={{ backgroundColor: 'var(--ds-bg-secondary)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--ds-border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>SUBJECT</label>
                                            <select className="input-field" style={{ backgroundColor: 'var(--ds-bg-primary)', appearance: 'none' }}>
                                                <option>Residential Project Inquiry</option>
                                                <option>Commercial Project Inquiry</option>
                                                <option>General Support</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ds-text-secondary)' }}>MESSAGE</label>
                                            <textarea className="input-field" rows="5" placeholder="Tell us about your project..." style={{ backgroundColor: 'var(--ds-bg-primary)', resize: 'none' }}></textarea>
                                        </div>

                                        <button type="submit" className="btn" style={{ padding: '1rem', marginTop: '1rem', backgroundColor: '#ffd54f', color: '#000', fontWeight: '700', fontSize: '1rem' }}>
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Newsletter />
            </main>

            <Footer />
        </div >
    );
}
