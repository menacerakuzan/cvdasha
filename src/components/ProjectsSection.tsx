import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    name: 'Терапевтична стоматологія',
    category: 'Клінічна практика',
    col1img1: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=90',
    col1img2: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=90',
    col2img:  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=90',
  },
  {
    num: '02',
    name: 'Естетична стоматологія',
    category: 'Особистий досвід',
    col1img1: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&q=90',
    col1img2: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=90',
    col2img:  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=90',
  },
  {
    num: '03',
    name: 'Дитяча стоматологія',
    category: 'Клінічна практика',
    col1img1: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=90',
    col1img2: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=90',
    col2img:  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=90',
  },
];

const CARD_WIDTH = 88; // vw per card
const GAP = 2; // vw between cards

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Total horizontal travel: shift all cards left so last card is visible
  const totalShift = (PROJECTS.length - 1) * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${totalShift}vw`]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
      // Height = sticky viewport + scrollable distance for each extra card
      style={{ height: `${100 + PROJECTS.length * 120}vh` }}
    >
      {/* Sticky container that holds the horizontal strip */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center
              pt-8 sm:pt-10 mb-4 sm:mb-6 flex-shrink-0"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Роботи
          </h2>
        </FadeIn>

        {/* Horizontal sliding strip */}
        <div className="flex-1 min-h-0 flex items-stretch overflow-visible px-5 sm:px-8 md:px-10 pb-6 sm:pb-8">
          <motion.div
            className="flex gap-[2vw] will-change-transform h-full"
            style={{ x }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.num}
                className="flex-shrink-0 rounded-[40px] sm:rounded-[50px] relative overflow-hidden
                  p-4 sm:p-6 md:p-8 flex flex-col h-full"
                style={{
                  width: `${CARD_WIDTH}vw`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(182,0,168,0.04) 100%)',
                  backdropFilter: 'blur(24px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                  border: '1px solid rgba(255,255,255,0.11)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.13)',
                }}
              >
                {/* Shimmer top edge */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                />

                {/* Top row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span
                    className="font-black text-[#D7E2EA] leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
                  >
                    {project.num}
                  </span>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span
                      className="text-[#D7E2EA] font-light uppercase tracking-widest truncate"
                      style={{ fontSize: 'clamp(0.65rem, 1vw, 0.9rem)', opacity: 0.6 }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                      style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}
                    >
                      {project.name}
                    </span>
                  </div>
                  <LiveProjectButton />
                </div>

                {/* Image grid */}
                <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
                  <div className="flex flex-col gap-3 sm:gap-4 min-h-0" style={{ width: '40%' }}>
                    <img
                      src={project.col1img1}
                      alt={project.name}
                      loading="lazy"
                      className="w-full object-cover rounded-[20px] sm:rounded-[28px] min-h-0"
                      style={{ flex: '0 0 40%' }}
                    />
                    <img
                      src={project.col1img2}
                      alt={project.name}
                      loading="lazy"
                      className="w-full object-cover rounded-[20px] sm:rounded-[28px] min-h-0"
                      style={{ flex: '1 1 0' }}
                    />
                  </div>
                  <div className="min-h-0" style={{ width: '60%' }}>
                    <img
                      src={project.col2img}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[20px] sm:rounded-[28px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint on first view */}
        <div className="flex justify-center pb-6 flex-shrink-0">
          <span
            className="text-[#D7E2EA]/30 uppercase tracking-widest font-light"
            style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)' }}
          >
            скролюй щоб побачити більше →
          </span>
        </div>
      </div>
    </section>
  );
}
