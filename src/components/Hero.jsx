"use client";
import { useState, useEffect } from 'react';

const slides = [
    {
        title: "Engineering Excellence with Precision",
        subtitle: "Ridgeway delivers high-impact construction solutions across the GTA with a focus on precision, sustainability, and luxury design.",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        tag: "Residential & Commercial"
    },
    {
        title: "Building the Future of Metropolitan Living",
        subtitle: "Crafting iconic skylines and premium living spaces through innovative engineering and visionary architectural expertise.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
        tag: "Modern Architecture"
    },
    {
        title: "Sustainable Construction & Custom Design",
        subtitle: "Leading the way in eco-conscious building practices, ensuring high-performance results that stand the test of time.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740",
        tag: "Design & Build"
    },
    {
        title: "High-Performance Engineering Solutions",
        subtitle: "Bridging the gap between ambitious design and masterful execution with unmatched technical precision and quality.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop",
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
                            <a href="/projects/residential" className="btn" style={{
                                background: 'var(--ds-accent-main)',
                                color: '#fff',
                                border: 'none',
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                boxShadow: '0 10px 20px rgba(50,51,132,0.3)'
                            }}>View Portfolio</a>
                            <a href="/contact" className="btn outline" style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>Get Started</a>
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
                    padding-top: 60px; /* Space for absolute header */
                }
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem !important;
                        margin-bottom: 1.25rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1.05rem !important;
                        margin-bottom: 2.5rem !important;
                        padding: 0 1rem;
                    }
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
                        padding: 0.9rem 2rem !important;
                    }
                    .hero-tag {
                        padding: 0.4rem 1rem !important;
                        font-size: 0.7rem !important;
                        margin-bottom: 1rem !important;
                    }
                }
                /* Targeted fix for very small screens like iPhone SE to prevent clutter */
                @media (max-width: 380px) and (max-height: 700px) {
                    .hero-content-inner {
                        padding-top: 40px;
                    }
                    .hero-title {
                        font-size: 2rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .hero-subtitle {
                        font-size: 0.95rem !important;
                        margin-bottom: 1.5rem !important;
                        line-height: 1.5 !important;
                    }
                    .hero-tag {
                        font-size: 0.65rem !important;
                        margin-bottom: 0.75rem !important;
                        padding: 0.3rem 0.8rem !important;
                    }
                    .hero-actions {
                        gap: 0.75rem !important;
                    }
                    .hero-actions .btn {
                        padding: 0.8rem 1.5rem !important;
                        font-size: 0.9rem !important;
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
