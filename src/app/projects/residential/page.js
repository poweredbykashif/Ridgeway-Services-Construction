import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { residentialProjects } from "@/data/projects";

export default function ResidentialProjects() {
    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding residential-hero hero-text-left" style={{ paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <span className="hero-tag" style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Portfolio
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Residential</h1>
                        <p className="body-text" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                            Our residential portfolio showcases unparalleled attention to detail and bespoke design solutions,
                            transforming visions into premium living spaces across the Greater Toronto Area.
                        </p>
                    </div>
                </section>

                {/* Project Sections */}
                {residentialProjects.map((project, idx) => (
                    <section key={idx} className="section-padding" style={{ borderTop: idx !== 0 ? '1px solid var(--ds-border-light)' : 'none' }}>
                        <div className="container">
                            {/* Project Title */}
                            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                                <h2 className="heading-2" style={{ marginBottom: '0.5rem' }}>{project.title}</h2>
                                <p style={{ color: 'var(--ds-text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                    {project.location} • {project.type}
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
                                {project.gallery.map((item, i) => (
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
                                <a href={`/projects/residential/${project.slug}`} className="btn outline">Explore Case Study</a>
                            </div>
                        </div>
                    </section>
                ))}

                {/* 5. Blogs Section */}
                <Blogs />

                {/* 6. Newsletter Section */}
                <Newsletter />
            </main>

            {/* 7. Footer Section */}
            <Footer />
        </div>
    );
}
