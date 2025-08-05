import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Zap, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import { GlowEffect } from "@/components/ui/glow-effect";
import { useState, useEffect } from "react";

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
        
        {/* تأثيرات ضوئية إضافية للصفحة الرئيسية */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
            animate={{
              x: ['-25%', '25%', '-25%'],
              y: ['-25%', '25%', '-25%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.div 
            className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
            animate={{
              x: ['25%', '-15%', '25%'],
              y: ['15%', '-25%', '15%'],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 opacity-20 blur-3xl rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.h1
            initial={{ opacity: 0, rotateX: 90, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
          >
            <motion.span 
              className="inline-block absolute -top-10 -right-10 text-primary opacity-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={40} />
            </motion.span>
            
            <span className="block mb-2">
              أتقن{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  البرمجة
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </span>

            <motion.span
              className="text-2xl md:text-4xl tracking-wider block mt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span>PR TEC Academy</span>
                {/* تم إزالة الخط تحت PR TEC Academy */}
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
          <motion.div 
            className="absolute -top-2 -right-2 text-primary"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 size={24} />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              وفّرنا لك مدرّسين بخبرة أكتر من 6 سنين في البرمجة، جاهزين يعلّموك خطوة بخطوة
            </motion.span>
            
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              هتلاقي تحديات ممتعة، جوائز، وتحفيزات، تحافظ على شغفك
            </motion.span>
            
            <motion.span 
              className="block font-semibold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.0, duration: 0.5 }}
            >
              ابدأ معانا دلوقتي وخلّي شغلك يحكي قصتك
            </motion.span>
          </motion.p>
        </motion.div>

        {/* الإحصائيات */}
        <motion.div
          className="hero-subtitle mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base py-0">
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                +<AnimatedCounter from={0} to={500} duration={2.5} delay={3.4} />
              </motion.div>
              <div className="text-muted-foreground">طالب تم تدريبه</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-accent mb-1"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, delay: 0.5 }}
              >
                <AnimatedCounter from={0} to={95} duration={2.5} delay={3.6} />٪
              </motion.div>
              <div className="text-muted-foreground">معدل النجاح</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, delay: 1 }}
              >
                +<AnimatedCounter from={0} to={50} duration={2.5} delay={3.8} />
              </motion.div>
              <div className="text-muted-foreground">مشروع تم تنفيذه</div>
            </motion.div>
          </div>
        </motion.div>

        {/* تم إزالة أزرار الدعوة للعمل */}
        
        {/* اكتشف المزيد - تم إضافة بمسافة 20 بكسل من الأعلى */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="text-muted-foreground text-sm">اكتشف المزيد</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;





// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Code2, Zap } from "lucide-react";
// import heroImage from "@/assets/hero-coding.jpg";
// import logo from "@/assets/PR-TEC.png";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       dir="rtl"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* الخلفية */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="تعليم البرمجة"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
//       </div>

//       {/* المحتوى */}
//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//         {/* 🔥 اللوجو - مع أنيميشن */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.6 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="mb-6 flex justify-center"
//         >
//           <img
//             src={logo}
//             alt="PR TEC Logo"
//             className="w-32 md:w-40 lg:w-48 drop-shadow-xl"
//           />
//         </motion.div>

//         {/* العنوان */}
//         <motion.h1
//           initial={{ opacity: 0, rotateX: 90, scale: 0.9 }}
//           animate={{ opacity: 1, rotateX: 0, scale: 1 }}
//           transition={{ duration: 1.4, ease: "easeOut" }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
//         >
//           <span className="block mb-2">
//             أتقن{" "}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               البرمجة
//             </span>
//           </span>

//           <motion.div
//             className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-4"
//             initial={{ width: 0 }}
//             animate={{ width: "6rem" }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//           />

//           <motion.span
//             className="text-2xl md:text-4xl tracking-wider"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.8, duration: 0.8 }}
//           >
//             PR TEC Academy
//           </motion.span>
//         </motion.h1>

//         {/* الوصف */}
//         <motion.p
//           className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed py-[17px]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.4, duration: 0.8 }}
//         >
//           تعلم Flutter، تطوير الويب، الخلفية، وأساسيات البرمجة مع خبراء المجال.
//           ابدأ رحلتك البرمجية اليوم من خلال مشاريع عملية وتوجيه شخصي.
//         </motion.p>

//         {/* الإحصائيات */}
//         <motion.div
//           className="hero-subtitle mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.8, duration: 0.8 }}
//         >
//           <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base py-0">
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-primary">+500</div>
//               <div className="text-muted-foreground">طالب تم تدريبه</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-accent">٪95</div>
//               <div className="text-muted-foreground">معدل النجاح</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-primary">+50</div>
//               <div className="text-muted-foreground">مشروع تم تنفيذه</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* المؤشر للأسفل */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 3.2 }}
//         >
//           <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
