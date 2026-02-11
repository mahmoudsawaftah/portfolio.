import { Award, TrendingUp, Users, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    icon: TrendingUp,
    title: "Team Performance Optimization",
    desc: "Implemented data-driven strategies that improved team KPIs and customer satisfaction metrics across the board.",
  },
  {
    icon: Users,
    title: "Agent Training Program",
    desc: "Designed and launched comprehensive training modules for new hires, reducing onboarding time by streamlining processes.",
  },
  {
    icon: Award,
    title: "Customer Satisfaction Excellence",
    desc: "Consistently achieved top customer satisfaction ratings through proactive service strategies and quality monitoring.",
  },
  {
    icon: Target,
    title: "Escalation Resolution Framework",
    desc: "Developed a structured framework for handling complex escalations, improving resolution times and customer retention.",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Projects & Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-xl p-6 hover:glow-sm hover:-translate-y-1 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
