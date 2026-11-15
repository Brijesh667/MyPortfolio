import ContactSection from "./components/sections/ContactSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="relative z-10 pt-0">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
