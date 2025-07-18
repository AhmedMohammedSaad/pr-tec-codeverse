import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Gamepad2, Puzzle, Star, Heart, Zap } from "lucide-react";

const ChildrenSection = () => {
  const kidFeatures = [
    {
      icon: Gamepad2,
      title: "Game-Based Learning",
      description: "Learn programming through fun games and interactive challenges"
    },
    {
      icon: Puzzle,
      title: "Visual Programming",
      description: "Start with Scratch and block-based coding before moving to text"
    },
    {
      icon: Star,
      title: "Creative Projects",
      description: "Build animations, games, and stories that spark imagination"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Supportive, encouraging atmosphere designed specifically for kids"
    }
  ];

  const ageGroups = [
    {
      age: "Ages 6-8",
      title: "Little Coders",
      description: "Introduction to basic programming concepts through visual games",
      features: ["Scratch Jr.", "Basic Logic", "Simple Animations", "Story Creation"]
    },
    {
      age: "Ages 9-12",
      title: "Young Developers",
      description: "Build real projects with Scratch and introduction to Python",
      features: ["Scratch Programming", "Game Development", "Python Basics", "Problem Solving"]
    },
    {
      age: "Ages 13-16",
      title: "Teen Programmers",
      description: "Advanced programming with Python and web development basics",
      features: ["Python Projects", "Web Development", "Mobile Apps", "Portfolio Building"]
    }
  ];

  return (
    <section id="children" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center mb-6">
            <Baby className="h-12 w-12 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Programming for <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Children</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spark your child's creativity and logical thinking with our specially designed programming courses. 
            Fun, interactive, and educational - the perfect introduction to the world of coding!
          </p>
        </div>

        {/* Hero Card for Kids */}
        <div className="mb-16 section-reveal">
          <Card className="course-card bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Why Kids Should Learn Programming?
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• <strong>Logical Thinking:</strong> Develops problem-solving and analytical skills</p>
                    <p>• <strong>Creativity:</strong> Express ideas through code, games, and digital art</p>
                    <p>• <strong>Future Skills:</strong> Prepare for a technology-driven world</p>
                    <p>• <strong>Confidence:</strong> Build self-esteem through project completion</p>
                    <p>• <strong>Math Skills:</strong> Improve mathematical concepts through practical application</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {kidFeatures.map((feature, index) => (
                    <Card key={index} className="course-card text-center p-4">
                      <feature.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Age Groups */}
        <div className="section-reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            Courses by <span className="text-accent">Age Group</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="course-card group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">👦</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {group.title}
                  </CardTitle>
                  <div className="text-accent font-semibold">{group.age}</div>
                  <CardDescription>
                    {group.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">What they'll learn:</h4>
                    <ul className="space-y-1">
                      {group.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <Zap className="h-3 w-3 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full btn-glow">
                    Enroll Your Child
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Features for Kids */}
        <div className="mt-20 section-reveal">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8">
              What Makes Our Kids' Program Special?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎮</div>
                <h4 className="font-semibold mb-2">Interactive Games</h4>
                <p className="text-sm text-muted-foreground">Learning through play with coding games and challenges</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h4 className="font-semibold mb-2">Kid-Friendly Teachers</h4>
                <p className="text-sm text-muted-foreground">Specially trained instructors who understand young minds</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-semibold mb-2">Achievement System</h4>
                <p className="text-sm text-muted-foreground">Badges, certificates, and rewards for motivation</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">Small Groups</h4>
                <p className="text-sm text-muted-foreground">Maximum 8 kids per class for personalized attention</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="border-accent/50 hover:border-accent hover:bg-accent/10">
                Book a Free Trial Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;