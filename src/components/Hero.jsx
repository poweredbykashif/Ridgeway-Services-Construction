"use client";
import { useState, useEffect } from 'react';

const slides = [
    {
        title: "Engineering Excellence with Precision",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        tag: "Residential & Commercial"
    },
    {
        title: "Building the Future of Metropolitan Living",
        img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop",
        tag: "Modern Architecture"
    },
    {
        title: "Sustainable Construction & Custom Design",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
        tag: "Design & Build"
    },
    {
        title: "High-Performance Engineering Solutions",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop",
        tag: "Precision Detail"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="about-hero" style={{
            height: '95vh',
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
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${slide.img})`,
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
                alignItems: 'center', // Vertically centered
                justifyContent: 'flex-start',
                textAlign: 'left',
                paddingTop: '2rem' // Minimal padding for header clearance if needed
            }}>
                <div className="hero-content" style={{ maxWidth: '900px', color: '#fff', paddingLeft: '0', marginLeft: '0' }}>
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
                            letterSpacing: '0.2em',
                            textAlign: 'left'
                        }}>
                            {slides[current].tag}
                        </span>

                        <h1 className="heading-1" style={{
                            color: '#ffffff',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            fontSize: '4.5rem',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            textAlign: 'left'
                        }}>
                            {slides[current].title}
                        </h1>

                        <p className="body-text large" style={{
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '3.5rem',
                            maxWidth: '700px',
                            fontSize: '1.25rem',
                            lineHeight: '1.8',
                            textAlign: 'left'
                        }}>
                            Ridgeway delivers high-impact construction solutions across the GTA with a focus on precision, sustainability, and luxury design.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start' }}>
                            <a href="/projects/commercial" className="btn" style={{
                                background: 'var(--ds-accent-main)',
                                color: '#fff',
                                border: 'none',
                                padding: '1.2rem 3rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                boxShadow: '0 10px 20px rgba(255,102,0,0.3)'
                            }}>View Portfolio</a>
                            <a href="/contact" className="btn outline" style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                padding: '1.2rem 3rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>Get Started</a>
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
