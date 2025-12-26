'use client';

import type { HTMLAttributes } from 'react';
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import FastMarquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn('relative w-full max-w-full overflow-x-hidden', className)}
    style={{ overflowX: 'hidden' }}
    {...(props as any)}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...(props as any)}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: 'left' | 'right';
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}: MarqueeFadeProps) => {
  // Gradient fades from background color at edge to transparent toward center
  // Using lower opacity to avoid blocking content
  const gradientStyle = side === 'left'
    ? {
        background: 'linear-gradient(to right, oklch(0 0 0) 0%, oklch(0 0 0 / 0.8) 30%, transparent 70%, transparent 0%)'
      }
    : {
        background: 'linear-gradient(to left, oklch(0 0 0) 0%, oklch(0 0 0 / 0.8) 30%, transparent 70%, transparent 0%)'
      };

  return (
    <div
      className={cn(
        'absolute top-0 bottom-0 z-[5] h-full w-[70%] pointer-events-none',
        side === 'left' ? 'left-0' : 'right-0',
        className
      )}
      style={gradientStyle}
      {...(props as any)}
    />
  );
};

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn('mx-2 flex-shrink-0 object-contain', className)}
    {...(props as any)}
  />
);
