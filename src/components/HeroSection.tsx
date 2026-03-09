import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-primary">AI-Powered Film Production</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient-primary">AI Production</span>
            <br />
            <span className="text-foreground">Automation Suite</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            AI tools designed to automate film production workflows including editing, lighting, rigging, dubbing, and upscaling.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mb-12">
            {[
              { value: "6", label: "AI Tools" },
              { value: "3", label: "Months R&D" },
              { value: "∞", label: "Automation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition glow-primary"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:border-primary/50 transition"
            >
              <Play size={16} />
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
