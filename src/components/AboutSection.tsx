import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "PyTorch", icon: "🔥" },
  { name: "OpenCV", icon: "👁" },
  { name: "Blender API", icon: "🎨" },
  { name: "Speech AI", icon: "🗣" },
  { name: "Computer Vision", icon: "📷" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-primary">the Project</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are AI developers working on automation tools for film production pipelines. 
            Our work focuses on using machine learning and computer vision to reduce manual tasks 
            in areas like lighting, editing, dubbing, and rigging. Over the past 3 months of R&D, 
            we developed multiple AI-powered tools to streamline different stages of film production.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 hover:border-primary/40 hover:glow-primary transition-all"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
