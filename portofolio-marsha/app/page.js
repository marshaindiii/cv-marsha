import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import MenuOverlay from "@/components/MenuOverlay";
import AboutSection from "@/components/AboutSection";
import EducationPage from "@/components/EducationPage";
import ContactSec from "@/components/ContactSec";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return(
    <main className="flex min-h-screen flex-col bg-[#121212] container">
      <NavBar />
      <div class="container mt-24 mx-auto px-12"> 
        <HeroSection />
        <MenuOverlay />
        <AboutSection />
        <EducationPage />
        <ContactSec />
        <FooterSection />

      </div>
    </main>
  )
}