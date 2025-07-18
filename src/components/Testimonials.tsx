import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    course: "Front-End Web Development",
    rating: 5,
    image: "👩‍💻",
    testimonial: "PR TEC Academy transformed my career completely. The hands-on approach and real-world projects gave me the confidence to land my dream job at Google. The instructors are incredibly knowledgeable and supportive.",
    outcome: "Landed job at Google after 3 months"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Mobile App Developer",
    course: "Flutter Development",
    rating: 5,
    image: "👨‍💼",
    testimonial: "I came in as a complete beginner and left with the skills to build professional mobile apps. The Flutter course was comprehensive and the projects were challenging yet achievable. Highly recommend!",
    outcome: "Built 3 apps, now freelancing full-time"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Full-Stack Developer",
    course: "Back-End Development",
    rating: 5,
    image: "👩‍🎓",
    testimonial: "The backend course opened up a whole new world for me. Learning Python, Django, and API development was made simple through their excellent curriculum. The job assistance program helped me find my current role.",
    outcome: "250% salary increase after completion"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student, Age 12",
    course: "Programming for Children",
    rating: 5,
    image: "🧒",
    testimonial: "I love coding now! Making games in Scratch is so much fun, and I'm already learning Python. My friends think I'm a computer genius! The teachers make everything easy to understand.",
    outcome: "Built 5 games, wants to be a game developer"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Career Switcher",
    course: "Programming Basics",
    rating: 5,
    image: "👩‍🏫",
    testimonial: "At 35, I thought it was too late to learn programming. PR TEC Academy proved me wrong! The supportive environment and practical approach made learning enjoyable. I'm now confident in my coding abilities.",
    outcome: "Successfully switched from teaching to tech"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Startup Founder",
    course: "Full-Stack Package",
    rating: 5,
    image: "👨‍🚀",
    testimonial: "Took multiple courses to build my startup's MVP. The comprehensive curriculum and practical projects gave me all the skills needed to bring my idea to life. Excellent value for money!",
    outcome: "Launched successful startup, raised $500K"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our graduates have to say about their transformative journey with PR TEC Academy.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-12 section-reveal">
          <Card className="course-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar and Basic Info */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                    {testimonials[currentIndex].image}
                  </div>
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-primary/10 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold text-primary">Course:</span>
                      <span className="text-sm ml-2">{testimonials[currentIndex].course}</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold text-accent">Outcome:</span>
                      <span className="text-sm ml-2">{testimonials[currentIndex].outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-primary/20 hover:border-primary hover:bg-primary/10"
            onClick={previous}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-primary/20 hover:border-primary hover:bg-primary/10"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="section-reveal">
          <h3 className="text-2xl font-bold text-center mb-8">More Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="course-card group cursor-pointer" onClick={() => goToSlide(index)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="mt-3 text-xs text-primary">
                    {testimonial.course}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 section-reveal">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives with PR TEC Academy. 
              Your success story could be next!
            </p>
            <Button className="btn-glow">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;