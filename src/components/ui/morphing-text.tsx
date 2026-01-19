import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MorphingTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  highlightWord?: string;
  highlightClassName?: string;
}

// Characters to cycle through for the glitch effect
const glitchChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const medicalChars = '⬡⬢◯◉△▽□■●○◆◇';

export const MorphingText = ({
  text,
  className = '',
  delay = 0,
  duration = 2,
  highlightWord,
  highlightClassName = ''
}: MorphingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const chars = text.split('');
    const iterations = Math.floor(duration * 60); // 60fps
    const charsPerIteration = chars.length / iterations;
    let currentIteration = 0;
    let revealedCount = 0;

    const startTimeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        currentIteration++;
        revealedCount = Math.floor(currentIteration * charsPerIteration);

        const newText = chars.map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealedCount) return char;
          // Randomly pick glitch character
          const glitchSet = Math.random() > 0.5 ? glitchChars : medicalChars;
          return glitchSet[Math.floor(Math.random() * glitchSet.length)];
        }).join('');

        setDisplayText(newText);

        if (revealedCount >= chars.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsComplete(true);
        }
      }, 1000 / 60);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, text, delay, duration]);

  // Split text to highlight specific word
  const renderText = () => {
    if (!highlightWord || !isComplete) {
      return displayText || text.replace(/./g, ' ');
    }

    const parts = displayText.split(highlightWord);
    if (parts.length === 1) return displayText;

    return (
      <>
        {parts[0]}
        <span className={highlightClassName}>{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  };

  return (
    <motion.span
      ref={ref}
      className={`${className} font-mono`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        fontFamily: isComplete ? 'inherit' : 'monospace',
        transition: 'font-family 0.3s ease'
      }}
    >
      {renderText()}
    </motion.span>
  );
};

// Typewriter effect with cursor
interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export const TypewriterText = ({
  text,
  className = '',
  delay = 0,
  speed = 50,
  cursor = true
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Blink cursor a few times then hide
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {cursor && showCursor && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  );
};

// Scramble text on hover
interface ScrambleTextProps {
  text: string;
  className?: string;
}

export const ScrambleText = ({ text, className = '' }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = text.length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 3) return text[index];
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }).join('')
      );

      iteration++;
      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 30);
  };

  return (
    <span
      className={`${className} cursor-pointer`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};

export default MorphingText;
