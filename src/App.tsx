import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
