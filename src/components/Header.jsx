"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const isLightPage = mounted && !isHomePage;

  const textColor = (scrolled || isLightPage || isMenuOpen) ? 'var(--ds-text-primary)' : '#fff';
  const subTextColor = (scrolled || isLightPage || isMenuOpen) ? 'var(--ds-text-secondary)' : 'rgba(255,255,255,0.7)';
  const bgColor = (scrolled || isMenuOpen) ? 'rgba(255, 255, 255, 0.98)' : (isLightPage ? 'rgba(255, 255, 255, 0.98)' : 'transparent');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/#blog' },
  ];

  return (
    <header className="header" suppressHydrationWarning style={{
      position: 'fixed',
      width: '100%',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: bgColor,
      backdropFilter: (scrolled || isLightPage || isMenuOpen) ? 'blur(15px)' : 'none',
      boxShadow: (scrolled || isMenuOpen) ? 'var(--ds-shadow-sm)' : 'none',
      borderBottom: (scrolled || isLightPage || isMenuOpen) ? '1px solid var(--ds-border-light)' : 'none',
      zIndex: 1000,
      padding: 0
    }}>
      <div className="header-inner container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? '75px' : '90px',
        padding: '0 var(--ds-spacing-md)',
        transition: 'height 0.4s ease'
      }}>
        <a href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', justifyContent: 'center', zIndex: 1100 }}>
          <span className="logo" style={{
            lineHeight: 1,
            color: textColor,
            transition: 'color 0.4s ease',
            fontSize: '1.4rem'
          }}>RIDGEWAY</span>
          <span style={{
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: subTextColor,
            marginTop: '0.2rem',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease',
            fontWeight: '600'
          }}>
            Services & Construction
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav desktop-only" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              style={{
                color: textColor,
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/contact" className="btn desktop-only" style={{
            padding: '0.7rem 1.8rem',
            fontSize: '0.85rem',
            fontWeight: '600',
            borderRadius: '4px'
          }}>Contact Us</a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 1100,
              padding: '10px'
            }}
            className="mobile-toggle"
          >
            <div style={{ width: '25px', height: '2px', backgroundColor: textColor, transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <div style={{ width: '25px', height: '2px', backgroundColor: textColor, transition: '0.3s', opacity: isMenuOpen ? 0 : 1 }} />
            <div style={{ width: '25px', height: '2px', backgroundColor: textColor, transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--ds-bg-primary)',
        zIndex: 1050,
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        transition: 'all 0.4s ease'
      }}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--ds-text-primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="/contact" 
          onClick={() => setIsMenuOpen(false)}
          className="btn" 
          style={{ padding: '1rem 3rem', marginTop: '1rem' }}
        >
          Contact Us
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
