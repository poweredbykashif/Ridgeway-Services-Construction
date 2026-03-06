export default function ProjectsSplit() {
    return (
        <section id="projects" className="projects-split animate-fade-in" style={{ backgroundColor: 'var(--ds-bg-primary)' }}>
            <div className="project-half project-left" style={{ position: 'relative', overflow: 'hidden', height: '600px' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/services_residential.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s ease'
                }}
                    className="split-bg-img"
                />
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '10%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '80%'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Curated Living
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>Residential</h2>
                    <p className="body-text" style={{ fontSize: '1.1rem', maxWidth: '450px' }}>
                        Creating bespoke dream homes with modern luxury aesthetics and functional architectural spaces.
                    </p>
                    <a href="/projects/residential" className="btn outline" style={{
                        marginTop: '2.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        borderColor: 'var(--ds-text-primary)'
                    }}>View Case Studies</a>
                </div>
            </div>

            <div className="project-half project-right" style={{ position: 'relative', overflow: 'hidden', height: '600px' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/services_commercial.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s ease'
                }}
                    className="split-bg-img"
                />
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '10%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(248,249,250,0.7)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '80%',
                    marginLeft: 'auto'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Urban Infrastructure
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>Commercial</h2>
                    <p className="body-text" style={{ fontSize: '1.1rem', maxWidth: '450px' }}>
                        Delivering robust architectural spaces engineered for global business growth and metropolitan productivity.
                    </p>
                    <a href="/projects/commercial" className="btn outline" style={{
                        marginTop: '2.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        borderColor: 'var(--ds-text-primary)'
                    }}>View Case Studies</a>
                </div>
            </div>
        </section>
    );
}
