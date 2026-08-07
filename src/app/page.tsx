import Header from "@/components/Header";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
