"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" style={{
      position: 'fixed',
      width: '100%',
      transition: 'all 0.4s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--ds-shadow-sm)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ds-border-light)' : 'none',
      zIndex: 1000
    }}>
      <div className="header-inner" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <a href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span className="logo" style={{
            lineHeight: 1,
            color: scrolled ? 'var(--ds-text-primary)' : (scrolled ? 'var(--ds-text-primary)' : '#fff'),
            transition: 'color 0.4s ease'
          }}>RIDGEWAY</span>
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: scrolled ? 'var(--ds-text-secondary)' : 'rgba(255,255,255,0.7)',
            marginTop: '0.25rem',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease'
          }}>
            Services & Construction
          </span>
        </a>

        <nav className="nav" style={{ display: 'flex', gap: '2.5rem' }}>
          {['Home', 'About Us', 'Services', 'Projects', 'Blog'].map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : (item === 'About Us' ? '/about' : `/#${item.toLowerCase().replace(' ', '')}`)}
              className="nav-link"
              style={{
                color: scrolled ? 'var(--ds-text-primary)' : '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="/contact" className="btn" style={{
          background: '#ff6600',
          color: '#fff',
          borderRadius: '2rem',
          padding: '0.7rem 1.8rem',
          fontSize: '0.9rem',
          boxShadow: '0 4px 15px rgba(255,102,0,0.3)'
        }}>Contact Us</a>
      </div>
    </header>
  );
}
