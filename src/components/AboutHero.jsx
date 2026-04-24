"use client";
import { useState, useEffect } from 'react';

const slides = [
    {
        title: "Building the Future with Precision",
        subtitle: "Ridgeway Services & Construction is a beacon of engineering excellence, dedicated to reshaping skylines with unmatched precision.",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        tag: "Our Legacy"
    },
    {
        title: "World Class Construction Services",
        subtitle: "Delivering high-performance residential and commercial developments that set new benchmarks for quality and sustainability.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
        tag: "Global Standards"
    },
    {
        title: "Innovative & Sustainable Designs",
        subtitle: "Bridging the gap between ambitious architectural vision and masterful execution with eco-conscious building practices.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740",
        tag: "Future Living"
    },
    {
        title: "Commercial & Residential Expertise",
        subtitle: "Specializing in premium living spaces and corporate environments that reflect sophistication and technical excellence.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop",
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
                alignItems: 'center', // Vertically centered
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div className="hero-content" style={{ maxWidth: '900px', color: '#fff', margin: '0 auto' }}>
                    <div className="animate-fade-in hero-content-inner" key={current}>
                        <span className="hero-tag" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#ffffff',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '100px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginBottom: '1.5rem'
                        }}>
                            {slides[current].tag}
                        </span>

                        <h1 className="heading-1 hero-title" style={{
                            color: '#ffffff',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}>
                            {slides[current].title}
                        </h1>

                        <p className="body-text hero-subtitle" style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            lineHeight: '1.6',
                            marginBottom: '3rem',
                            margin: '0 auto 3rem'
                        }}>
                            {slides[current].subtitle}
                        </p>

                        <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <a href="#team" className="btn" style={{
                                background: 'var(--ds-accent-main)',
                                color: '#fff',
                                border: 'none',
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                boxShadow: '0 10px 20px rgba(50,51,132,0.3)'
                            }}>Meet the Team</a>
                            <a href="/contact" className="btn outline" style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-content-inner {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .hero-actions {
                    justify-content: center;
                    display: flex;
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .hero-actions {
                        flex-direction: column;
                        width: 100%;
                        max-width: 320px;
                        margin: 0 auto;
                        gap: 1rem !important;
                    }
                    .hero-actions .btn {
                        width: 100%;
                        text-align: center;
                    }
                    .hero-tag {
                        padding: 0.3rem 0.8rem !important;
                        font-size: 0.65rem !important;
                        font-weight: 500 !important;
                        letter-spacing: 0.05em !important;
                    }
                }
            `}</style>

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
