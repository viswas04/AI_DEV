import { motion } from "framer-motion";

const layers = [
  { label: "Input Media", desc: "Video, images, audio files" },
  { label: "Computer Vision Analysis", desc: "Scene detection & feature extraction" },
  { label: "Scene Understanding", desc: "Semantic analysis & classification" },
  { label: "AI Model Processing", desc: "Neural network inference" },
  { label: "Automation Scripts", desc: "Task orchestration & pipelines" },
  { label: "Production Tool Integration", desc: "Blender, DaVinci, FFmpeg" },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            System <span className="text-gradient-primary">Architecture</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-xs font-mono text-primary font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{layer.label}</h3>
                    <p className="text-xs text-muted-foreground">{layer.desc}</p>
                  </div>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
