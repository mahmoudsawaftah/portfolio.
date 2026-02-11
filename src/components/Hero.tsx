import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const Hero = () => {
  const { displayedText } = useTypingAnimation({
    text: "Mahmoud",
    speed: 80,
    delay: 300,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
        </div>

        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gradient-text">{displayedText}</span>
          <span className="inline-block w-1 h-[1.2em] bg-primary ml-1 animate-pulse" />
          {" "}
          <span className="text-foreground">Sawaftah</span>
        </h1>

        <p
          className="animate-fade-up text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          Customer Service Team Leader · Tech Enthusiast
        </p>

        <p
          className="animate-fade-up text-sm sm:text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Delivering exceptional customer experiences through leadership,
          communication, and continuous improvement while leveraging technology.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild size="lg" className="rounded-full glow px-8">
            <a href="#experience">
              <ArrowDown size={18} />
              View Experience
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border/60 hover:border-primary/50 px-8"
          >
            <a href="#contact">
              <Mail size={18} />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
