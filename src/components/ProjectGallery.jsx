"use client";
import { useState, useEffect } from 'react';

export default function ProjectGallery({ gallery }) {
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % gallery.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [gallery.length]);

    return (
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
            
            <style jsx>{`
                .project-hero-slider {
                    height: 300px !important;
                }
                @media (min-width: 768px) {
                    .project-hero-slider {
                        height: 600px !important;
                    }
                }
            `}</style>
        </div>
    );
}
