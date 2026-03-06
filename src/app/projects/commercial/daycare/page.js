"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

export default function DaycareProjects() {
    const projects = commercialProjects.daycare;

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding" style={{ textAlign: 'center', paddingTop: 'var(--ds-spacing-xl)' }}>
                    <div className="container">
                        <span style={{ color: '#ff6600', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Sector: Specialized Facilities
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Daycare & Education</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Creating safe, inspiring, and functional spaces for early childhood education and specialized care.
                            Our facilities are built to the highest safety standards while fostering a nurturing environment.
                        </p>
                    </div>
                </section>

                {/* Project Sections */}
                {projects.map((project, idx) => (
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
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {/* Using project main image + high-quality daycare/educational shots */}
                                {[
                                    project.img,
                                    `https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1564429234816-6c9a4e63b48a?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1000&auto=format&fit=crop`,
                                    `https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1000&auto=format&fit=crop`
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

                            <div style={{ textAlign: 'center' }}>
                                <a href={`/projects/commercial/${project.slug}`} className="btn outline">View Design Specs</a>
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
