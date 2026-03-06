import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsSplit from "@/components/ProjectsSplit";
import Blogs from "@/components/Blogs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsSplit />
        <Blogs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
