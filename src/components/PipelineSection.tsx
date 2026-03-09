import { motion } from "framer-motion";

const steps = [
  { label: "Raw Footage", icon: "🎬" },
  { label: "AI Music Studio", icon: "🎵" },
  { label: "AI Video Editor", icon: "✂️" },
  { label: "AI AutoRig", icon: "🦴" },
  { label: "AI Auto Lighting", icon: "💡" },
  { label: "AI Dubbing", icon: "🗣" },
  { label: "AI Upscaling", icon: "📐" },
  { label: "Final Output", icon: "🎥" },
];

const PipelineSection = () => {
  return (
    <section id="pipeline" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI Production <span className="text-gradient-primary">Pipeline</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end automated workflow from raw footage to final output.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full"
            >
              <div className={`flex items-center gap-4 rounded-lg border px-6 py-4 transition-all ${
                i === 0 || i === steps.length - 1
                  ? "border-accent/40 bg-accent/5 glow-accent"
                  : "border-border bg-card hover:border-primary/40"
              }`}>
                <span className="text-2xl">{step.icon}</span>
                <span className="font-semibold text-foreground">{step.label}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-4 bg-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
