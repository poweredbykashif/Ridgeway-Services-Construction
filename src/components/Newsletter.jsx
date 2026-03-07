"use client";

export default function Newsletter() {
    return (
        <section className="newsletter section-padding animate-fade-in" style={{ backgroundColor: 'var(--ds-bg-tertiary)' }}>
            <div className="container">
                <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1.25rem', display: 'block' }}>
                        Stay Informed
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>Industry Newsletter</h2>
                    <p className="body-text" style={{ fontSize: '1.15rem', marginBottom: '3rem', color: 'var(--ds-text-secondary)' }}>
                        Subscribe to receive exclusive insights on construction trends, luxury architecture, and metropolitan development in the GTA.
                    </p>
                    <form className="newsletter-form" style={{
                        display: 'flex',
                        gap: '0.5rem',
                        background: '#ffffff',
                        padding: '0.6rem',
                        borderRadius: '3rem',
                        boxShadow: 'var(--ds-shadow-md)',
                        border: '1px solid var(--ds-border-strong)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="input-field"
                            style={{
                                border: 'none',
                                background: 'transparent',
                                paddingLeft: '1.8rem',
                                borderRadius: '3rem',
                                fontSize: '1rem',
                                flex: 1
                            }}
                            required
                        />
                        <button type="submit" className="btn" style={{
                            background: 'var(--ds-accent-main)',
                            color: '#fff',
                            borderRadius: '3rem',
                            padding: '0.85rem 3rem',
                            fontWeight: 'bold',
                            fontSize: '0.95rem'
                        }}>Subscribe</button>
                    </form>
                    <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--ds-text-muted)', fontStyle: 'italic' }}>
                        We respect your privacy. No spam, only architectural excellence.
                    </p>
                </div>
            </div>
        </section>
    );
}
