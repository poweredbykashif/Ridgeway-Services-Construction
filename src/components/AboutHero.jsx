"use client";
import { useState, useEffect } from 'react';

const slides = [
    {
        title: "Building the Future with Precision",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        tag: "Our Legacy"
    },
    {
        title: "World Class Construction Services",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2400&auto=format&fit=crop",
        tag: "Global Standards"
    },
    {
        title: "Innovative & Sustainable Designs",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
        tag: "Future Living"
    },
    {
        title: "Commercial & Residential Expertise",
        img: "https://images.unsplash.com/photo-1503387762-592be5a52680?q=80&w=2400&auto=format&fit=crop",
        tag: "Master Craftsmanship"
    }
];

export default function AboutHero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="about-hero" style={{
            height: '85vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Background Slideshow */}
            <div className="hero-slider-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="hero-slide"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${slide.img})`,
                            opacity: current === i ? 1 : 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 6s linear',
                            transform: current === i ? 'scale(1.1)' : 'scale(1)',
                            zIndex: i === current ? 1 : 0
                        }}
                    />
                ))}
            </div>

            {/* Content Overlay */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                alignItems: 'center', /* Changed from flex-start to center for better alignment */
                justifyContent: 'flex-start',
                textAlign: 'left',
                paddingTop: '6rem', /* Reduced from 10rem */
                paddingBottom: '4rem',
                maxWidth: '1400px',
                paddingLeft: '2rem'
            }}>
                <div className="hero-content" style={{ maxWidth: '900px', color: '#fff', paddingLeft: '0' }}>
                    <div className="animate-fade-in" key={current}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.4rem 1.2rem',
                            border: '1px solid var(--ds-accent-main)',
                            color: 'var(--ds-accent-main)',
                            backgroundColor: 'rgba(255,102,0,0.1)',
                            borderRadius: '2rem',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            marginBottom: '2rem',
                            letterSpacing: '0.2em'
                        }}>
                            {slides[current].tag}
                        </span>

                        <h1 className="heading-1" style={{
                            color: '#ffffff',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            fontSize: '4.5rem',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}>
                            {slides[current].title}
                        </h1>

                        <p className="body-text large" style={{
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '3.5rem',
                            maxWidth: '700px',
                            fontSize: '1.25rem',
                            lineHeight: '1.8'
                        }}>
                            Ridgeway Services & Construction is a beacon of engineering excellence,
                            dedicated to reshaping the skylines and living spaces of Ontario with
                            unmatched precision and visionary design.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start' }}>
                            <a href="#team" className="btn" style={{
                                background: 'var(--ds-accent-main)',
                                color: '#fff',
                                border: 'none',
                                padding: '1.2rem 3rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                boxShadow: '0 10px 20px rgba(255,102,0,0.3)'
                            }}>Meet the Team</a>
                            <a href="/contact" className="btn outline" style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                padding: '1.2rem 3rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: '1.5rem' }}>
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: current === i ? '60px' : '12px',
                            height: '4px',
                            background: current === i ? 'var(--ds-accent-main)' : 'rgba(255,255,255,0.4)',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                            borderRadius: '2px'
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
