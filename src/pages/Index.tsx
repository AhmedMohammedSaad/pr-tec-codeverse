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
import SEO from "@/components/SEO";
import { GlowEffect } from "@/components/ui/glow-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import NeuralNetworkBackground from "@/components/ui/neural-network-background";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
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
    <>
      <SEO 
        title={t('seo.pages.home.title')}
        description={t('seo.pages.home.description')}
      />
      <div className="min-h-screen bg-background text-right relative" dir="rtl">
      {/* خلفية الشبكة العصبية المتحركة */}
      {isHeroVisible && (
        <NeuralNetworkBackground 
          nodeCount={60}
          connectionDistance={120}
          animationSpeed={0.3}
          opacity={0.4}
          color="hsl(var(--primary) / 0.6)"
        />
      )}
      
      {/* تأثير ضوئي واحد مبسط */}
      <GlowEffect 
        color="hsl(var(--primary) / 0.08)" 
        size="lg" 
        intensity="low" 
        position="top-right" 
        className="fixed z-0" 
      />
      
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
    </>
  );
};

export default Index;
