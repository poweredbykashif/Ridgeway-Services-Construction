"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

export default function RetailProjects() {
    const projects = commercialProjects.retail;

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding" style={{ textAlign: 'left', paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <span style={{ color: '#ff6600', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Retail Portfolio
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Retail Excellence</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0', fontSize: '1.1rem' }}>
                            Showcasing our excellence in high-end retail fit-outs, showroom developments, and commercial
                            modernization across the Greater Toronto Area.
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
                                    {project.location} • Retail Development
                                </p>
                            </div>

                            {/* 3x2 Image Grid */}
                            <div className="project-gallery-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {/* Using project main image + stylized retail architectural shots */}
                                {[
                                    project.img,
                                    `https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1534452203294-49c8ad160cae?q=80&w=1000&auto=format&fit=crop`
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
                                <a href={`/projects/commercial/${project.slug}`} className="btn outline">View Details</a>
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
