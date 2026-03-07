export default function ProjectsSplit() {
    return (
        <section id="projects" className="projects-split animate-fade-in" style={{
            position: 'relative',
            backgroundImage: 'url(/images/premium_unified_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            minHeight: '700px',
            overflow: 'hidden',
            backgroundColor: '#1a1a1a'
        }}>
            {/* Black Glassy Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
                zIndex: 1
            }} />

            {/* Residential Card */}
            <div className="project-half project-left" style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    position: 'relative',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: 'var(--ds-radius-md)',
                    maxWidth: '500px',
                    boxShadow: 'var(--ds-shadow-lg)'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Curated Living
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem', color: '#111' }}>Residential</h2>
                    <p className="body-text" style={{ fontSize: '1.1rem', maxWidth: '450px', color: '#333' }}>
                        Creating bespoke dream homes with modern luxury aesthetics and functional architectural spaces.
                    </p>
                    <a href="/projects/residential" className="btn" style={{
                        marginTop: '2.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        background: 'var(--ds-accent-main)',
                        color: '#fff',
                        borderRadius: 'var(--ds-radius-sm)'
                    }}>View Case Studies</a>
                </div>
            </div>

            {/* Commercial Card */}
            <div className="project-half project-right" style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    position: 'relative',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(248,249,250,0.7)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: 'var(--ds-radius-md)',
                    maxWidth: '500px',
                    boxShadow: 'var(--ds-shadow-lg)'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Urban Infrastructure
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem', color: '#111' }}>Commercial</h2>
                    <p className="body-text" style={{ fontSize: '1.1rem', maxWidth: '450px', color: '#333' }}>
                        Delivering robust architectural spaces engineered for global business growth and metropolitan productivity.
                    </p>
                    <a href="/projects/commercial" className="btn" style={{
                        marginTop: '2.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        background: 'var(--ds-accent-main)',
                        color: '#fff',
                        borderRadius: 'var(--ds-radius-sm)'
                    }}>View Case Studies</a>
                </div>
            </div>
        </section>
    );
}
