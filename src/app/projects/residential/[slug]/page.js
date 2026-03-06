import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
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

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <article className="project-detail-wrapper" style={{ padding: 'var(--ds-spacing-xl) 5% var(--ds-spacing-xl)' }}>
                <div className="container">
                    <div style={{ marginBottom: '3rem' }}>
                        <span style={{ color: '#ff6600', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            {project.location} • {project.year}
                        </span>
                        <h1 className="heading-1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>{project.title}</h1>
                        <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--ds-border-light)', paddingTop: '1.5rem' }}>
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

                    <div style={{
                        width: '100%',
                        height: '600px',
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 'var(--ds-radius-lg)',
                        marginBottom: '4rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>
                        <div>
                            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Project Overview</h2>
                            <div
                                className="body-text large"
                                style={{ lineHeight: '1.8', color: 'var(--ds-text-secondary)' }}
                                dangerouslySetInnerHTML={{ __html: project.fullDesc }}
                            />

                            <div style={{ marginTop: '3rem' }}>
                                <a href="/projects/residential" className="btn outline">← Back to Projects</a>
                            </div>
                        </div>

                        <aside>
                            <div style={{
                                backgroundColor: 'var(--ds-bg-secondary)',
                                padding: '2rem',
                                borderRadius: 'var(--ds-radius-md)',
                                border: '1px solid var(--ds-border-light)'
                            }}>
                                <h3 className="heading-3" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Key Features</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {project.features.map((feature, i) => (
                                        <li key={i} style={{
                                            padding: '0.75rem 0',
                                            borderBottom: i === project.features.length - 1 ? 'none' : '1px solid var(--ds-border-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '0.95rem',
                                            color: 'var(--ds-text-secondary)'
                                        }}>
                                            <span style={{ color: '#ff6600', marginRight: '0.75rem' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Newsletter />
            <Footer />
        </div>
    );
}
