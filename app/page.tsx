import Hero from "@/components/hero/hero";
import Companies from "@/components/companies/Companies";
import Impact from "@/components/impact/Impact";
import Experience from "@/components/experience/Experience";
import FeaturedIn from "@/components/featured/FeaturedIn";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Impact />
      <Experience />
      <FeaturedIn />
      <Footer />
    </>
  );
}