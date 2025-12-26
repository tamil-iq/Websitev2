import heroimage from "@/assets/careers/careers-hero.png";
import bgimage1 from "@/assets/about-us/about-us-left.png";
import bgimage2 from "@/assets/about-us/about-us-right.png";


export default function HeroSection() {
    return (

        <section className="relative w-full overflow-hidden flex items-center justify-center container max-w-full h-[90vh] -mt-16">
            {/* Background images with blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248,0.3), transparent)',
                        opacity: 0.7
                    }}
                />
                {/* Top left background image */}
                <div
                    className="absolute bottom-0 left-0 w-7/12 h-full opacity-70 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage1})`,
                        filter: 'blur(40px) brightness(1.1)'
                    }}
                />
                {/* Bottom right background image */}
                <div
                    className="absolute bottom-0 right-0 w-[1024px] h-[1040px] opacity-50 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage2})`,
                        transform: 'translate(10%, 0%)',
                        filter: 'blur(60px) brightness(1.1)'
                    }}
                />
               
            </div>

             <div className=" flex flex-col items-center justify-center gap-12">
                    <div className=" flex flex-col items-center">
                        <img src={heroimage} alt="Hero Image" className="w-1/3 h-fullobject-cover" />
                    </div>

                    <div className=" flex flex-col items-center justify-center gap-6">
                        <h1 className="text-5xl font-normal tracking-wide text-foreground">Careers at Somatiq</h1>
                        <p className="text-xl text-foreground font-extralight tracking-wide">
                            For Radiologists — Shape the Future of Radiology & AI
                        </p>
                        <span className="text-sm text-muted font-light tracking-wider max-w-xl">
                            Join a growing network of radiologists who are transforming diagnostics through innovation and collaboration. Whether you’re a seasoned radiologist or early in your career, Somatiq provides an ecosystem built by radiologists, for radiologists.
                        </span>
                        <span className="text-sm text-foreground font-light tracking-wide">Our mission: faster, smarter, and more fulfilling reporting.</span>
                    </div>
                </div>


        </section>
    )
}