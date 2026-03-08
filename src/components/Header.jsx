"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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

  const textColor = (scrolled || isLightPage) ? 'var(--ds-text-primary)' : '#fff';
  const subTextColor = (scrolled || isLightPage) ? 'var(--ds-text-secondary)' : 'rgba(255,255,255,0.7)';
  const bgColor = scrolled ? 'rgba(255, 255, 255, 0.95)' : (isLightPage ? 'rgba(255, 255, 255, 0.95)' : 'transparent');

  return (
    <header className="header" suppressHydrationWarning style={{
      position: 'fixed',
      width: '100%',
      transition: 'all 0.4s ease',
      backgroundColor: bgColor,
      backdropFilter: (scrolled || isLightPage) ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--ds-shadow-sm)' : 'none',
      borderBottom: (scrolled || isLightPage) ? '1px solid var(--ds-border-light)' : 'none',
      zIndex: 1000,
      padding: 0 // Clearinherited padding
    }}>
      <div className="header-inner container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '85px', // Consistent height for vertical centering
        padding: '0 var(--ds-spacing-md)'
      }}>
        <a href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', justifyContent: 'center' }}>
          <span className="logo" style={{
            lineHeight: 1,
            color: textColor,
            transition: 'color 0.4s ease'
          }}>RIDGEWAY</span>
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: subTextColor,
            marginTop: '0.25rem',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease'
          }}>
            Services & Construction
          </span>
        </a>

        <nav className="nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Home', 'About Us', 'Services', 'Projects', 'Blog'].map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : (item === 'About Us' ? '/about' : `/#${item.toLowerCase().replace(' ', '')}`)}
              className="nav-link"
              style={{
                color: textColor,
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
          padding: '0.65rem 1.6rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>Contact Us</a>
      </div>
    </header>
  );
}
