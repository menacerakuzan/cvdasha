import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Асистування',
    desc: 'Кваліфікована підтримка лікаря під час терапевтичних, хірургічних та ортопедичних процедур — з акцентом на точність та асептику.',
  },
  {
    num: '02',
    name: 'Підготовка кабінету',
    desc: 'Стерилізація інструментів, підготовка матеріалів та оснащення робочого місця відповідно до протоколів інфекційного контролю.',
  },
  {
    num: '03',
    name: 'Комунікація з пацієнтами',
    desc: 'Теплий і уважний підхід до кожного відвідувача — від запису і до виходу з кабінету, щоб знизити тривогу та підвищити довіру.',
  },
  {
    num: '04',
    name: 'Рентгенологія',
    desc: 'Виконання внутрішньоротових знімків та цифрова обробка рентгенограм для діагностики стоматологічних захворювань.',
  },
  {
    num: '05',
    name: 'Ведення документації',
    desc: 'Акуратне заповнення медичних карток, журналів стерилізації та облікових форм відповідно до стандартів клініки.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Послуги
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
