interface LiveProjectButtonProps {
  className?: string;
}

export default function LiveProjectButton({ className }: LiveProjectButtonProps) {
  return (
    <button
      className={`rounded-full font-medium cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${className ?? ''}`}
      style={{
        color: '#D7E2EA',
        background: 'rgba(215,226,234,0.06)',
        backdropFilter: 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        border: '1px solid rgba(215,226,234,0.18)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)',
      }}
    >
      Переглянути
    </button>
  );
}
