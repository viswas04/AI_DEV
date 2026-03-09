import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Interested in collaboration or technical discussion? Feel free to connect.
          </p>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground hover:border-primary/40 hover:glow-primary transition-all"
              >
                <item.icon size={18} />
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 text-center text-xs text-muted-foreground font-mono">
          © 2026 AI Production Automation Suite. Built with AI.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
