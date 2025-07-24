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
    image: "data:image/png;base64,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",
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
    image: "https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg",
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
    image: "https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5RJpzxFJSFSNhp7UGtUCfkXq-4XbSBbW0w&s",
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
