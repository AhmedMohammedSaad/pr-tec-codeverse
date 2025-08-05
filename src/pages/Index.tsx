import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import ChildrenSection from "@/components/ChildrenSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { WaveBackground } from "@/components/ui/wave-background";
import { GlowEffect } from "@/components/ui/glow-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { CodeGridBackground } from "@/components/ui/code-grid-background";
import { MatrixCodeBackground } from "@/components/ui/matrix-code-background";
import { CirclesBackground } from "@/components/ui/circles-background";

const Index = () => {
  // حالة لتتبع ما إذا كانت الصفحة الرئيسية مرئية
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // مراقب التقاطع للعناصر المتحركة
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".section-reveal");
    revealElements.forEach((el) => observer.observe(el));

    // مراقب التقاطع للصفحة الرئيسية لتحديد متى تكون مرئية
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const heroElement = document.getElementById("home");
    if (heroElement) {
      heroObserver.observe(heroElement);
    }

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-right relative" dir="rtl">
      {/* خلفية الكود المتساقط - تظهر فقط في الصفحة الرئيسية */}
      {isHeroVisible && <MatrixCodeBackground density={30} speed={0.6} codeColor="hsl(var(--primary) / 0.3)" />}
      
      {/* خلفية الدوائر المتحركة */}
      <CirclesBackground density={10} speed={0.5} />
      
      {/* خلفية الشبكة البرمجية */}
      <CodeGridBackground density={40} speed={0.8} />
      
      {/* خلفية النجوم المتحركة */}
      <StarsBackground starCount={150} speed={0.8} />
      
      {/* خلفية متحركة للموقع بالكامل */}
      <AnimatedBackground density={40} speed={0.5} />
      
      {/* تأثيرات ضوئية */}
      <GlowEffect 
        color="hsl(var(--primary) / 0.15)" 
        size="xl" 
        intensity="medium" 
        position="top-right" 
        className="fixed z-0" 
      />
      <GlowEffect 
        color="hsl(var(--accent) / 0.1)" 
        size="xl" 
        intensity="low" 
        position="bottom-left" 
        className="fixed z-0" 
      />
      
      {/* خلفية متموجة */}
      <WaveBackground />
      
      {/* المحتوى */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Courses />
        <ChildrenSection />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
};

export default Index;
