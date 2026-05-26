import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const SOCIALS = [
  {
    label: 'Instagram',
    handle: '@dasha.odesa',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    handle: '@dasha.dental',
    href: 'https://tiktok.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    handle: '@dasha_odesa',
    href: 'https://t.me',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.29c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.931z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    handle: '+380 XX XXX XX XX',
    href: 'viber://chat',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.997 0C5.506 0 .236 5.07.236 11.324c0 3.338 1.49 6.353 3.87 8.43v3.91l3.77-1.992a12.07 12.07 0 0 0 4.12.714c6.492 0 11.762-5.07 11.762-11.324S18.489 0 11.997 0zm1.22 15.273c-.36.08-.726.12-1.094.12-3.79 0-6.876-2.986-6.876-6.67 0-.358.04-.712.118-1.054.516-2.237 2.528-3.9 4.92-3.9.38 0 .752.044 1.11.13 2.232.53 3.868 2.52 3.868 4.893 0 2.372-1.636 4.366-3.868 4.896l-.178.585z" />
      </svg>
    ),
  },
];

export default function ContactModal({ open, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="pointer-events-auto relative w-full max-w-md rounded-[32px] p-8 sm:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, rgba(182,0,168,0.06) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors cursor-pointer"
                aria-label="Закрити"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <h3
                className="hero-heading font-black uppercase leading-none text-center mb-2"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
              >
                Контакти
              </h3>
              <p className="text-[#D7E2EA]/50 text-center text-sm mb-8">
                Напиши мені
              </p>

              <div className="flex flex-col gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl px-5 py-4 group
                      text-[#D7E2EA] transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                    } as React.CSSProperties}
                  >
                    <span className="text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors">
                      {s.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{s.label}</span>
                      <span className="text-[#D7E2EA]/50 text-xs">{s.handle}</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-4 h-4 ml-auto text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/70 transition-colors">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
