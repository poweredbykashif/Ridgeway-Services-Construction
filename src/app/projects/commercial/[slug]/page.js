"use client";
import React, { useState, useEffect, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { commercialProjects } from '@/data/projects';

export default function CommercialProjectDetail({ params }) {
    const { slug } = use(params);

    // Find project in all commercial categories
    const allCommercial = Object.values(commercialProjects).flat();
    const project = allCommercial.find(p => p.slug === slug);

    if (!project) {
        return (
            <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Project not found: {slug}</h1>
            </div>
        );
    }

    const [activeIdx, setActiveIdx] = useState(0);
    const gallery = project.gallery || [{ url: project.img, title: project.title, desc: project.shortDesc }];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % gallery.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [gallery.length]);

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <article className="project-detail-wrapper" style={{ padding: 'calc(var(--ds-spacing-xl) + 60px) 5% var(--ds-spacing-xl)' }}>
                <div className="container">
                    <div className="detail-header" style={{ marginBottom: '3rem' }}>
                        <span style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            {project.location} • {project.year}
                        </span>
                        <h1 className="heading-1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>{project.title}</h1>
                        <div className="meta-info" style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--ds-border-light)', paddingTop: '1.5rem' }}>
                            <div>
                                <span style={{ color: 'var(--ds-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>TYPE</span>
                                <p style={{ fontWeight: '500', marginTop: '0.25rem' }}>{project.type}</p>
                            </div>
                            <div>
                                <span style={{ color: 'var(--ds-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>STATUS</span>
                                <p style={{ fontWeight: '500', marginTop: '0.25rem' }}>{project.status}</p>
                            </div>
                        </div>
                    </div>

                    {/* Auto Sliding Gallery */}
                    <div className="gallery-main-container" style={{ marginBottom: '4rem' }}>
                        <div className="project-hero-slider" style={{
                            width: '100%',
                            height: '600px',
                            position: 'relative',
                            borderRadius: 'var(--ds-radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            backgroundColor: '#000'
                        }}>
                            {gallery.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${item.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: activeIdx === idx ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                        zIndex: activeIdx === idx ? 2 : 1
                                    }}
                                />
                            ))}
                        </div>

                        {/* Thumbnail Selector */}
                        <div className="thumbnail-strip" style={{
                            display: 'flex',
                            gap: '1rem',
                            marginTop: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            padding: '0.5rem 0'
                        }}>
                            {gallery.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    style={{
                                        width: '80px',
                                        height: '60px',
                                        flexShrink: 0,
                                        border: activeIdx === idx ? '2px solid #0042bb' : '1px solid #eee',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: activeIdx === idx ? 1 : 0.7,
                                        boxShadow: activeIdx === idx ? '0 4px 12px rgba(0,66,187,0.2)' : '0 2px 4px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="project-content-grid" style={{ display: 'grid', gap: '4rem' }}>
                        <div className="overview-section">
                            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Sector Expertise</h2>

                            {/* Key Features moved here */}
                            <div className="features-grid" style={{ 
                                backgroundColor: 'var(--ds-bg-secondary)', 
                                padding: '2rem', 
                                borderRadius: 'var(--ds-radius-md)', 
                                border: '1px solid var(--ds-border-light)',
                                marginBottom: '2.5rem'
                            }}>
                                <h3 className="heading-3" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Key Features</h3>
                                <ul style={{ 
                                    listStyle: 'none', 
                                    padding: 0, 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="feature-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '0.95rem',
                                            color: 'var(--ds-text-secondary)'
                                        }}>
                                            <span style={{ color: '#0042bb', marginRight: '0.75rem' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div
                                className="body-text large"
                                style={{ lineHeight: '1.8', color: 'var(--ds-text-secondary)' }}
                            >
                                {project.fullDesc}
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <a href="/projects/commercial" className="btn outline">← Back to Commercial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <style jsx>{`
                .detail-header {
                    text-align: left;
                }
                .meta-info {
                    justify-content: flex-start;
                }
                .project-hero-slider {
                    height: 300px !important;
                }
                .project-content-grid {
                    grid-template-columns: 1fr;
                }
                .thumbnail-strip::-webkit-scrollbar {
                    display: none;
                }
                @media (max-width: 768px) {
                    .detail-header {
                        text-align: center;
                    }
                    .meta-info {
                        justify-content: center;
                        flex-direction: column;
                        gap: 1.5rem !important;
                    }
                    .overview-section {
                        text-align: center;
                    }
                    .feature-item {
                        justify-content: center;
                    }
                }
                @media (min-width: 768px) {
                    .project-hero-slider {
                        height: 600px !important;
                    }
                    .project-content-grid {
                        grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
                    }
                }
            `}</style>

            <Newsletter />
            <Footer />
        </div>
    );
}
