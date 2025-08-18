import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import ChildrenSection from "@/components/ChildrenSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
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
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <SEO 
        title={t('seo.pages.home.title')}
        description={t('seo.pages.home.description')}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section id="home" className="section-reveal">
          <Hero />
        </section>
        
        {/* Courses Section */}
        <section id="courses" className="section-reveal">
          <Courses />
        </section>
        
        {/* About Section */}
        <section id="about" className="section-reveal">
          <About />
        </section>
        
        {/* Children Section */}
        <section id="children" className="section-reveal">
          <ChildrenSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section-reveal">
          <Contact />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* WhatsApp Float */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
