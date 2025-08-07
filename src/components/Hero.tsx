import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Zap, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const AnimatedCounter = ({ from = 0, to, duration = 2, className = "", delay = 0 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, delay });
    
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, to, duration, delay]);

  return <span className={className}>{displayValue}</span>;
};

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* خلفية */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="تعليم البرمجة"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70"></div>
        
        {/* تأثير ضوئي مبسط */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)', top: '20%', left: '10%' }}
          />
        </div>
      </div>

      {/* المحتوى */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* أنيميشن للعنوان */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute -top-20 -right-20 w-40 h-40 opacity-15 blur-3xl rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
          />
          
          <motion.h1
            initial={{ opacity: 0, rotateX: 90, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
          >
            <span 
              className="inline-block absolute -top-10 -right-10 text-primary opacity-60"
            >
              <Sparkles size={40} />
            </span>
            
            <span className="block mb-2">
              {t('hero.title')}
            </span>

            <motion.span
              className="text-2xl md:text-4xl tracking-wider block mt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span>{t('hero.subtitle')}</span>
              </span>
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* وصف الكورس */}
        <motion.div
          className="relative bg-gradient-to-r from-background/80 via-background/40 to-background/80 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <div 
            className="absolute -top-2 -right-2 text-primary opacity-70"
          >
            <Code2 size={24} />
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              {t('hero.description1')}
            </motion.span>
            
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              {t('hero.description2')}
            </motion.span>
            
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.5 }}
            >
              {t('hero.description3')}
            </motion.span>
          </motion.p>
        </motion.div>
        
        {/* أزرار الدعوة للعمل */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="btn-glow px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
              onClick={() => {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Code2 className="ml-2 h-5 w-5" />
              {t('hero.cta.browseCourses')}
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Zap className="ml-2 h-5 w-5" />
              {t('hero.cta.startFree')}
            </Button>
          </motion.div>
        </motion.div>
        
        {/* الإحصائيات */}
        <motion.div
          className="hero-subtitle mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
              >
                +<AnimatedCounter from={0} to={500} duration={2.5} delay={3.4} />
              </div>
              <div className="text-muted-foreground">{t('hero.stats.studentsTrained')}</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="text-3xl md:text-4xl font-bold text-accent mb-1"
              >
                <AnimatedCounter from={0} to={95} duration={2.5} delay={3.6} />٪
              </div>
              <div className="text-muted-foreground">{t('hero.stats.successRate')}</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
              >
                +<AnimatedCounter from={0} to={50} duration={2.5} delay={3.8} />
              </div>
              <div className="text-muted-foreground">{t('hero.stats.projectsCompleted')}</div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* اكتشف المزيد */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ y: -5 }}
          >
            <div className="text-muted-foreground text-sm mb-2 group-hover:text-primary transition-colors">
              {t('hero.discoverMore')}
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary/70 group-hover:text-primary transition-colors"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
