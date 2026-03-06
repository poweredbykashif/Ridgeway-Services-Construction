"use client";
import { useState, useEffect } from 'react';

const slides = [
    {
        title: "Engineering Excellence with Precision",
        img: "/images/slide1.png",
        tag: "Residential & Commercial"
    },
    {
        title: "Building the Future of Metropolitan Living",
        img: "/images/slide2.png",
        tag: "Modern Architecture"
    },
    {
        title: "Sustainable Construction & Custom Design",
        img: "/images/slide3.png",
        tag: "Design & Build"
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
        <section className="hero" style={{ height: '90vh', backgroundColor: '#000' }}>
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

            <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                <div className="hero-content" style={{ maxWidth: '900px', color: '#fff' }}>
                    <div className="animate-fade-in" key={current}>
                        <span style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid rgba(255,102,0,0.5)', color: '#ff6600', backgroundColor: 'rgba(255,102,0,0.1)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                            {slides[current].tag}
                        </span>
                        <h1 className="heading-1" style={{ color: '#ffffff', lineHeight: 1.1, textShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                            {slides[current].title}
                        </h1>
                        <p className="body-text large" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1.5rem', marginBottom: '2.5rem', maxWidth: '600px', fontSize: '1.25rem' }}>
                            Ridgeway delivers high-impact construction solutions across the GTA with a focus on precision, sustainability, and luxury design.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="/projects/commercial" className="btn" style={{ background: '#ff6600', color: '#fff', border: 'none', padding: '1rem 2.5rem', fontSize: '1rem' }}>View Portfolio</a>
                            <a href="/contact" className="btn outline" style={{ border: '1px solid #fff', color: '#fff', padding: '1rem 2.5rem', fontSize: '1rem' }}>Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div style={{ position: 'absolute', bottom: '2rem', right: '5%', zIndex: 20, display: 'flex', gap: '1rem' }}>
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: '40px',
                            height: '3px',
                            background: i === current ? '#ff6600' : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
