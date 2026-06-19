import React from 'react';

const projects = [
  { title: 'Project Alpha', desc: 'A placeholder for a future enterprise application.', tags: ['Strategy', 'Finance'] },
  { title: 'Project Beta', desc: 'An innovative approach to solving market challenges.', tags: ['Economics', 'Data Analysis'] },
  { title: 'Project Gamma', desc: 'Upcoming research publication on market trends.', tags: ['Research', 'Publication'] }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section container">
      <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        Future <span className="text-gradient">Portfolio</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: 1 }}>
              <h3 className="heading-md" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                {proj.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {proj.desc}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
              {proj.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--accent-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
