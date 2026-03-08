"use client";
export default function Footer() {
    return (
        <footer className="footer animate-fade-in" suppressHydrationWarning style={{
            backgroundColor: '#111111',
            color: '#ffffff',
            paddingTop: 'var(--ds-spacing-xl)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ width: '100%' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 'var(--ds-spacing-md)',
                    marginBottom: '4rem'
                }}>
                    <div className="footer-col">
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', letterSpacing: '0.05em', color: '#ffffff' }}>RIDGEWAY</h4>
                        <p className="body-text" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)' }}>
                            Building the future with precision, restoring heritage with care. Your premier partner in luxury construction services across Ontario.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--ds-accent-main)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'About Us', 'Services', 'Projects', 'Blog', 'Contact'].map(link => (
                                <li key={link} style={{ marginBottom: '0.75rem' }}>
                                    <a href={link === 'Home' ? '/' : (link === 'About Us' ? '/about' : `/${link.toLowerCase().replace(' ', '')}`)} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--ds-accent-main)'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--ds-accent-main)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Experience</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Residential', 'Commercial', 'Design & Build', 'Project Excellence'].map(link => (
                                <li key={link} style={{ marginBottom: '0.75rem' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--ds-accent-main)'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="contact" className="footer-col">
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--ds-accent-main)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Get in Touch</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem' }}><span className="body-text" style={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>123 Builder Ave, Metro City</span></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="mailto:info@ridgeway.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>info@ridgeway.com</a></li>
                            <li><a href="tel:+15551234567" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+1 (555) 123-4567</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{
                    padding: '2rem 0',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.85rem'
                }}>
                    &copy; {new Date().getFullYear()} Ridgeway Services & Construction. Engineered for Excellence in Canada.
                </div>
            </div>
        </footer>
    );
}
