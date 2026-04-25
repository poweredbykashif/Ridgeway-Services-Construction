import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProjectGallery from '@/components/ProjectGallery';
import { residentialProjects } from '@/data/projects';

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = residentialProjects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Project not found: {slug}</h1>
            </div>
        );
    }

    const gallery = project.gallery || [{ url: project.img, title: project.title, desc: project.shortDesc }];

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <article className="project-detail-wrapper" style={{ padding: 'calc(var(--ds-spacing-xl) + 60px) 0 var(--ds-spacing-xl)' }}>
                <div className="container">
                    <div className="detail-header project-detail-header" style={{ marginBottom: '3rem' }}>
                        <span style={{ color: '#0042bb', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            {project.location} • {project.year}
                        </span>
                        <h1 className="heading-1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>{project.title}</h1>
                        <div className="meta-info project-meta-info" style={{ borderTop: '1px solid var(--ds-border-light)', paddingTop: '1.5rem' }}>
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

                    <ProjectGallery gallery={gallery} />

                    <div className="project-content-grid" style={{}}>
                        <div className="overview-section project-overview-section">
                            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Project Overview</h2>
                            
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
                                        <li key={i} className="feature-item project-feature-item" style={{
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
                                dangerouslySetInnerHTML={{ __html: project.fullDesc }}
                            />

                            <div style={{ padding: '2rem 0' }}>
                                <a href="/projects/residential" className="btn outline">← Back to Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>



            <Newsletter />
            <Footer />
        </div>
    );
}
