import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhySupraLine } from './components/WhySupraLine';
import { ForYou } from './components/ForYou';
import { Quiz } from './components/Quiz';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const handleOpenQuiz = () => setIsQuizOpen(true);
  const handleCloseQuiz = () => setIsQuizOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero onOpenQuiz={handleOpenQuiz} />
        <HowItWorks />
        <ForYou />
        <WhySupraLine />
        <Quiz isOpen={isQuizOpen} onOpen={handleOpenQuiz} onClose={handleCloseQuiz} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
