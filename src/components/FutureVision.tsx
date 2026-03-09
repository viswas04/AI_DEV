import { motion } from "framer-motion";

const visions = [
  { title: "AI Film Production Toolkit", desc: "Complete end-to-end production suite", icon: "🎬" },
  { title: "AI Blender Assistant", desc: "Intelligent 3D creation companion", icon: "🎨" },
  { title: "Automated VFX Pipeline", desc: "Visual effects generation at scale", icon: "✨" },
  { title: "AI Content Platform", desc: "AI-powered content creation ecosystem", icon: "🚀" },
];

const FutureVision = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Future <span className="text-gradient-primary">Vision</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {visions.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center hover:border-accent/40 hover:glow-accent transition-all"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-foreground text-sm mb-1">{v.title}</h3>
              <p className="text-xs text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
