import ProfileImage from "@/assets/about-us/team/viswa.jpg";
import ProfileImage2 from "@/assets/about-us/team/naveen.jpg";

const TeamSectionPage = () => {
  const teamMembers = [
    {
      image: ProfileImage,
      name: 'Dr. Vishwanath R S',
      role: 'MD, CIIP — Co-Founder & CEO',
      bio: "Radiologist and healthcare technology leader with over a decade of experience. Formerly at Siemens Healthineers, where he shaped AI-enabled radiology products deployed across 50+ countries. At Somatiq, he brings clinical depth to every product decision—because he's read the cases, lived the workflows, and felt the frustrations firsthand.",
      quote: '"SOMATIQ is all about modernizing radiology infrastructure through intelligent software—making diagnostics more accessible, efficient, and clinically impactful."'
    },
    {
      image: ProfileImage2,
      name: 'Naveen K',
      role: 'Co-Founder & CTO',
      bio: "Technologist and entrepreneur who transitioned from agriculture AI to healthcare. Previously co-founded an AI startup acquired by a major teleradiology provider, scaling the engineering team from 5 to 50+ engineers. At Somatiq, he architects the platform's intelligent backbone—ensuring AI isn't a feature, but the foundation.",
      quote: '"Technology should empower clinicians with intelligence and efficiency, while staying invisible in the workflow. If our product makes radiologists smile, we win."'
    }
  ];

  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Team behind SOMATIQ
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04]"
            >
              {/* Team Header */}
              <div className="flex gap-5 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm md:text-base text-foreground/60 font-light leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Quote */}
              <p className="text-base md:text-lg italic text-foreground/80 pl-5 border-l-2 border-primary/50 leading-relaxed">
                {member.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionPage;
