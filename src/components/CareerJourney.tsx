import React from 'react';

const experiences = [
  {
    role: "Co-Founder",
    company: "The Synopsis",
    date: "September 2025 - Present",
    desc: "A student-led initiative aimed at educating the youth about ongoing economic developments. Curated engaging content managing regular post schedules to push growth to 850+ impressions."
  },
  {
    role: "Operations Head",
    company: "Traders' Cup, IFSA",
    date: "June 2025 - July 2025",
    desc: "Oversaw end-to-end logistics of the world's largest student-led trading competition. Compiled a targeted database of 400+ global professors."
  },
  {
    role: "Finance Intern",
    company: "Vice Chancellor's Office, University of Delhi",
    date: "June 2025 - July 2025",
    desc: "Reviewed and approved expenditure bills, departmental budgets, ensuring transparent financial governance. Assisted with routine operational tasks."
  },
  {
    role: "Co-Founder",
    company: "BirdSewa",
    date: "April 2022 - April 2023",
    desc: "A non-profit project undertaken to give back to society. Led awareness generation and advocacy initiatives for bird safety."
  }
];

export default function CareerJourney() {
  return (
    <section id="career" className="section container">
      <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        Career <span className="text-gradient">Journey</span>
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>{exp.company}</h4>
              </div>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                {exp.date}
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
