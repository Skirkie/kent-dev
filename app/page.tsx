import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Light mode blobs */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-neutral-300 to-neutral-100 opacity-90 blur-3xl dark:opacity-0 transition-opacity duration-500" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-neutral-400 to-neutral-100 opacity-70 blur-3xl dark:opacity-0 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-300 to-white opacity-80 blur-3xl dark:opacity-0 transition-opacity duration-500" />

        {/* Dark mode blobs */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-neutral-600 to-neutral-900 opacity-0 blur-3xl dark:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-neutral-500 to-neutral-900 opacity-0 blur-3xl dark:opacity-50 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-600 to-neutral-950 opacity-0 blur-3xl dark:opacity-60 transition-opacity duration-500" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:opacity-20" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
