import { trackDemoRequest } from '@/lib/analytics';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  trackingSource?: string;
}

const DEMO_EMAIL = 'info@somatiq.ai';
const DEMO_SUBJECT = 'Demo Request - Somatiq Platform';
const DEMO_BODY = 'Hi Somatiq team,\n\nI would like to schedule a demo of your platform.\n\nPlease let me know your availability.\n\nThank you!';

export function AnimatedButton({ children, onClick, href, trackingSource = 'unknown' }: AnimatedButtonProps) {
  const handleClick = () => {
    // Track the conversion event
    trackDemoRequest(trackingSource);

    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    } else {
      // Default action: open demo request email
      window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(DEMO_BODY)}`;
    }
  };

  return (
    <div className="relative">
      <div className="relative rounded-lg">
        <div className="absolute inset-0 bg-[#006AE5]/70 z-10 blur-2xl w-[70%] mx-auto" />
        <div className="relative z-20 p-3">
          <button
            onClick={handleClick}
            className="px-9 py-4 text-[15px] bg-[#056EE7]/20 border border-[#056EE7]/40 font-semibold tracking-wider uppercase text-foreground rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            {children}
          </button>
        </div>
      </div>
    </div>
  );
}