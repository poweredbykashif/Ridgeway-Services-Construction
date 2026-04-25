import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

export default function CommercialProjects() {
    // Flatten projects for listing
    const allProjects = [
        ...commercialProjects.retail.map(p => ({ ...p, sector: 'Retail' })),
        ...commercialProjects.restaurants.map(p => ({ ...p, sector: 'Restaurants' })),
        ...commercialProjects.offices.map(p => ({ ...p, sector: 'Offices' })),
        ...commercialProjects.daycare.map(p => ({ ...p, sector: 'Daycare' }))
    ];

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding commercial-hero hero-text-left" style={{ paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <span className="hero-tag" style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Specialized Sectors
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Commercial</h1>
                        <p className="body-text" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                            Providing robust commercial spaces across diverse industries, from luxury retail to sophisticated
                            office environments and specialized childhood education facilities.
                        </p>
                    </div>
                </section>

                {/* Project Sections */}
                {allProjects.map((project, idx) => (
                    <section key={idx} className="section-padding" style={{ borderTop: '1px solid var(--ds-border-light)' }}>
                        <div className="container">
                            {/* Project Title */}
                            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                                <h2 className="heading-2" style={{ marginBottom: '0.5rem' }}>{project.title}</h2>
                                <p style={{ color: 'var(--ds-text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                    {project.location} • {project.sector}
                                </p>
                            </div>

                            {/* 3x2 Image Grid */}
                            <div className="project-gallery-grid" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {(project.gallery || [
                                    { url: project.img, title: project.title, desc: project.shortDesc },
                                    { url: project.img, title: project.title, desc: project.shortDesc },
                                    { url: project.img, title: project.title, desc: project.shortDesc }
                                ]).map((item, i) => (
                                    <div key={i} className="gallery-item" style={{
                                        width: '100%',
                                        maxWidth: '350px',
                                        height: '350px',
                                        borderRadius: 'var(--ds-radius-md)',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}>
                                        <img src={item.url} alt={`${project.title} view ${i + 1}`} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)' }} />
                                        <div className="gallery-overlay" style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '2rem',
                                            opacity: 0,
                                            transition: 'opacity 0.4s ease',
                                            zIndex: 2,
                                            textAlign: 'center'
                                        }}>
                                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{item.title}</h4>
                                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.4' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <a href={`/projects/commercial/${project.slug}`} className="btn outline">Explore Case Study</a>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Blogs Section */}
                <Blogs />

                {/* Newsletter Section */}
                <Newsletter />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
