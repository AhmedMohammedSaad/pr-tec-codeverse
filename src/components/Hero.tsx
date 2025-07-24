import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

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
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* أنيميشن للعنوان */}
        <motion.h1
          initial={{ opacity: 0, rotateX: 90, scale: 0.9 }}
          animate={{ opacity: 1, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block mb-2">
            أتقن{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              البرمجة
            </span>
          </span>

          {/* فاصل أنيميشن بين العنوانين */}
          <motion.div
           // className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />

          <motion.span
            className="text-2xl md:text-4xl tracking-wider"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            PR TEC Academy
          </motion.span>
        </motion.h1>

        {/* وصف الكورس */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed py-[17px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
           وفّرنا لك مدرّسين بخبرة أكتر من 6 سنين في البرمجة، جاهزين يعلّموك خطوة بخطوة
هتلاقي تحديات ممتعة، جوائز، وتحفيزات، تحافظ على شغفك
ابدأ معانا دلوقتي وخلّي شغلك يحكي قصتك
        </motion.p>

        {/* الإحصائيات */}
        <motion.div
          className="hero-subtitle mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base py-0">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">+500</div>
              <div className="text-muted-foreground">طالب تم تدريبه</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">٪95</div>
              <div className="text-muted-foreground">معدل النجاح</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">+50</div>
              <div className="text-muted-foreground">مشروع تم تنفيذه</div>
            </div>
          </div>
        </motion.div>

        {/* مؤشر التمرير */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
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
