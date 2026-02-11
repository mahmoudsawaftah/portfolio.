import { Headphones, Crown, MessageCircle, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Headphones,
    title: "Customer Service",
    skills: [
      "Customer Satisfaction",
      "First Call Resolution",
      "CRM Systems",
      "Quality Assurance",
      "Complaint Handling",
    ],
  },
  {
    icon: Crown,
    title: "Leadership",
    skills: [
      "Team Management",
      "Performance Coaching",
      "KPI Tracking",
      "Decision Making",
      "Conflict Resolution",
    ],
  },
  {
    icon: MessageCircle,
    title: "Communication",
    skills: [
      "Active Listening",
      "Verbal & Written",
      "Presentation",
      "Empathy",
      "Negotiation",
    ],
  },
  {
    icon: Monitor,
    title: "Technology & Software",
    skills: [
      "Microsoft Office",
      "CRM Platforms",
      "Data Analysis",
      "Software Engineering (Learning)",
      "Problem Solving",
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass rounded-xl p-6 hover:glow-sm transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="bg-secondary/60 text-secondary-foreground border-border/30 text-xs"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
