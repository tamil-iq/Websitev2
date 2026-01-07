interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function AnimatedButton({ children, onClick }: AnimatedButtonProps) {
  return (
    <div className="relative">
      <div className="relative rounded-lg">
        <div className="absolute inset-0 bg-[#006AE5]/70 z-10 blur-2xl w-[70%] mx-auto" />
        <div className="relative z-20 p-3">
          <button
            onClick={onClick}
            className="px-9 py-4 text-[15px] bg-[#056EE7]/20 border border-[#056EE7]/40 font-semibold tracking-wider uppercase text-foreground rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            {children}
          </button>
        </div>
      </div>
    </div>
  );
}