import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const ChildrenSection = () => {
  const { t } = useTranslation();
  
  const ageGroups = [
    {
      id: 'group1',
      features: ["Scratch Jr.", "المنطق الأساسي", "رسوم متحركة بسيطة", "قصص تفاعلية"]
    },
    {
      id: 'group2',
      features: ["Scratch", "برمجة ألعاب", "أساسيات Python", "حل المشكلات"]
    },
    {
      id: 'group3',
      features: ["مشاريع Python", "تطوير مواقع", "تطبيقات موبايل", "بناء ملف أعمال"]
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
              {t('children.title')} <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{t('children.titleHighlight')}</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('children.subtitle')}
          </p>
        </div>

        {/* Age Groups */}
        <div className="section-reveal">
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="course-card group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">👦</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {t(`children.ageGroups.${group.id}.title`)}
                  </CardTitle>
                  <div className="text-accent font-semibold">{t(`children.ageGroups.${group.id}.age`)}</div>
                  <CardDescription>
                    {t(`children.ageGroups.${group.id}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">{t('children.whatWillLearn')}</h4>
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
                    {t('children.bookPlace')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;
