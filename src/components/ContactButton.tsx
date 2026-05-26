interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ContactButton({ className, onClick }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-medium cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${className ?? ''}`}
      style={{
        color: '#D7E2EA',
        background: 'linear-gradient(135deg, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.25) 50%, rgba(190,76,0,0.2) 100%)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(182,0,168,0.45)',
        boxShadow: '0 4px 24px rgba(182,0,168,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}
    >
      Написати мені
    </button>
  );
}
