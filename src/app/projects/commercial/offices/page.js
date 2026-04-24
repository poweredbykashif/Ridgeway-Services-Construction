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
                        <span style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
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
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {/* Using project main image + premium office architectural shots */}
                                {[
                                    { url: project.img, title: "Executive Suite", desc: "Minimalist executive office defined by clean architectural lines." },
                                    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", title: "Collaborative Zone", desc: "Open-plan workspaces designed for team creativity." },
                                    { url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop", title: "Boardroom", desc: "High-performance meeting spaces with integrated tech." },
                                    { url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop", title: "Reception Area", desc: "A welcoming professional entrance with natural light." },
                                    { url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop", title: "Shared Workspace", desc: "Flexible desk arrangements for modern professional needs." },
                                    { url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop", title: "Breakout Room", desc: "Relaxed environments for informal collaboration." }
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        width: '100%',
                                        maxWidth: '350px',
                                        height: '350px',
                                        borderRadius: 'var(--ds-radius-md)',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                            if (overlay) overlay.style.opacity = '1';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                            if (overlay) overlay.style.opacity = '0';
                                        }}
                                    >
                                        <img src={item.url} alt={`${project.title} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
