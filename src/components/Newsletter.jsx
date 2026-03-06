"use client";

export default function Newsletter() {
    return (
        <section className="newsletter section-padding animate-fade-in" style={{ borderTop: '1px solid var(--ds-border-light)' }}>
            <div className="container">
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Stay Informed
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Industry Newsletter</h2>
                    <p className="body-text" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                        Subscribe to receive exclusive insights on construction trends, luxury architecture, and metropolitan development in the GTA.
                    </p>
                    <form className="newsletter-form" style={{
                        display: 'flex',
                        gap: '0.5rem',
                        background: 'var(--ds-bg-primary)',
                        padding: '0.5rem',
                        borderRadius: '2rem',
                        boxShadow: 'var(--ds-shadow-md)',
                        border: '1px solid var(--ds-border-light)'
                    }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="input-field"
                            style={{
                                border: 'none',
                                background: 'transparent',
                                paddingLeft: '1.5rem',
                                borderRadius: '2rem'
                            }}
                            required
                        />
                        <button type="submit" className="btn" style={{
                            background: '#ff6600',
                            color: '#fff',
                            borderRadius: '2rem',
                            padding: '0.75rem 2.5rem',
                            fontWeight: 'bold'
                        }}>Subscribe</button>
                    </form>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--ds-text-muted)' }}>
                        We respect your privacy. No spam, only architectural excellence.
                    </p>
                </div>
            </div>
        </section>
    );
}
