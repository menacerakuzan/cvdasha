import FadeIn from './FadeIn';

const JOBS = [
  {
    period: '2023 — 2024',
    duration: '1.5 роки',
    role: 'Головний асистент стоматолога',
    company: 'Platinum Dent',
    city: 'Одеса',
    tag: 'Підвищення',
    points: [
      'Координація роботи молодших асистентів та розподіл задач у зміні',
      'Асистування провідним лікарям під час імплантації, терапії та ортопедичних процедур',
      'Контроль якості стерилізації та ведення документації відповідно до стандартів клініки',
      'Навчання нових співробітників протоколам інфекційного контролю',
    ],
  },
  {
    period: '2023',
    duration: '6 місяців',
    role: 'Асистент стоматолога',
    company: 'Platinum Dent',
    city: 'Одеса',
    tag: 'Початок',
    points: [
      'Підготовка та стерилізація стоматологічних інструментів перед прийомом',
      'Асистування лікарю під час лікування карієсу, видалення та профілактичних процедур',
      'Ведення карток пацієнтів та первинний прийом відвідувачів',
      'Замовлення та облік витратних матеріалів',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Досвід
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {JOBS.map((job, i) => (
          <FadeIn key={i} delay={i * 0.15} y={40}>
            <div
              className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(182,0,168,0.05) 100%)',
                backdropFilter: 'blur(24px) saturate(160%)',
                WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >

              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[#D7E2EA]/40 font-light"
                    style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                  >
                    {job.period} · {job.city}
                  </span>
                  <h3
                    className="text-[#D7E2EA] font-semibold leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
                  >
                    {job.role}
                  </h3>
                  <span
                    className="text-[#D7E2EA]/40 font-light"
                    style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
                  >
                    {job.company}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {/* Tag */}
                  <span
                    className="rounded-full px-4 py-1.5 text-xs font-medium"
                    style={{
                      background: 'linear-gradient(123deg, rgba(182,0,168,0.25) 0%, rgba(118,33,176,0.2) 60%, rgba(190,76,0,0.15) 100%)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(182,0,168,0.35)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                      color: '#D7E2EA',
                    }}
                  >
                    {job.tag}
                  </span>
                  {/* Duration pill */}
                  <span
                    className="rounded-full px-4 py-1.5 text-xs font-light text-[#D7E2EA]/50"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(215,226,234,0.12)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    {job.duration}
                  </span>
                </div>
              </div>

              {/* Points */}
              <ul className="flex flex-col gap-2 mt-5">
                {job.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 text-[#B600A8] select-none"
                      style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', lineHeight: 'inherit' }}
                    >—</span>
                    <span
                      className="text-[#D7E2EA]/50 font-light leading-relaxed"
                      style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)' }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
