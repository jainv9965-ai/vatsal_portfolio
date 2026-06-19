import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CareerJourney from '@/components/CareerJourney';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <CareerJourney />
      <Portfolio />
      <Footer />
    </main>
  );
}
