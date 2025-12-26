import bgimage1 from "@/assets/teleradiology/hero-section.png";
import bgimage2 from "@/assets/teleradiology/hero-section.png";
export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center container max-w-full h-[80vh]">
            {/* Background images with blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top left background image */}
                <div
                    className="absolute top-0 left-0 w-7/12 h-full opacity-40 bg-cover bg-center blur-2xl"
                    style={{
                        backgroundImage: `url(${bgimage1})`,
                        transform: 'translate(-20%, -40%)'
                    }}
                />
                {/* Bottom right background image */}
                <div 
                    className="absolute bottom-0 right-0 w-7/12 h-full opacity-40 bg-cover bg-center blur-2xl"
                    style={{
                        backgroundImage: `url(${bgimage2})`,
                        transform: 'translate(40%, 0%)'
                    }}
                />
            </div>

            <div className="grid grid-cols-3 grid-rows-4 relative w-full h-full z-10">
                {/* Vertical gradient borders */}
                <div 
                    className="absolute top-0 bottom-0 left-1/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                <div 
                    className="absolute top-0 bottom-0 left-2/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div 
                    className="absolute left-0 right-0 top-1/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-2/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-3/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                {/* Intersection points */}
                {/* Vertical line 1 (1/3) intersections */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 2 (2/3) intersections */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                
                {/* Row 2 */}
                <div className="col-span-1"></div>
                <div className="flex flex-col items-center justify-center col-span-1">
                   <h1 className="text-4xl font-light text-white mb-3 tracking-wide text-center leading-normal">
                    24/7 Expert Teleradiology
                   </h1>
                   <p className="text-xl text-white/80 uppercase tracking-wider font-light">
                    TRUSTED. FAST. UNIFIED.
                   </p>
                </div>
                <div className="col-span-1"></div>
                
                {/* Row 3 - Center cell with title and subtitle */}
                <div className="col-span-1"></div>
                <div className="flex items-center justify-center col-span-1">
                    <p className="text-xl text-foreground leading-relaxed font-extralight text-center tracking-wide p-2">
                        Comprehensive emergency and subspecialty reporting for hospitals and diagnostic networks — delivered through a unified, secure AI enabled platform.
                    </p>
                </div>
                <div className="col-span-1"></div>
                
                {/* Row 4 - Center cell with description */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
            </div>
        </section>
    );
}