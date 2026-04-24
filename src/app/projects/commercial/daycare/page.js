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
                <section className="section-padding" style={{ textAlign: 'left', paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <span style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Sector: Specialized Facilities
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Daycare & Education</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0', fontSize: '1.1rem' }}>
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
                                {/* Using project main image + high-quality daycare/educational shots */}
                                {[
                                    { url: project.img, title: "Activity Center", desc: "Open play environments designed for physical development." },
                                    { url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1000&auto=format&fit=crop", title: "Learning Zone", desc: "Structured spaces fostering early cognitive growth." },
                                    { url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop", title: "Quiet Area", desc: "Nurturing environments for rest and focused reading." },
                                    { url: "https://images.unsplash.com/photo-1564429234816-6c9a4e63b48a?q=80&w=1000&auto=format&fit=crop", title: "Art Studio", desc: "Creative zones equipped with non-toxic materials." },
                                    { url: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1000&auto=format&fit=crop", title: "Outdoor Play", desc: "Safe, transitioned outdoor spaces for supervised play." },
                                    { url: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1000&auto=format&fit=crop", title: "Dining Hall", desc: "Hygienic and social areas for child-friendly meals." }
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
