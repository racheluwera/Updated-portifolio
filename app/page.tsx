import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/app/projects/page";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About/>
        <Skills />
        <Projects />
        <ContactForm />
        <Footer/>
      </main>
    </>
  );
}
