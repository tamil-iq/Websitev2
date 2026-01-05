import { cn } from "@/lib/utils";
import { TrustBadge } from "@/components/common/trust-badge";

export function HeroSectionMobile() {
  return (
    <div className="relative flex h-[70vh] w-full items-start py-40 justify-center bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_0px),linear-gradient(to_bottom,#262626_1px,transparent_0px)]",
          "[mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_60%)]",
        )}
      />
      {/* Blur overlay for the remaining area */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="relative z-20 text-center px-4">
        <TrustBadge description="TRUSTED. FAST. UNIFIED."/>
        <h2 className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text py-8 text-3xl font-bold text-transparent sm:text-6xl">
          24/7 Expert Teleradiology
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted font-extralight">
          Comprehensive emergency and subspecialty reporting for hospitals and diagnostic networks — delivered through a unified, secure AI enabled platform.
        </p>
      </div>
    </div>
  );
}
