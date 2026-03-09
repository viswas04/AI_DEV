import { motion } from "framer-motion";

const demos = [
  {
    title: "AI Auto Lighting",
    steps: ["Input Image", "AI Processing", "Blender Lighting Output"],
  },
  {
    title: "AI Upscaling",
    steps: ["Low-Res Input", "ESRGAN Processing", "4K Output"],
  },
  {
    title: "AI Video Editor",
    steps: ["Raw Footage", "Scene Detection", "Edited Sequence"],
  },
];

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Live <span className="text-gradient-primary">Demos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Before/after comparisons showcasing AI processing results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all"
            >
              <h3 className="font-bold text-foreground mb-4">{demo.title}</h3>
              <div className="space-y-3">
                {demo.steps.map((step, j) => (
                  <div key={step}>
                    <div className={`rounded-lg p-4 text-center text-sm font-mono ${
                      j === 0
                        ? "bg-secondary text-secondary-foreground"
                        : j === 1
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}>
                      {step}
                    </div>
                    {j < demo.steps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <span className="text-xs text-muted-foreground">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
