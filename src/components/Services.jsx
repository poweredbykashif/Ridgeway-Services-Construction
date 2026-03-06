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
            <div className="container">
                <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                    What We Do
                </span>
                <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Our Services</h2>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-item" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                            <div className="service-img-wrapper" style={{ boxShadow: 'var(--ds-shadow-md)', borderRadius: 'var(--ds-radius-md)' }}>
                                <img src={s.img} alt={s.title} className="service-img" />
                                <div className="service-title-box">
                                    <h3>{s.title}</h3>
                                </div>
                            </div>
                            <p className="body-text" style={{ padding: '0', textAlign: 'left', marginTop: '1rem' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
