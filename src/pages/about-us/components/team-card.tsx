import ProfileImage from "@/assets/about-us/team/viswa.png";
import ProfileImage2 from "@/assets/about-us/team/naveen.png";

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
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[oklch(0.6_0.2_250)] mb-4">
            Leadership
          </span>
          <h2 className="font-serif text-5xl text-white font-normal">
            Team behind SOMATIQ
          </h2>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[oklch(0.145_0_0)] border border-[oklch(1_0_0/10%)] rounded-3xl p-12 transition-all duration-300 hover:border-[oklch(0.6_0.2_250)]"
            >
              {/* Team Header */}
              <div className="flex gap-6 mb-8">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[0.95rem] text-[oklch(0.6_0.2_250)] font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-base text-[oklch(0.708_0_0)] leading-relaxed mb-8">
                {member.bio}
              </p>
              
              {/* Quote */}
              <p className="font-serif text-lg italic text-white pl-6 border-l-4 border-[oklch(0.6_0.2_250)] leading-relaxed">
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