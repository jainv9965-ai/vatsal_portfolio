import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Vatsal<span className="text-gradient">.Jain</span>
        </Link>
        <div className="nav-links">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#career" className="nav-link">Career Journey</Link>
          <Link href="#portfolio" className="nav-link">Portfolio</Link>
          <Link href="mailto:jainv9965@gmail.com" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
