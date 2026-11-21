import { MotionConfig } from "framer-motion";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Expertise />
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}
