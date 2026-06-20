"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FBF8F3] via-[#F5EFE7] to-[#F0E8DF]">
      <Header />
      {isLoaded && (
        <>
          <Hero />
          <Features />
          <Services />
          <Gallery />
          <Stats />
          {/* <Pricing /> */}
          <Team />
          <Testimonials />
          <Blog />
          <Footer />
        </>
      )}
    </div>
  );
}
