
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InterestsSection from "@/components/InterestsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <InterestsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
