"use client";
import { useRef, useState, useEffect } from 'react';
import { blogs as blogData } from '@/data/blogs';

export default function Blogs({ className = "" }) {
    const blogs = blogData.slice(0, 8); // Ensure exactly 8 insights
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }
        return () => ref?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = 405; // Card width (380) + gap (25)
            const scrollTo = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="blog" className={`blogs section-padding animate-fade-in ${className}`} style={{ backgroundColor: 'var(--ds-bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Knowledge Hub
                        </span>
                        <h2 className="heading-1">Latest Insights</h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                border: '1px solid var(--ds-border-strong)',
                                backgroundColor: canScrollLeft ? 'var(--ds-bg-primary)' : 'rgba(0,0,0,0.05)',
                                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.4rem',
                                transition: 'all 0.3s ease',
                                color: canScrollLeft ? 'var(--ds-text-primary)' : 'var(--ds-text-muted)',
                                opacity: canScrollLeft ? 1 : 0.5
                            }}
                            onMouseOver={(e) => {
                                if (canScrollLeft) {
                                    e.currentTarget.style.backgroundColor = 'var(--ds-accent-main)';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = 'var(--ds-accent-main)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (canScrollLeft) {
                                    e.currentTarget.style.backgroundColor = 'var(--ds-bg-primary)';
                                    e.currentTarget.style.color = 'var(--ds-text-primary)';
                                    e.currentTarget.style.borderColor = 'var(--ds-border-strong)';
                                }
                            }}
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                border: '1px solid var(--ds-border-strong)',
                                backgroundColor: canScrollRight ? 'var(--ds-bg-primary)' : 'rgba(0,0,0,0.05)',
                                cursor: canScrollRight ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.4rem',
                                transition: 'all 0.3s ease',
                                color: canScrollRight ? 'var(--ds-text-primary)' : 'var(--ds-text-muted)',
                                opacity: canScrollRight ? 1 : 0.5
                            }}
                            onMouseOver={(e) => {
                                if (canScrollRight) {
                                    e.currentTarget.style.backgroundColor = 'var(--ds-accent-main)';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = 'var(--ds-accent-main)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (canScrollRight) {
                                    e.currentTarget.style.backgroundColor = 'var(--ds-bg-primary)';
                                    e.currentTarget.style.color = 'var(--ds-text-primary)';
                                    e.currentTarget.style.borderColor = 'var(--ds-border-strong)';
                                }
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="blogs-slider"
                    style={{
                        display: 'flex',
                        gap: '2.5rem',
                        overflowX: 'auto',
                        paddingBottom: '2.5rem',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        paddingLeft: '2px', // Prevent shadow clipping
                        paddingTop: '10px' // Prevent lift clipping
                    }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .blogs-slider::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    {blogs.map((b, i) => (
                        <article key={i} className="blog-card" style={{
                            backgroundColor: 'var(--ds-bg-primary)',
                            borderRadius: 'var(--ds-radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--ds-shadow-sm)',
                            transition: 'all 0.4s ease',
                            border: '1px solid var(--ds-border-light)',
                            flex: '0 0 380px',
                            scrollSnapAlign: 'start',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = 'var(--ds-shadow-lg)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--ds-shadow-sm)';
                            }}>
                            <div className="blog-card-img" style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${b.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '240px',
                                flexShrink: 0
                            }} />
                            <div className="blog-card-content" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: 'var(--ds-accent-main)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{b.tag}</span>
                                <h3 className="heading-3" style={{ marginTop: '0.75rem', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '600' }}>{b.title}</h3>
                                <p className="body-text" style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--ds-text-secondary)' }}>{b.desc}</p>
                                <a href={`/blog/${b.slug}`} style={{
                                    color: 'var(--ds-accent-main)',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    Read Article <span>→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
