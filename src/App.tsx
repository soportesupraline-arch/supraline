import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { HowItWorks } from './components/HowItWorks';
import { Ecosystem } from './components/Ecosystem';
import { Events } from './components/Events';
import { ObjectFeature } from './components/ObjectFeature';
import { WhySupra } from './components/WhySupra';
import { Quiz } from './components/Quiz';
import { Footer } from './components/Footer';

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    if (quizOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [quizOpen]);

  return (
    <div className="min-h-screen bg-white text-[#0C3754]">
      <Nav onQuizOpen={() => setQuizOpen(true)} />

      <main>
        <Hero onQuizOpen={() => setQuizOpen(true)} />
        <Marquee />
        <HowItWorks />
        <Ecosystem />
        <Events />
        <ObjectFeature />
        <WhySupra />
        <Quiz
          isOpen={quizOpen}
          onOpen={() => setQuizOpen(true)}
          onClose={() => setQuizOpen(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
