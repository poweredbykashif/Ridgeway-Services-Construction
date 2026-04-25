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
            const cardWidth = container.querySelector('.blog-card')?.offsetWidth || 380;
            const gap = 40; // 2.5rem
            const scrollAmount = cardWidth + gap;
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
                <div className="blog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div className="blog-title-area">
                        <span style={{ color: 'var(--ds-accent-main)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Knowledge Hub
                        </span>
                        <h2 className="heading-1">Latest Insights</h2>
                    </div>

                    <div className="blog-nav-arrows" style={{ display: 'flex', gap: '1.5rem' }}>
                        <button
                            className="blog-nav-btn prev"
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
                        >
                            ←
                        </button>
                        <button
                            className="blog-nav-btn next"
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
                    {blogs.map((b, i) => (
                        <article key={i} className="blog-card" style={{
                            backgroundColor: 'var(--ds-bg-primary)',
                            borderRadius: 'var(--ds-radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--ds-shadow-sm)',
                            transition: 'all 0.4s ease',
                            border: '1px solid var(--ds-border-light)',
                            scrollSnapAlign: 'start',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div className="blog-card-img" style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${b.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '240px',
                                flexShrink: 0
                            }} />
                            <div className="blog-card-content" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
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
            <style jsx>{`
                .blogs-slider::-webkit-scrollbar {
                    display: none;
                }
                
                .blog-card {
                    flex: 0 0 calc((100% - 5rem) / 3);
                    min-width: 320px;
                }

                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--ds-shadow-lg);
                }

                .blog-nav-btn:not(:disabled):hover {
                    background-color: var(--ds-accent-main) !important;
                    color: #fff !important;
                    border-color: var(--ds-accent-main) !important;
                }

                @media (max-width: 1024px) {
                    .blog-card {
                        flex: 0 0 calc((100% - 2.5rem) / 2) !important;
                    }
                }

                @media (max-width: 768px) {
                    .blog-header {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 2rem;
                    }
                    .blog-card {
                        flex: 0 0 85% !important;
                        min-width: 300px !important;
                    }
                    .blog-title-area {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                
                @media (max-width: 600px) {
                    .blog-card {
                        flex: 0 0 100% !important;
                    }
                }
            `}</style>
        </section>
    );
}
