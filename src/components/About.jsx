export default function About() {
    return (
        <section id="about" className="about-us-section" style={{ backgroundColor: 'var(--ds-bg-secondary)', overflow: 'hidden' }}>
            <div className="container section-padding">
                <div className="about-us-inner animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                    {/* Visual Collage Area */}
                    <div style={{ position: 'relative', height: '600px' }}>
                        {/* Main Image */}
                        <div style={{
                            width: '85%',
                            height: '80%',
                            borderRadius: 'var(--ds-radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--ds-shadow-lg)',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                                alt="Masterful Construction"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '60%',
                            height: '50%',
                            borderRadius: 'var(--ds-radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--ds-shadow-lg)',
                            border: '10px solid var(--ds-bg-secondary)',
                            zIndex: 3
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                                alt="Luxury Development"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Decorative Element */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            borderLeft: '5px solid var(--ds-accent-main)',
                            borderTop: '5px solid var(--ds-accent-main)',
                            zIndex: 1
                        }} />
                    </div>

                    {/* Content Area */}
                    <div className="about-content">
                        <span style={{
                            color: 'var(--ds-accent-main)',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            letterSpacing: '0.2em',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Premium Craftsmanship
                        </span>
                        <h2 className="heading-1" style={{ color: 'var(--ds-text-primary)', marginBottom: '1.5rem', fontWeight: '500' }}>About RIDGEWAY</h2>
                        <p className="body-text" style={{ color: 'var(--ds-text-secondary)', marginBottom: '2.5rem', lineHeight: '1.9', fontSize: '1.1rem' }}>
                            At Ridgeway Services & Construction, we don't just build structures; we create legacies. With over 15 years of excellence across Ontario, we have specialized in bridging the gap between innovative architectural design and masterful execution.
                            <br /><br />
                            Our approach integrates sustainable building practices with luxury aesthetics, ensuring every residential and commercial project we touch sets a new benchmark for quality and durability.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--ds-accent-main)', fontWeight: '700', margin: 0 }}>15+</h3>
                                <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--ds-text-muted)', letterSpacing: '0.1em' }}>Years Experience</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--ds-accent-main)', fontWeight: '700', margin: 0 }}>95+</h3>
                                <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--ds-text-muted)', letterSpacing: '0.1em' }}>Premium Projects</p>
                            </div>
                        </div>

                        <a href="/contact" className="btn" style={{
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--ds-radius-sm)',
                            background: 'var(--ds-accent-main)',
                            color: '#fff',
                            fontWeight: '600'
                        }}>Our Story →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
