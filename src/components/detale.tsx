import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

const courseMap = {
  flutter: {
    image: "https://images.unsplash.com/photo-1618422188867-dc59b3db0967?auto=format&fit=crop&w=500&q=80",
    title: "Flutter App Development",
    description: "Learn to build beautiful, high-performance mobile apps for Android and iOS using Flutter and Dart.",
    level: "Beginner to Advanced",
    duration: "14 weeks",
    students: "150+",
    rating: 4.5,
    originalPrice: 5000,
    discountedPrice: 4500,
    features: [
      "Dart Language Basics",
      "Flutter UI & Widgets",
      "State Management (Provider, Bloc)",
      "Firebase Integration",
      "Push Notifications",
      "App Deployment"
    ]
  },
  // Add more keys like 'frontend', 'backend-python'... etc
};

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courseMap[courseId];

  if (!course) return <div className="text-center py-20">Course not found.</div>;

  const handleEnroll = () => {
    const phoneMessage = encodeURIComponent(
      `طلب جديد\nالاسم: [User Name]\nرقم الهاتف: [Your Phone]\nالدورة: ${course.title}`
    );
    const whatsappURL = `https://wa.me/201234567890?text=${phoneMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={course.image} alt={course.title} className="w-full md:w-1/2 rounded-lg object-cover" />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span><Clock className="inline w-4 h-4 mr-1" />{course.duration}</span>
            <span><Users className="inline w-4 h-4 mr-1" />{course.students}</span>
            <span><Star className="inline w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />{course.rating}</span>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {course.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="text-lg">
            <span className="line-through text-muted-foreground">{course.originalPrice} EGP</span>
            <span className="ml-2 font-bold text-primary">{course.discountedPrice} EGP</span>
          </div>
          <Badge>{course.level}</Badge>
          <Button className="mt-4 w-full btn-glow" onClick={handleEnroll}>اشترك الآن عبر واتساب</Button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
