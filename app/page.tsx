import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import Companies from "@/components/companies/Companies";
import Impact from "@/components/impact/Impact";
import Experience from "@/components/experience/Experience";
import CaseStudies from "@/components/casestudies/CaseStudies";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Impact />
      <Experience />
      <CaseStudies />
      <Footer />
    </>
  );
}