import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    company: "CS MENA",
    role: "Call Center Team Leader",
    period: "Recent",
    items: [
      "Led and managed a team of call center agents to achieve KPIs",
      "Monitored team performance and provided coaching & feedback",
      "Handled escalated customer issues and ensured resolution",
      "Developed training programs to improve service quality",
      "Analyzed performance reports to drive continuous improvement",
    ],
  },
  {
    company: "Extensya",
    role: "Call Center Agent",
    period: "Previous",
    items: [
      "Handled inbound and outbound customer inquiries professionally",
      "Maintained high customer satisfaction ratings consistently",
      "Resolved complaints and provided first-call resolutions",
      "Documented interactions and updated CRM records accurately",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row mb-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-sm z-10 mt-6" />

              <div
                className={`ml-12 md:ml-0 ${
                  i % 2 === 0
                    ? "md:w-1/2 md:pr-12"
                    : "md:w-1/2 md:ml-auto md:pl-12"
                }`}
              >
                <div className="glass rounded-xl p-6 hover:glow-sm transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
