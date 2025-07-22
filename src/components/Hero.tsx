import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Programming Education"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <Code2 className="absolute top-20 left-10 h-8 w-8 text-primary/30 animate-float" style={{animationDelay: '0s'}} />
        <Zap className="absolute top-40 right-20 h-6 w-6 text-accent/40 animate-float" style={{animationDelay: '1s'}} />
        <Code2 className="absolute bottom-40 left-20 h-10 w-10 text-primary/20 animate-float" style={{animationDelay: '2s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-text">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Programming
            </span>
            <br />
            at PR TEC Academy
          </h1>
        </div>

        <div className="hero-subtitle">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn Flutter, Web Development, Backend, and Programming Fundamentals 
            from industry experts. Start your coding journey today with hands-on projects 
            and personalized mentorship.
          </p>
        </div>

        {/* Stats */}
        <div className="hero-subtitle mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-glow group text-lg px-8 py-6"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 group"
            onClick={() => window.open('https://youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
          >
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;