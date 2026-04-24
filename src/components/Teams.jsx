"use client";
import { useRef, useState, useEffect } from 'react';

export default function Teams() {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.querySelector('.team-premium-card')?.offsetWidth || 300;
            const gap = 24; // 1.5rem
            const scrollAmount = cardWidth + gap;
            
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }
        return () => ref?.removeEventListener('scroll', handleScroll);
    }, []);

    // Names and roles from the reference image
    const team = [
        {
            name: "Yomi Denzel",
            role: "E-Commerce 2.0",
            img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1000&auto=format&fit=crop",
            bio: "A prominent entrepreneur in the E-commerce field. He is known for sharing his expertise through various platforms, helping thousands start their own online businesses."
        },
        {
            name: "Timothée Moiroux",
            role: "Investissement Immobilier",
            img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop",
            bio: "A dedicated real estate investor who transitioned from medical studies to focus on his business career, building successful financial investment companies."
        },
        {
            name: "David Sequiera",
            role: "Closing",
            img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop",
            bio: "A highly skilled closer specializing in high-ticket sales. His expertise lies in understanding human psychology and providing solutions for growth."
        },
        {
            name: "Manuel Ravier",
            role: "Investissement Immobilier",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            bio: "A visionary real estate investor and co-founder of Investissement Locatif. He is committed to making property investment accessible and profitable."
        },
        {
            name: "Sarah Jenkins",
            role: "Lead Architect",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
            bio: "Expert in sustainable urban design with over 15 years of experience in metropolitan developments."
        },
        {
            name: "Marcus Thorne",
            role: "Structural Engineer",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            bio: "Specializes in high-rise structural integrity and innovative building materials for luxury projects."
        }
    ];

    return (
        <section id="team" className="team-section section-padding">
            {/* Subtle background arc/ring */}
            <div className="team-bg-accent" />

            <div className="team-header-container">
                <h2 className="team-main-heading">Partnered with most of the</h2>
                <h3 className="team-sub-heading">top people at each industry</h3>
            </div>

            <div className="team-carousel-wrapper">
                {/* Navigation arrows */}
                <button className="carousel-nav-btn prev" onClick={() => scroll('left')}>
                    <span>&lsaquo;</span>
                </button>

                <div ref={scrollRef} className="team-grid-slider">
                    {team.map((member, i) => (
                        <div key={i} className="team-premium-card">
                            <div className="team-card-image-wrapper">
                                <img src={member.img} alt={member.name} className="team-card-image" />
                                <div className="team-card-overlay">
                                    <h4 className="team-member-name">{member.name}</h4>
                                    <p className="team-member-role">{member.role}</p>
                                </div>
                            </div>

                            {/* Hover reveal layer */}
                            <div className="team-card-hover-info">
                                <div className="hover-top">
                                    <h4 className="hover-name">{member.name}</h4>
                                    <p className="hover-role">{member.role}</p>
                                </div>
                                <div className="hover-bottom">
                                    <p className="hover-bio">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-nav-btn next" onClick={() => scroll('right')}>
                    <span>&rsaquo;</span>
                </button>
            </div>

            {/* Bottom progress indicator */}
            <div className="team-progress-container">
                <div className="team-progress-bar">
                    <div className="team-progress-active" style={{ width: `${Math.max(10, scrollProgress)}%` }} />
                </div>
            </div>
        </section>
    );
}
