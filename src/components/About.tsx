import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, BookOpen, Clock, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years of experience"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 15 students per batch"
    },
    {
      icon: BookOpen,
      title: "Hands-on Projects",
      description: "Build real-world applications and portfolio-worthy projects"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend and evening batches to fit your busy lifestyle"
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Stay ahead with cutting-edge tools and frameworks"
    },
    {
      icon: CheckCircle,
      title: "Job Assistance",
      description: "Career guidance and placement support for all graduates"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Graduated" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PR TEC Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a premier programming academy dedicated to transforming beginners into confident developers 
            through practical, project-based learning and industry-relevant curriculum.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="section-reveal">
            <h3 className="text-3xl font-bold mb-6">Empowering the Next Generation of Developers</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, PR TEC Academy has been at the forefront of programming education, 
                offering comprehensive courses that bridge the gap between academic theory and industry practice.
              </p>
              <p>
                Our mission is simple: to make quality programming education accessible to everyone, 
                regardless of their background or prior experience. We believe that with the right guidance 
                and hands-on practice, anyone can become a skilled developer.
              </p>
              <p>
                From children taking their first steps into coding to professionals looking to upskill, 
                we provide a supportive learning environment that fosters creativity, problem-solving, 
                and technical excellence.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="btn-glow">
                Learn More About Our Story
              </Button>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="section-reveal">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="course-card text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="section-reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">PR TEC Academy?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="course-card group">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 section-reveal">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Coding Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with PR TEC Academy. 
              Take the first step towards becoming a professional developer today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;