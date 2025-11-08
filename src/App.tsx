import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhySupraLine } from './components/WhySupraLine';
import { ForYou } from './components/ForYou';
import { Quiz } from './components/Quiz';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <HowItWorks />
        <ForYou />
        <WhySupraLine />
        <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
