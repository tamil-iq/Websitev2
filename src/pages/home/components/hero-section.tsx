
import { AnimatedButton } from '@/components/common/animated-button';
import heroimage from "@/assets/homepage/hero-image.png";

type HeroSectionProps = {
  loading?: boolean;
};

export const HeroSectionSkeleton = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.16),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-pulse">
            <div className="h-6 w-40 rounded-full bg-white/10" />
            <div className="mt-5 h-12 w-full max-w-xl rounded-xl bg-white/10" />
            <div className="mt-3 h-12 w-full max-w-lg rounded-xl bg-white/10" />

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full max-w-xl rounded bg-white/10" />
              <div className="h-4 w-full max-w-lg rounded bg-white/10" />
              <div className="h-4 w-full max-w-md rounded bg-white/10" />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="h-10 w-36 rounded-md bg-white/10" />
              <div className="h-10 w-40 rounded-md bg-white/10" />
            </div>
          </div>

          <div className="animate-pulse">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-4/3 w-full rounded-xl bg-white/10" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = ({ loading }: HeroSectionProps) => {
  if (loading) return <HeroSectionSkeleton />;

  return (
   <section className="relative w-full overflow-hidden bg-black h-[80vh]">
  <div 
    className="pointer-events-none absolute inset-0"
    style={{
      background: 'linear-gradient(to bottom, black 0%, var(--background-gradient) 100%)',
      opacity: 0.20
    }}
  />
  
  <div className="relative w-full max-w-7xl mx-24 px-4 pt-24 sm:px-6 lg:px-8 z-10">
    <div>
      <div>
        <h1 className="mt-5 text-4xl font-normal tracking-wide text-foreground sm:text-5xl">
          One Intelligent platform for all <br/>your Diagnostic Imaging
        </h1>
  
        <p className="mt-6 max-w-xl text-sm tracking-wider leading-relaxed text-muted font-light ">
          Unified RIS-PACS with AI-enabled workflows seamlessly connecting Radiologists, Clinicians and Patients
        </p>
  
        <div className="mt-10 flex flex-col items-start gap-4">
          <AnimatedButton onClick={() => console.log('Schedule demo clicked')}>
            schedule a demo
          </AnimatedButton>
          <span className="text-sm text-muted tracking-wide font-extralight">Trusted by Bengaluru's largest imaging chain</span>
        </div>
      </div>
    </div>
  </div>
  
  <img 
    src={heroimage} 
    alt="" 
    className="absolute bottom-0 right-0 left-14 top-1/4 w-full h-auto object-cover"
    style={{ transform: 'translateY(10%)' }}
  />
</section>
  );
};

export default HeroSection;