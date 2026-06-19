import React from 'react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>
          Economics &bull; Strategy &bull; Finance
        </h2>
        <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
          Building the Future of <br />
          <span className="text-gradient">Enterprise Meets Edgy</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
          I am Vatsal Jain, an Economics graduate from St. Stephen's College with a passion for driving growth, innovation, and strategic excellence across varied sectors.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#about" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>Discover My Journey</a>
        </div>
      </div>
    </section>
  );
}
