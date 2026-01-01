import React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  bgColor?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = 'horizontal',
  bgColor = 'bg-linear-to-r from-transparent via-zinc-500 dark:via-zinc-100/40 to-transparent dark:from-zinc-900 dark:to-zinc-900',
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-full',
        bgColor,
        orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px',
        className
      )}
      {...props}
    />
  );
};
