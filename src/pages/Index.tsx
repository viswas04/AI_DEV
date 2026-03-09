import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PipelineSection from "@/components/PipelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import DemoSection from "@/components/DemoSection";
import ImpactSection from "@/components/ImpactSection";
import FutureVision from "@/components/FutureVision";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PipelineSection />
      <ProjectsSection />
      <ArchitectureSection />
      <DemoSection />
      <ImpactSection />
      <FutureVision />
      <ContactSection />
    </div>
  );
};

export default Index;
