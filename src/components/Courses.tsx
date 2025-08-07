"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Users, Star, X, Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



const courses = [
  {
    image: "/images/flutter-course.svg",
    title: "تطوير تطبيقات Flutter",
    description: "تعلّم كيفية بناء تطبيقات مميزة وعالية الأداء لأندرويد وiOS باستخدام Flutter وDart.",
    level: "من المبتدئ إلى المتقدم",
    duration: "5 أشهر",
    students: "150+",
    rating: 4.5,
    originalPrice: 5000,
    discountedPrice: 4500,
    color: "text-blue-400",
    features: [
      "Dart fundamentals & Object-Oriented Programming",
      "Flutter widgets, layouts, and responsive UI patterns",
      "State management (Provider, Bloc, Riverpod) and Clean Architecture",
      "REST API integration (Dio/HTTP), error handling, and caching",
      "Firebase suite: Auth, Firestore, Storage, Cloud Functions, FCM",
      "Supabase integration (auth, storage, realtime databases)",
      "Payment gateways (Stripe, Paymob, etc.) and in-app purchases",
      "Deploying to Play Store & App Store, versioning, and CI/CD basics",
      "Using AI tools to speed up development and boost your project portfolio"
    ]
  },

    
  
  {
    image: "/images/frontend-course.svg",
    title: "تطوير الويب الواجهة الأمامية",
    description: "إتقان مهارات إنشاء مواقع تفاعلية وحديثة باستخدام أحدث التقنيات.",
    level: "من المبتدئ إلى المتوسط",
    duration: "4 أشهر",
    students: "200+",
    rating: 4.0,
    originalPrice: 5000,
    discountedPrice: 4000,
    color: "text-green-400",
    features: [
"HTML5 semantic structure & accessibility basics",
      "CSS3, responsive design, Flexbox/Grid, and Tailwind CSS",
      "Modern JavaScript (ES6+), DOM manipulation, and async patterns",
      "React fundamentals, Hooks, and React Router for SPA navigation",
      "State management (Context API, Redux Toolkit) and global stores",
      "API integration (Axios/Fetch), error handling, and data caching",
      "Tooling & bundlers (Vite/Webpack) and environment variables",
      "Testing with Jest & React Testing Library and deployment (Vercel/Netlify)",
      "Using AI to accelerate UI development, prototyping, and debugging"

    ]
  },
  {
    image: "/images/python-course.svg",
    title: "برمجة الخوادم باستخدام Python",
    description: "إنشاء أنظمة خوادم قوية باستخدام Python وDjango وقواعد البيانات الحديثة.",
    level: "متوسط إلى متقدم",
    duration: "4 أشهر",
    students: "90+",
    rating: 4.9,
    originalPrice: 5500,
    discountedPrice: 5000,
    color: "text-purple-400",
    features: [
        "Python syntax, OOP, virtual environments, and best practices",
      "Django MVC pattern, templates, and ORM fundamentals",
      "Django REST Framework (DRF) for building secure RESTful APIs",
      "PostgreSQL integration, migrations, and advanced queries",
      "Authentication & authorization (JWT/OAuth), permissions, and throttling",
      "Task queues & scheduling with Celery and Redis",
      "Dockerizing your backend and deploying to cloud platforms (Heroku/AWS)",
      "Automated testing (pytest) and CI/CD pipelines",
      "Leveraging AI for code generation, documentation, and backend automation"

    ]
  },
  {
    image: "/images/csharp-course.svg",
    title: "برمجة الخوادم باستخدام C#",
    description: "تطوير تطبيقات وواجهات برمجية باستخدام .NET Core وتقنيات Microsoft.",
    level: "متوسط إلى متقدم",
    duration:  "4 أشهر" ,
    students: "75+",
    rating: 4.9,
    originalPrice: 5500,
    discountedPrice: 5000,
    color: "text-indigo-500",
    features: [
      "C# fundamentals, OOP, and .NET runtime essentials",
      "ASP.NET Core MVC and building RESTful Web APIs",
      "Entity Framework Core, LINQ, and database migrations",
      "SQL Server integration, schema design, and stored procedures",
      "Authentication & authorization with Identity and JWT tokens",
      "Dependency Injection, Clean Architecture, and SOLID principles",
      "Docker containers, Azure deployment, and IIS hosting basics",
      "Logging, monitoring, and debugging production issues",
      "AI integration (Azure Cognitive Services, OpenAI APIs) to enhance your apps"

    ]
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1400/1*ImTT0nd7BZUPe3S8XS_juA.png",
    title: "أساسيات البرمجة",
    description: "بناء أساس قوي في البرمجة باستخدام C++ ومفاهيم علوم الحاسب.",
    level: "مبتدئ",
    duration: "4 أشهر",
    students: "300+",
    rating: 4.6,
    originalPrice: 4500,
    discountedPrice: 4000,
    color: "text-yellow-400",
    features: [
      "C++ syntax, variables, data types, and standard input/output",
      "Control flow (conditions, loops) and error handling basics",
      "Functions, modularization, and Object-Oriented Programming concepts",
      "Data structures (Arrays, Linked Lists, Stacks, Queues, Trees)",
      "Algorithms (sorting, searching, recursion) and complexity analysis",
      "Debugging strategies, IDE usage, and code optimization tips",
      "Introduction to databases (SQL basics and ERD diagrams)",
      "Version control with Git/GitHub and collaborative workflows",
      "How to leverage AI tools to practice, debug, and improve your solutions"

    ]
  },
  {
    image: "https://assets.skyfilabs.com/playto/img/best-programming-languages-for-kids.webp",
    title: "البرمجة للأطفال",
    description: "رحلة برمجية تفاعلية للأطفال باستخدام Scratch وPython المبسط.",
    level: "من عمر 8 إلى 14 سنة",
    duration: "5 أشهر",
    students: "100+",
    rating: 5.0,
    originalPrice: 7000,
    discountedPrice: 6000,
    color: "text-pink-400",
    features: [
      "Scratch basics: drag-and-drop coding and game logic for kids",
      "Designing simple games and interactive stories",
      "Intro to Python through fun mini-projects and visual examples",
      "Logical thinking, problem-solving, and algorithmic reasoning",
      "Creative challenges and weekly hands-on activities",
      "Teamwork, communication, and presenting project ideas",
      "Safe internet practices and digital citizenship",
      "Showcasing projects to parents and earning badges/rewards",
      "Simple AI concepts to inspire creativity and curiosity"

    ]
  }
];

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth <= breakpoint
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
};

/* ===================== CourseCard (كما هو) ===================== */
const CourseCard = ({ course, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      className="cursor-pointer rounded-2xl overflow-hidden group"
      style={{ minHeight: 360 }}        // ارتفاع أكبر للحاوية
      initial={{ scale: 0.95 }}         // دفعة خفيفة عند الظهور
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 20, delay: 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        scale: 1.15,                    // تكبير عام
        y: -10,                         // يقترب للأمام
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      }}
      onClick={onSelect}
    >
      {/* cover image تظهر وتتكبر وتدور هزة بسيطة عند التمرير */}
      <motion.img
        src={course.image}
        alt={course.title}
        className="w-full object-cover"
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={
          hovered
            ? { height: 180, opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{
          scale: 1.2,
          rotateZ: [0, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      />

      <Card className="bg-card/50 border border-border group-hover:shadow-lg transition-shadow">
        <CardHeader className="space-y-4 px-4 pt-4">
          <div className="flex items-center justify-between">
            {/* أيقونة الدورة تتكبر لوحدها */}
            <motion.img
              src={course.image}
              alt={course.title}
              className="h-10 w-10 rounded-md object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <Badge variant="secondary" className="text-xs">
              {course.level}
            </Badge>
          </div>
          <CardTitle className="text-lg font-bold">
            {course.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 pb-4 space-y-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {course.students}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          </div>

          <ul className="list-disc list-inside text-xs space-y-1">
            {course.features.slice(0, 3).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <Button className="w-full" onClick={onSelect}>
            عرض التفاصيل
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/* ===================== CourseDetailsPage -> Dialog ===================== */
/* نفس الاسم ونفس الـ props، لكن داخليًا حولناه لمودال */
const CourseDetailsPage = ({ course, onBack }) => {
  const isMobile = useIsMobile();
  if (!course) return null;

  const handleEnroll = () => {
    const msg = encodeURIComponent(
      `ممكن اشترك في كورس ${course.title}؟\nالاسم: [اسمك]\nالدورة: ${course.title}`
    );
    window.open(`https://wa.me/201080941234?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const desktopModalVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { y: 20, opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
  };

  const SHEET_OFFSCREEN = 1000;
  const sheetVariants: Variants = {
    hidden: { y: SHEET_OFFSCREEN },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
    exit: { y: SHEET_OFFSCREEN, transition: { duration: 0.25 } },
  };

  const featuresContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.15 },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  const handleDragEnd = (info: { offset: { y: number } }) => {
    if (info.offset.y > 120) onBack();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onBack}
      >
        {isMobile ? (
          // Bottom Sheet (Mobile)
          <motion.div
            dir="ltr"
            className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-2xl shadow-2xl overflow-hidden text-left"
            style={{ height: "85vh" }}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => handleDragEnd(info)}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="w-full flex justify-center py-3">
              <span className="w-12 h-1.5 rounded-full bg-muted-foreground/40"></span>
            </div>

             <div className="px-5 pb-8 overflow-y-auto h-full scrollbar-none text-left">
              <CloseButton onClose={onBack} side="left" />
              <ModalContent
                course={course}
                handleEnroll={handleEnroll}
                featuresContainer={featuresContainer}
                featureItem={featureItem}
              />
            </div>
          </motion.div>
        ) : (
          // Desktop Dialog
          <motion.div
            dir="ltr"
             className="relative bg-background rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-none text-left p-6"
             initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClose={onBack} side="left" />
            <ModalContent
              course={course}
              handleEnroll={handleEnroll}
              featuresContainer={featuresContainer}
              featureItem={featureItem}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

/* ===================== CloseButton ===================== */
const CloseButton = ({ onClose, side = "right" }) => (
  <button
    onClick={onClose}
    className={`absolute top-3 ${
      side === "right" ? "right-3" : "left-3"
    } text-muted-foreground hover:text-foreground`}
    aria-label="Close"
  >
    <X className="h-5 w-5" />
  </button>
);

/* ===================== ModalContent ===================== */
const ModalContent = ({ course, handleEnroll, featuresContainer, featureItem }) => (
  <>
    <img
      src={course.image}
      alt={course.title}
      className="w-full rounded-lg object-cover mb-4 aspect-[4/3]"
    />

    <h1 className="text-2xl md:text-3xl font-bold mb-3 text-left">{course.title}</h1>
    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed text-left">
      {course.description}
    </p>

    <motion.ul
      className="space-y-2 text-sm md:text-base mb-6 leading-relaxed text-left"
      variants={featuresContainer || {}}
      initial="hidden"
      animate="visible"
    >
      {course.features.map((f) => (
        <motion.li key={f} variants={featureItem || {}} className="flex items-start gap-2">
          <Check className="h-5 w-5 shrink-0 text-primary" />
          <span>{f}</span>
        </motion.li>
      ))}
    </motion.ul>

    <Card className="mb-6 bg-muted/30 border border-border/50">
      <CardContent className="py-3 px-4 flex items-center gap-3">
        <span className="text-sm md:text-base line-through text-muted-foreground">
          {course.originalPrice}
        </span>
        <span className="text-lg md:text-xl font-bold text-primary">
          {course.discountedPrice} جنيه
        </span>
      </CardContent>
    </Card>

    <Button className="btn-glow w-full md:w-auto" onClick={handleEnroll} size="lg">
      اشترك عبر واتساب
    </Button>
  </>
);

/* ===================== Main Component (بدون تغيير) ===================== */
export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="py-20">
      {selectedCourse ? (
        <CourseDetailsPage
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              الدورات التدريبية
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              دورات برمجة شاملة مصممة لجميع المستويات. من المبتدئين وحتى
              المحترفين.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                course={course}
                onSelect={() => setSelectedCourse(course)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
