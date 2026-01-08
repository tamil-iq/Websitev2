"use client";

import React from "react";

interface AnimatedTextCycleProps {
  words?: string[];
  className?: string;
}

export function AnimatedTextCycle({
  words = ["Dictate.", "Review.", "Sign off."],
  className = ""
}: AnimatedTextCycleProps) {
  return (
    <div className={className}>
      <h2 className="tracking-tighter flex select-none flex-col text-left text-4xl font-extrabold leading-none sm:text-5xl md:text-6xl md:flex-row lg:flex-row">
        <span
          data-content={words[0]}
          className="before:animate-gradient-background-1 relative before:absolute before:inset-0 before:z-0 before:w-full before:px-2 before:text-foreground before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-1 from-gradient-1-start to-gradient-1-end bg-gradient-to-r bg-clip-text px-2 text-transparent">
            {words[0]}
          </span>
        </span>
        <span
          data-content={words[1]}
          className="before:animate-gradient-background-2 relative before:absolute before:inset-0 before:z-0 before:w-full before:px-2 before:text-foreground before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-2 from-gradient-2-start to-gradient-2-end bg-gradient-to-r bg-clip-text px-2 text-transparent">
            {words[1]}
          </span>
        </span>
        <span
          data-content={words[2]}
          className="before:animate-gradient-background-3 relative before:absolute before:inset-0 before:z-0 before:w-full before:px-2 before:text-foreground before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-3 from-gradient-3-start to-gradient-3-end bg-gradient-to-r bg-clip-text px-2 text-transparent">
            {words[2]}
          </span>
        </span>
      </h2>
    </div>
  );
}

export default AnimatedTextCycle;
