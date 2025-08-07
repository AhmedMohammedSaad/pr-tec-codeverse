import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      id: 'sara',
      rating: 5,
      image: ""
    },
    {
      id: 'mohamed',
      rating: 5,
      image: ""
    },
    {
      id: 'ahmed',
      rating: 5,
      image: ""
    },
    {
      id: 'karim',
      rating: 5,
      image: ""
    },
    {
      id: 'mai',
      rating: 5,
      image: ""
    },
    {
      id: 'sherif',
      rating: 5,
      image: ""
    }
  ];
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
            {t('testimonials.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-12 section-reveal">
          <Card className="course-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                    {testimonials[currentIndex].image}
                  </div>
                  <h3 className="text-xl font-bold">{t(`testimonials.items.${testimonials[currentIndex].id}.name`)}</h3>
                  <p className="text-muted-foreground text-sm">{t(`testimonials.items.${testimonials[currentIndex].id}.role`)}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                    "{t(`testimonials.items.${testimonials[currentIndex].id}.testimonial`)}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-primary/10 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold text-primary">{t('testimonials.course')}:</span>
                      <span className="text-sm ml-2">{t(`testimonials.items.${testimonials[currentIndex].id}.course`)}</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold text-accent">{t('testimonials.outcome')}:</span>
                      <span className="text-sm ml-2">{t(`testimonials.items.${testimonials[currentIndex].id}.outcome`)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" size="sm" className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-primary/20 hover:border-primary hover:bg-primary/10" onClick={previous}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm" className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-primary/20 hover:border-primary hover:bg-primary/10" onClick={next}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
            />
          ))}
        </div>

        <div className="section-reveal">
          <h3 className="text-2xl font-bold text-center mb-8">{t('testimonials.additionalStories')}</h3>
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
                        {t(`testimonials.items.${testimonial.id}.name`)}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {t(`testimonials.items.${testimonial.id}.role`)}
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
                  <p className="text-sm text-muted-foreground line-clamp-3">"{t(`testimonials.items.${testimonial.id}.testimonial`)}"</p>
                  <div className="mt-3 text-xs text-primary">
                    {t(`testimonials.items.${testimonial.id}.course`)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 section-reveal">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">{t('testimonials.cta.title')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('testimonials.cta.description')}
            </p>
            <Button className="btn-glow">
              {t('testimonials.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
