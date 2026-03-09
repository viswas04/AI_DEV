import { motion } from "framer-motion";

const rows = [
  { task: "Lighting Setup", manual: "40 min", ai: "2 min" },
  { task: "Scene Editing", manual: "Manual", ai: "Automatic" },
  { task: "Dubbing", manual: "Studio required", ai: "AI generated" },
  { task: "Character Rigging", manual: "Hours", ai: "Minutes" },
  { task: "Upscaling", manual: "N/A", ai: "Real-time" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Production <span className="text-gradient-primary">Impact</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-0 border-b border-border bg-secondary/50 px-6 py-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Task</span>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center">Manual</span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary text-center">AI</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-3 gap-0 px-6 py-4 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-sm font-medium text-foreground">{row.task}</span>
              <span className="text-sm text-muted-foreground text-center line-through decoration-muted-foreground/50">
                {row.manual}
              </span>
              <span className="text-sm font-semibold text-primary text-center">{row.ai}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
