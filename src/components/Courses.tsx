import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Code, Globe, Server, Baby, BookOpen } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "Flutter Development",
    description: "Master cross-platform mobile development with Flutter and Dart",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "150+",
    rating: 4.9,
    features: ["Dart Fundamentals", "Widget Development", "State Management", "Firebase Integration", "App Store Deployment"],
    price: "$299",
    color: "text-blue-400"
  },
  {
    icon: Globe,
    title: "Front-End Web Development",
    description: "Build stunning websites with HTML, CSS, JavaScript, and React",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    students: "200+",
    rating: 4.8,
    features: ["HTML5 & CSS3", "JavaScript ES6+", "React & Hooks", "Responsive Design", "API Integration"],
    price: "$249",
    color: "text-green-400"
  },
  {
    icon: Server,
    title: "Back-End Development",
    description: "Learn server-side development with Node.js, Python, and APIs",
    level: "Intermediate to Advanced",
    duration: "14 weeks",
    students: "120+",
    rating: 4.9,
    features: ["Node.js & Express", "Python & Django", "Database Design", "RESTful APIs", "Cloud Deployment"],
    price: "$349",
    color: "text-purple-400"
  },
  {
    icon: BookOpen,
    title: "Programming Basics",
    description: "Perfect foundation for teens and complete beginners",
    level: "Beginner",
    duration: "8 weeks",
    students: "300+",
    rating: 4.7,
    features: ["Programming Logic", "Problem Solving", "Python Basics", "Project Building", "Code Best Practices"],
    price: "$199",
    color: "text-yellow-400"
  },
  {
    icon: Baby,
    title: "Programming for Children",
    description: "Fun, interactive coding with block-based logic and Python",
    level: "Ages 8-14",
    duration: "6 weeks",
    students: "100+",
    rating: 5.0,
    features: ["Scratch Programming", "Game Development", "Python for Kids", "Creative Projects", "Interactive Learning"],
    price: "$149",
    color: "text-pink-400"
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programming courses designed for all skill levels. 
            From complete beginners to advanced developers, we have the perfect path for you.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={course.title} className="course-card group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <course.icon className={`h-12 w-12 ${course.color} transition-all duration-300 group-hover:scale-110`} />
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Course Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground">one-time</span>
                  </div>
                  
                  <Button className="w-full btn-glow">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 section-reveal">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Can't decide which course is right for you?</h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation with our education counselors to find your perfect learning path.
            </p>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;