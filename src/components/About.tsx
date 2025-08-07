import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, BookOpen, Clock, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('about.features.expertTrainers.title'),
      description: t('about.features.expertTrainers.description')
    },
    {
      icon: Users,
      title: t('about.features.smallGroups.title'),
      description: t('about.features.smallGroups.description')
    },
    {
      icon: BookOpen,
      title: t('about.features.practicalProjects.title'),
      description: t('about.features.practicalProjects.description')
    },
    {
      icon: Clock,
      title: t('about.features.flexibleSchedule.title'),
      description: t('about.features.flexibleSchedule.description')
    },
    {
      icon: Zap,
      title: t('about.features.latestTech.title'),
      description: t('about.features.latestTech.description')
    },
    {
      icon: Award,
      title: t('about.features.careerSupport.title'),
      description: t('about.features.careerSupport.description')
    }
  ];

  const achievements = [
    { number: "500+", label: t('about.achievements.graduates') },
    { number: "95%", label: t('about.achievements.employmentRate') },
    { number: "50+", label: t('about.achievements.industryPartners') },
    { number: "4.9/5", label: t('about.achievements.studentRating') }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* محتوى رئيسي */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* اليسار */}
          <div className="section-reveal">
            <h3 className="text-3xl font-bold mb-6">{t('about.subtitle')}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('about.description')}
              </p>
              <p>
                {t('about.mission')}
              </p>
              <p>
                {t('about.vision')}
              </p>
            </div>

            <div className="mt-8">
              <Button className="btn-glow">
                {t('about.learnMoreJourney')}
              </Button>
            </div>
          </div>

          {/* الإنجازات */}
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

        {/* لماذا نحن */}
        <div className="section-reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t('about.whyChooseUs')}
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

        {/* دعوة للتسجيل */}
        <div className="text-center mt-16 section-reveal">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">{t('about.readyToStart')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('about.joinThousands')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                {t('about.browseCourses')}
              </Button>
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                {t('about.bookFreeTrial')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
