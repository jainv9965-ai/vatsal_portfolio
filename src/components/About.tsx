import React from 'react';

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        About <span className="text-gradient">Me</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Academic Profile</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>B.A. (Hons) Economics</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>St. Stephen's College, University of Delhi &bull; 2024-25</div>
              <div style={{ marginTop: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>9.09 CGPA</div>
            </li>
            <li>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Grade XII (CBSE)</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>The Heritage School, Rohini</div>
              <div style={{ marginTop: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>97.5%</div>
            </li>
          </ul>
        </div>
        
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Scholastic Achievements</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.8)', paddingLeft: '1.5rem' }}>
            <li>Achieved <strong>AIR 1</strong> in Indraprastha University CET for B.Com (Hons).</li>
            <li>Scored <strong>200/200</strong> in Accountancy, English, and Business Studies in CUET.</li>
            <li>Top 10% Champion Scholar at the Beijing Global Round of World Scholar's Cup 2019.</li>
            <li>Ranked 1 in Delhi State in the International Olympiad of English Language 2020.</li>
            <li>Conducted statistical research on the impact of various factors on startup growth under Professor Poonam Kalra.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
