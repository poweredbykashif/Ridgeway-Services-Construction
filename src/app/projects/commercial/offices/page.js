"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

export default function OfficeProjects() {
    const projects = commercialProjects.offices;

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding" style={{ textAlign: 'left', paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <span style={{ color: '#ff6600', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Sector: Corporate
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Office Spaces</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0', fontSize: '1.1rem' }}>
                            Specializing in high-performance corporate headquarters and creative workspaces that
                            inspire productivity and reflect professional excellence across Ontario.
                        </p>
                    </div>
                </section>

                {/* Project Sections */}
                {projects.map((project, idx) => (
                    <section key={idx} className="section-padding" style={{ borderTop: idx !== 0 ? '1px solid var(--ds-border-light)' : 'none' }}>
                        <div className="container">
                            {/* Project Title */}
                            <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                                <h2 className="heading-2" style={{ marginBottom: '0.5rem' }}>{project.title}</h2>
                                <p style={{ color: 'var(--ds-text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                    {project.location} • {project.type}
                                </p>
                            </div>

                            {/* 3x2 Image Grid */}
                            <div className="project-gallery-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {/* Using project main image + premium office architectural shots */}
                                {[
                                    project.img,
                                    `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop`
                                ].map((url, i) => (
                                    <div key={i} style={{
                                        height: '350px',
                                        borderRadius: 'var(--ds-radius-md)',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        cursor: 'pointer'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,102,0,0.15)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                                        }}
                                    >
                                        <img src={url} alt={`${project.title} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>

                            <div style={{ textAlign: 'left' }}>
                                <a href={`/projects/commercial/${project.slug}`} className="btn outline">View Full Case Study</a>
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
