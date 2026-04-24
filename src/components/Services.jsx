"use client";
export default function Services() {
    const services = [
        {
            title: "Design & Build",
            desc: "Expertly integrating architectural design with high-quality construction through a single point of responsibility for streamlined results.",
            img: "/images/service_design_build.png"
        },
        {
            title: "Maintenance",
            desc: "Dedicated property and facility maintenance solutions designed to ensure asset longevity, safety, and peak operational performance.",
            img: "/images/service_maintenance.png"
        },
        {
            title: "Project Management",
            desc: "Strategic oversight and rigorous coordination of construction projects, guaranteeing strict adherence to timelines and safety standards.",
            img: "/images/service_project_management.png"
        },
        {
            title: "Construction",
            desc: "High-performance construction execution for residential and commercial developments, focused on precision and premium craftsmanship.",
            img: "/images/service_construction.png"
        }
    ];

    return (
        <section id="services" className="section-padding animate-fade-in services-section" style={{ backgroundColor: 'var(--ds-bg-primary)' }}>
            <div className="container services-container">
                <span className="services-tag" style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                    What We Do
                </span>
                <h2 className="heading-1 services-title" style={{ marginBottom: '3rem' }}>Our Services</h2>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-item">
                            <div className="service-img-wrapper" style={{
                                boxShadow: 'var(--ds-shadow-md)',
                                borderRadius: 'var(--ds-radius-md)',
                                position: 'relative',
                                backgroundColor: '#111'
                            }}>
                                <img src={s.img} alt={s.title} className="service-img" style={{ filter: 'brightness(0.88)' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.2) 100%)',
                                    zIndex: 1
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '0',
                                    width: '100%',
                                    padding: '0 1.5rem',
                                    zIndex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.25rem'
                                }}>
                                    <p className="body-text" style={{
                                        padding: '0',
                                        textAlign: 'center',
                                        color: '#cccccc',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                        opacity: 0.95,
                                        margin: 0
                                    }}>{s.desc}</p>
                                    <div className="service-title-box" style={{
                                        position: 'relative',
                                        bottom: 'auto',
                                        left: 'auto',
                                        width: '100%',
                                        backgroundColor: 'var(--ds-accent-main)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#fff',
                                        borderRadius: 'var(--ds-radius-sm)',
                                        padding: '0.8rem 1rem',
                                        minHeight: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .services-container {
                    text-align: left;
                }
                .service-item {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                @media (max-width: 768px) {
                    .services-section {
                        padding-top: 3rem !important;
                        padding-bottom: 3rem !important;
                    }
                    .services-title {
                        margin-bottom: 1.5rem !important;
                    }
                    .services-grid {
                        gap: 0.75rem !important;
                        margin-top: 1rem !important;
                    }
                    .services-container {
                        text-align: center;
                    }
                    .service-item {
                        text-align: center;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
}
