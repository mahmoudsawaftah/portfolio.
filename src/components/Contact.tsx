import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-4">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Get in Touch</span>
        </h2>

        <p
          className={`text-muted-foreground mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          I'm always open to new opportunities and connections. Feel free to
          reach out!
        </p>

        <div
          className={`glass rounded-xl p-8 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail size={20} className="text-primary" />
            <a
              href="mailto:mahmodrsawafath@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              mahmodrsawafath@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-border/60 hover:border-primary/50 hover:glow-sm"
            >
              <a
                href="https://www.linkedin.com/in/mahmoudsawaftah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-border/60 hover:border-primary/50 hover:glow-sm"
            >
              <a
                href="https://github.com/mahmoudsawaftah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 mt-16 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mahmoud Sawaftah. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
