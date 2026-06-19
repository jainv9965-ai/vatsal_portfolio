import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem', marginTop: '4rem', background: 'rgba(5, 5, 5, 0.8)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <h2 className="heading-md" style={{ color: 'var(--accent-primary)' }}>Vatsal Jain</h2>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:jainv9965@gmail.com" className="nav-link">jainv9965@gmail.com</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <a href="tel:+919717180083" className="nav-link">+91-9717180083</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <a href="#" className="nav-link">LinkedIn</a>
        </div>
        
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '2rem' }}>
          &copy; {new Date().getFullYear()} Vatsal Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
