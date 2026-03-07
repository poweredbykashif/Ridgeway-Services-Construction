"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const VideoBackground = dynamic(() => Promise.resolve(() => (
    <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/premium_unified_bg.png"
        src="/videos/background_construction.mp4"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
        }}
    />
)), { ssr: false });

export default function ProjectsSplit() {
    return (
        <section id="projects" className="projects-split animate-fade-in" style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            minHeight: '900px',
            overflow: 'hidden'
        }}>
            {/* Background Video - Only render on client to avoid hydration mismatch */}
            <VideoBackground />

            {/* Black Glassy Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
                zIndex: 1
            }} />

            {/* Residential Card */}
            <div className="project-half project-left" style={{
                position: 'relative',
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem',
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    position: 'relative',
                    padding: '4.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(25px)',
                    borderRadius: 'var(--ds-radius-md)',
                    maxWidth: '650px',
                    minHeight: '620px',
                    boxShadow: 'var(--ds-shadow-lg)',
                    border: '1px solid rgba(255,255,255,0.3)'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'block' }}>
                        Curated Living
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '2rem', fontSize: '4.5rem', color: '#111', lineHeight: '1.1' }}>Residential</h2>
                    <p className="body-text" style={{ fontSize: '1.25rem', maxWidth: '550px', color: '#333', lineHeight: '1.6' }}>
                        Creating bespoke dream homes with modern luxury aesthetics and functional architectural spaces.
                    </p>
                    <a href="/projects/residential" className="btn" style={{
                        marginTop: '3.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        background: 'var(--ds-accent-main)',
                        color: '#fff',
                        borderRadius: 'var(--ds-radius-sm)',
                        padding: '1rem 2.5rem',
                        fontSize: '1rem'
                    }}>View Case Studies</a>
                </div>
            </div>

            {/* Commercial Card */}
            <div className="project-half project-right" style={{
                position: 'relative',
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem',
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    position: 'relative',
                    padding: '4.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(25px)',
                    borderRadius: 'var(--ds-radius-md)',
                    maxWidth: '650px',
                    minHeight: '620px',
                    boxShadow: 'var(--ds-shadow-lg)',
                    border: '1px solid rgba(255,255,255,0.3)'
                }}>
                    <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'block' }}>
                        Urban Infrastructure
                    </span>
                    <h2 className="heading-1" style={{ marginBottom: '2rem', fontSize: '4.5rem', color: '#111', lineHeight: '1.1' }}>Commercial</h2>
                    <p className="body-text" style={{ fontSize: '1.25rem', maxWidth: '550px', color: '#333', lineHeight: '1.6' }}>
                        Delivering robust architectural spaces engineered for global business growth and metropolitan productivity.
                    </p>
                    <a href="/projects/commercial" className="btn" style={{
                        marginTop: '3.5rem',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                        background: 'var(--ds-accent-main)',
                        color: '#fff',
                        borderRadius: 'var(--ds-radius-sm)',
                        padding: '1rem 2.5rem',
                        fontSize: '1rem'
                    }}>View Case Studies</a>
                </div>
            </div>
        </section>
    );
}
