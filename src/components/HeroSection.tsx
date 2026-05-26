import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import ContactModal from './ContactModal';

const NAV_LINKS = ['Про мене', 'Досвід', 'Послуги', 'Роботи'];
const NAV_IDS   = ['about', 'experience', 'services', 'projects'];

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section
        className="h-screen flex flex-col relative"
        style={{ overflowX: 'clip' }}
      >
        {/* Navbar */}
        <FadeIn delay={0} y={-20}>
          <nav
            className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 pb-4 md:pb-5
              sticky top-0 z-40 transition-all duration-500"
            style={scrolled ? {
              backdropFilter: 'blur(20px) saturate(160%)',
              WebkitBackdropFilter: 'blur(20px) saturate(160%)',
              background: 'rgba(12,12,12,0.75)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            } : {}}
          >
            {NAV_LINKS.map((link, i) => (
              <button
                key={link}
                onClick={() => {
                  const el = document.getElementById(NAV_IDS[i]);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                  text-sm md:text-lg lg:text-[1.4rem]
                  transition-opacity duration-200 hover:opacity-70
                  bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            ))}
          </nav>
        </FadeIn>

        {/* Hero Heading — two lines so it fits any screen */}
        <div className="overflow-hidden px-4 md:px-8">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-[0.92] w-full
                mt-4 sm:mt-2 md:-mt-2"
              style={{ fontSize: 'clamp(3.5rem, 13.5vw, 14rem)' }}
            >
              <span className="block">Привіт,</span>
              <span className="block">я Даша</span>
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end flex-1 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
                max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              асистент стоматолога з Одеси — турбота про кожну посмішку
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton onClick={() => setModalOpen(true)} />
          </FadeIn>
        </div>

        {/* Portrait */}
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10
            w-[160px] sm:w-[210px] md:w-[260px] lg:w-[300px]
            top-1/2 -translate-y-1/2
            sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/sticker.webp"
              alt="Даша — асистент стоматолога"
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
