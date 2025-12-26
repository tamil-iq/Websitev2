import ProfileImage from "@/assets/about-us/team/viswa.png";
import ProfileImage2 from "@/assets/about-us/team/naveen.png";

const stats = [
    {
        value: "10+",
        label: "Diagnostic centres",
        sublabel: "use Somatiq worldwide",
    },
    {
        value: "1000+",
        label: "Patients impacted per day",
        sublabel: "(in just a month)",
    },
    {
        value: "20+",
        label: "Radiologists connected",
        sublabel: "in our network",
    },
];

function StatsSection() {
    return (
        <section className="relative w-full overflow-hidden container max-w-full h-[70vh] -mt-16">
            <div className="grid grid-cols-3 grid-rows-3 relative w-full h-full z-10">
                {/* Vertical gradient borders */}
                <div
                    className="absolute top-0 bottom-0 left-1/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                <div
                    className="absolute top-0 bottom-0 left-2/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 top-1/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 25%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 top-2/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 25%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                {/* Intersection points */}
                {/* Vertical line 1 (1/3) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '33.33%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '66.66%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 2 (2/3) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '33.33%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '66.66%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>

                {/* Row 2 */}
                <div className="col-span-1"></div>
                <div className="col-span-1 flex items-center justify-center">
                    <p className="text-xl text-muted leading-relaxed font-extralight text-center tracking-wide p-2">
                        Built by Radiologists and Engineers by blending frontline radiology practice with deep expertise in healthcare AI and imaging informatics. Our mission is to help radiologists to see clearer, diagnose with confidence and reduce cognitive burden.
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
        </section>
    )
}
function StatsDisplay() {
    return (
        <section className="relative w-full py-16 pt-4 px-4 -mt-24">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-8 py-6">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base tracking-wide font-light text-foreground mb-1">
                                {stat.label}
                            </span>
                            {stat.sublabel && (
                                <span className="text-xs md:text-sm text-muted font-extralight tracking-wide">
                                    {stat.sublabel}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TeamSection() {
    return (
        <section className="relative w-full overflow-hidden container max-w-6xl mx-auto h-[70vh] mt-52">
            <div className="container mx-auto mb-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Team behind SOMATIQ</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 relative h-full z-10" style={{ gridTemplateRows: '2fr 0.5fr 2.5fr' }}>
                {/* Vertical gradient borders */}
                {/* Left border */}
                <div
                    className="absolute top-0 bottom-0 left-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Center border */}
                <div
                    className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Right border */}
                <div
                    className="absolute top-0 bottom-0 right-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '40%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '50%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                {/* Intersection points */}
                {/* Left border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Center vertical line (1/2) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Right border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1 flex items-center">
                    <p className="text-xl text-foreground leading-relaxed font-extralight text-center tracking-wide">"SOMATIQ is all about modernizing radiology infrastructure through intelligent software, making diagnostics more accessible, efficient, and clinically impactful."</p>
                </div>
                <div className="col-span-1 flex items-end gap-4 pb-10">
                    <div className="flex flex-col gap-4 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-1 "></div>
                <div className="col-span-1 "></div>

                {/* Row 3 */}
                <div className="col-span-1 flex items-start">
                    <div className="flex flex-col gap-4 pt-10 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage2} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Naveen K</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">Co-Founder & Chief AI Officer</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Technologist and entrepreneur transitioning from agriculture to healthcare AI. Co-founded an AI startup acquired by a major teleradiology provider, scaling the AI team to over 50 members. At Somatiq, he shapes our RIS-PACS platform's AI backbone.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 px-8 pt-10">
                    <p className="text-xl text-foreground font-extralight tracking-wide">“Technology should empower clinicians with intelligence and efficiency, while staying invisible in the workflow. If our product makes radiologists smile, we win.”</p>
                </div>
            </div>
        </section>
    )
}

function TechnicalAdvisorSection() {
    return (
        <section className="relative w-full overflow-hidden container max-w-6xl mx-auto h-[70vh] mt-52">
            <div className="container mx-auto mb-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Our Technical Advisors</h2>
                </div>
            </div>

            <div className="grid grid-cols-2 relative h-full z-10" style={{ gridTemplateRows: '2fr 0.5fr 2.5fr' }}>
                {/* Vertical gradient borders */}
                {/* Left border */}
                <div
                    className="absolute top-0 bottom-0 left-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Center border */}
                <div
                    className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Right border */}
                <div
                    className="absolute top-0 bottom-0 right-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '40%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '50%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                {/* Intersection points */}
                {/* Left border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Center vertical line (1/2) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Right border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1 flex items-end pb-10">
                    <div className="flex flex-col gap-4 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex items-end gap-4 pb-10">
                    <div className="flex flex-col gap-4 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-1 "></div>
                <div className="col-span-1 "></div>

                {/* Row 3 */}
                <div className="col-span-1 pt-10 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
                <div className="col-span-1 pt-10 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function MedicalAdvisorSection() {
    return (
        <section className="relative w-full overflow-hidden container max-w-6xl mx-auto h-[70vh] mt-52">
        <div className="container mx-auto mb-10">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Our Medical Advisors</h2>
            </div>
        </div>

        <div className="grid grid-cols-2 relative h-full z-10" style={{ gridTemplateRows: '2fr 0.5fr 2.5fr' }}>
            {/* Vertical gradient borders */}
            {/* Left border */}
            <div
                className="absolute top-0 bottom-0 left-0 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Center border */}
            <div
                className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Right border */}
            <div
                className="absolute top-0 bottom-0 right-0 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Horizontal gradient borders */}
            <div
                className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                style={{
                    top: '40%',
                    background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                }}
            />
            <div
                className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                style={{
                    top: '50%',
                    background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                }}
            />
            {/* Intersection points */}
            {/* Left border intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '0%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '0%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Center vertical line (1/2) intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Right border intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '100%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Row 1 */}
            <div className="col-span-1 flex items-end pb-10">
                <div className="flex flex-col gap-4 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-end gap-4 pb-10">
                <div className="flex flex-col gap-4 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-1 "></div>
            <div className="col-span-1 "></div>

            {/* Row 3 */}
            <div className="col-span-1 pt-10 px-8">
                <div className="profile-section flex items-center gap-4">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                    </div>
                    <div className="profile-name flex flex-col gap-1">
                        <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                        <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                    </div>
                </div>
                <div className="responsibility-section">
                    <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                </div>
            </div>
            <div className="col-span-1 pt-10 px-8">
                <div className="profile-section flex items-center gap-4">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                    </div>
                    <div className="profile-name flex flex-col gap-1">
                        <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                        <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                    </div>
                </div>
                <div className="responsibility-section">
                    <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                </div>
            </div>
        </div>
    </section>
    )
}


export default function FeatureSection() {
    return (
        <div>
            <StatsSection />
            <StatsDisplay />
            <TeamSection />
            <TechnicalAdvisorSection />
            <MedicalAdvisorSection />
        </div>
    )
}