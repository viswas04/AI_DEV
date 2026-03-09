import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Music Studio",
    desc: "Generates background music for scenes using AI.",
    tech: ["Python", "Audio AI", "Signal Processing"],
    icon: "🎵",
  },
  {
    title: "AI Video Editor",
    desc: "Automatically detects scenes and edits videos.",
    tech: ["OpenCV", "Computer Vision", "Video Processing"],
    icon: "✂️",
  },
  {
    title: "AI AutoRig",
    desc: "Automatically generates skeleton rigs for characters.",
    tech: ["Blender API", "Geometry Analysis"],
    icon: "🦴",
  },
  {
    title: "AI Auto Lighting",
    desc: "Analyzes an image and recreates the lighting setup in Blender.",
    tech: ["MiDaS", "PyTorch", "Blender"],
    icon: "💡",
  },
  {
    title: "AI Dubbing",
    desc: "Automatically translates and generates dubbed voices.",
    tech: ["Speech Recognition", "Voice Cloning", "TTS"],
    icon: "🗣",
  },
  {
    title: "AI Upscaling",
    desc: "Enhances low-resolution footage using AI super-resolution.",
    tech: ["ESRGAN", "Deep Learning"],
    icon: "📐",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six AI-powered tools built to revolutionize film production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:glow-primary transition-all"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
