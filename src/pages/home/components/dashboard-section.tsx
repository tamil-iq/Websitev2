import dashboard from "@/assets/homepage/dashboard-monitoring.png";
import portal from "@/assets/homepage/patient-engagement-portal.png";
import metrics from "@/assets/homepage/metrics.png";
import rates from "@/assets/homepage/rates.png";
import chatui from "@/assets/homepage/chat-ui.png";
import scanreports from "@/assets/homepage/scan-reports.png";
import { cn } from "@/lib/utils";
import { ShieldCheck, UserCog, Hospital, Headset } from "lucide-react";
import { TestimonialWithMarquee } from "@/components/ui/testtimonial-with-marquee"
import { useEffect, useRef, useState } from "react"


const metricsData = [
  {
    label: "Radiologist Productivity",
    description: "Track read volume, TAT, and SLA performance. Balance workloads before bottlenecks form.",
    image: metrics,
  },
  {
    label: "Equipment Utilisation",
    description: "Occupancy, idle time, and capacity by modality. Maximize throughput and ROI.",
    image: rates,
  },
  {
    label: "Patient Portal",
    description: "Reports patients can actually understand. AI-powered explanations in plain language.",
    image: "",
  },
  {
    label: "Multi-Site Coordination",
    description: "One dashboard for your entire network. Share studies, balance loads, maintain standards.",
    image: "",
  },
]

const portalData = [
  {
    label: "Secure Instant Scans & Reports",
    description: "Patients can securely view their collection of all their medical reports and scans from anywhere on any device instantly.",
    image: scanreports,
  },
  {
    label: "AI powered Somatiq Ally",
    description: "Translating complex medical data into simple, clear language for everyone. Somatiq Ally for your medical queries and extended support.",
    image: chatui,
  },
  {
    label: "Secure Link sharing with Physicians",
    description: "Quick collaborations with care teams using encrypted links for enhanced privacy.",
    image: "",
  },
  {
    label: "Digital-Only Data Transfer",
    description: "Access health documents online anytime, eliminating the need for physical media or CDs",
    image: "",
  },
]

const features = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant Architecture",
  },
  {
    icon: UserCog,
    title: "Role Based Access Control",
  },
  {
    icon: Hospital,
    title: "NABH Ready",
  },
  {
    icon: Headset,
    title: "Continuous Updates & 24/7 Support",
  },
];

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      role: "CEO",
      company: "ABC Hospital",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      role: "CTO",
      company: "XYZ Hospital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      role: "CMO",
      company: "LMN Hospital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export function DashboardSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1)
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1)

  return (
    <div>
      {/* dashboard section */}
      <section className="py-24 px-4 relative">
        <div 
          ref={titleRef}
          className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
            See what matters. Act on what's urgent.

          </h2>
          <p className="text-muted font-extralight max-w-xl mx-auto">
            Real-time visibility into volumes, turnaround times, and utilization—across every site, every radiologist, every modality.
          </p>
        </div>

        <div 
          ref={imageRef}
          className={cn(
            "transition-all duration-1000 transform",
            imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <img src={dashboard} alt="" className="xl:max-w-7xl mx-auto" />
        </div>

        <div className="feature-section container mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-x-0 max-w-6xl mx-auto ">

            {/* Top Row - Sections with images */}
            {metricsData.slice(0, 2).map((item, index) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation(0.1)
              return (
                <div
                  key={item.label}
                  ref={itemRef}
                  className={cn(
                    "metrics-wrapper md:border md:border-border md:p-10 md:pl-5 py-6 pl-0 relative transition-all duration-700 transform max-md:border-none",
                    index === 1 ? 'md:pl-12 pl-0' : '', 
                    index === 0 ? 'md:border-r-0 md:border-l-0 border-r border-l' : 'md:border-r-0 border-r',
                    itemVisible ? "opacity-100 translate-x-0" : index === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
                  )}
                >
                  {index === 0 && (
                    <>
                      {/* Top right dot */}
                      <div className="absolute top-0 right-0 w-1 h-1 bg-foreground/90 z-1 -translate-y-1/2 translate-x-1/2 hidden md:block" />
                      {/* Bottom right dot */}
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-foreground/90 z-1 translate-y-1/2 translate-x-1/2 hidden md:block" />
                    </>
                  )}
                  <div className="flex flex-col gap-2">
                  <label className="text-2xl font-light text-foreground">
                    {item.label}
                  </label>
                  <p className="text-muted font-extralight md:text-base text-sm mb-4 tracking-wide">
                    {item.description}
                  </p>
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover block "
                    />
                  )}
                </div>
              )
            })}

            {/* Bottom Row - Text-only sections */}
            {metricsData.slice(2, 4).map((item, index) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation(0.1)
              return (
                <div
                  key={item.label}
                  ref={itemRef}
                  className={cn(
                    "metrics-wrapper md:p-6 px-0 py-6 flex flex-col transition-all duration-700 transform ",
                    index === 1 ? 'md:pl-12 pl-0 ' : '',
                    itemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                  <label className="text-2xl font-light text-foreground mb-3">
                    {item.label}
                  </label>
                  <p className="text-muted font-extralight md:text-base text-sm tracking-wide">
                    {item.description}
                  </p>
                </div>
              )
            })}

          </div>
        </div>
      </section>



      {/* portal section */}
      <section>
        <PortalSection />
      </section>
    </div>
  );
}



export function ComplianceSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1)
  const { ref: portalTitleRef, isVisible: portalTitleVisible } = useScrollAnimation(0.1)
  const { ref: complianceTitleRef, isVisible: complianceTitleVisible } = useScrollAnimation(0.1)
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.1)

  return (
    <div className="">
      <section className="portal-section">
        <div 
          ref={imageRef}
          className={cn(
            "image-section relative mt-14 transition-all duration-1000 transform",
            imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <img src={portal} className="xl:max-w-6xl xl:mx-auto lg:mx-10" alt="" />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent max-w-7xl mx-auto pointer-events-none"></div>
        </div>
        <div 
          ref={portalTitleRef}
          className={cn(
            "feature-section container mx-auto mt-16 transition-all duration-1000 transform",
            portalTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="grid md:grid-cols-2 gap-x-0 max-w-6xl mx-auto ">

            {/* Top Row - Sections with images */}
            {portalData.slice(0, 2).map((item, index) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation(0.1)
              return (
                <div
                  key={item.label}
                  ref={itemRef}
                  className={cn(
                    "metrics-wrapper md:border border-border md:p-10 md:pl-5 px-2 py-6 relative transition-all duration-700 transform max-md-border-none",
                    index === 1 ? 'md:pl-12 px-2' : '', 
                    index === 0 ? 'md:border-r-0 md:border-l-0 border-r-0 border-l-0' : 'border-r-0',
                    itemVisible ? "opacity-100 translate-x-0" : index === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
                  )}
                >
                  {index === 0 && (
                    <>
                      {/* Top right dot */}
                      <div className="absolute top-0 right-0 w-1 h-1 bg-foreground/90 z-1 -translate-y-1/2 translate-x-1/2 hidden md:block" />
                      {/* Bottom right dot */}
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-foreground/90 z-1 translate-y-1/2 translate-x-1/2 hidden md:block" />
                    </>
                  )}
                  <label className="text-2xl font-light text-foreground mb-3">
                    {item.label}
                  </label>
                  <p className="text-muted font-extralight md:text-base text-sm mb-4 tracking-wide">
                    {item.description}
                  </p>

                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover block "
                    />
                  )}
                </div>
              )
            })}

            {/* Bottom Row - Text-only sections */}
            {portalData.slice(2, 4).map((item, index) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation(0.1)
              return (
                <div
                  key={item.label}
                  ref={itemRef}
                  className={cn(
                    "metrics-wrapper md:p-6 px-2 py-6 flex flex-col transition-all duration-700 transform",
                    index === 1 ? 'md:pl-12 px-2' : '',
                    itemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                  <label className="text-2xl font-light text-foreground mb-3">
                    {item.label}
                  </label>
                  <p className="text-muted font-extralight md:text-base text-sm tracking-wide">
                    {item.description}
                  </p>
                </div>
              )
            })}

          </div>
        </div>

        <div className="footer-section"></div>
      </section>

      {/* compliance section */}
      <section className="py-24 px-4 relative">
        <div 
          ref={complianceTitleRef}
          className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            complianceTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
            Security & Compliance
          </h2>
          <p className="text-muted font-extralight max-w-xl md:text-base text-sm mx-auto">
            Highest standards of data protection for <br /> healthcare organisations and their patients
          </p>
        </div>
        <div 
          ref={featuresRef}
          className={cn(
            "relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto transition-all duration-1000 transform",
            featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Center intersection rectangle */}
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />
          {features.map((feature, index) => {
            const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation(0.1)
            return (
              <div
                key={feature.title}
                ref={itemRef}
                className={cn(
                  "flex flex-col items-center justify-center gap-3 p-10 md:border border-border transition-all duration-700 transform max-md-border-none",
                  index === 0 ? 'md:border-0 border-0' : '', 
                  index === 1 ? 'md:border-r-0 md:border-t-0 md:border-b-0' : '', 
                  index === 2 ? 'md:border-l-0 md:border-b-0 md:border-r-0' : '', 
                  index === 3 ? 'md:border-r-0 md:border-b-0' : '',
                  itemVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-muted">
                  <feature.icon className="h-10 w-10 text-muted" strokeWidth={2}/>
                </div>
                <p className="text-center text-sm tracking-wider text-foreground font-light">{feature.title}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}


export function PortalSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1)
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation(0.1)

  return (
    <section className="portal-section">
      <div className="header-section flex flex-col gap-5 items-center justify-center">
        <div 
          ref={titleRef}
          className={cn(
            "title-section transition-all duration-1000 transform",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <label className="md:text-[40px] text-3xl font-light text-foreground tracking-normal">
            Patient Engagement Portal
          </label>
        </div>
        <div 
          ref={descRef}
          className={cn(
            "description-section transition-all duration-1000 transform delay-200",
            descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-muted font-extralight md:text-base text-sm tracking-wider text-center">
            Empowering Patients with Secure, Instant Access to <br /> Scans and Reports
          </p>
        </div>
      </div>
    </section>
  )
}


export function TestimonialsSection() {
  return (
    <section className="portal-section">
      <div className="flex flex-col gap-5 items-center justify-center">
       <TestimonialWithMarquee   
       title="What our trusted partners say"
       testimonials={testimonials}
       />
      </div>
    </section>
  )
}

// const trustedCompanies = [
//   { name: "NewMed", logo: "/newmed-without-bg.png" },
//   { name: "OM Diagnostics", logo: "/om-without-bg.png" },
//   { name: "Prima", logo: "/prima-without-bg.png" },
//   { name: "TX Healthcare", logo: "/tx-without-bg.png" },
// ];





export const HomePageSections = () => {
  return (
    <div>
      <DashboardSection />
      <ComplianceSection />
      <TestimonialsSection />
    </div>
  )
}

export default DashboardSection;