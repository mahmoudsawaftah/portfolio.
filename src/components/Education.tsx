import { GraduationCap, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    icon: GraduationCap,
    title: "Software Engineering",
    institution: "Amman Al-Ahliyya University",
    note: "Paused",
  },
  {
    icon: BookOpen,
    title: "Jordanian Tawjihi Certificate",
    institution: "General Secondary Education",
    note: "Completed",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`glass rounded-xl p-6 hover:glow-sm transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
              <span className="inline-block mt-3 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
