import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Offerings } from "@/components/sections/Offerings";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Experience } from "@/components/sections/Experience";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reservation } from "@/components/sections/Reservation";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Offerings />
        <SignatureDishes />
        <Experience />
        <FeaturedMenu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
