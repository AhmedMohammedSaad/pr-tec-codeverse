import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, BookOpen, Clock, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Award,
      title: "مدربون خبراء",
      description: "تعلّم على يد محترفين بخبرة أكثر من 10 سنوات"
    },
    {
      icon: Users,
      title: "مجموعات صغيرة",
      description: "اهتمام شخصي لكل طالب بحد أقصى 15 طالب في الدفعة"
    },
    {
      icon: BookOpen,
      title: "مشاريع عملية",
      description: "بناء تطبيقات حقيقية ومشاريع تضاف لسيرتك الذاتية"
    },
    {
      icon: Clock,
      title: "مواعيد مرنة",
      description: "مجموعات مسائية وعطلة نهاية الأسبوع لتناسب وقتك"
    },
    {
      icon: Zap,
      title: "أحدث التقنيات",
      description: "تعلم باستخدام أحدث الأدوات والتقنيات في السوق"
    },
    {
      icon: CheckCircle,
      title: "دعم وظيفي",
      description: "إرشاد مهني ودعم في التوظيف لكل الخريجين"
    }
  ];

  const achievements = [
    { number: "500+", label: "طالب تخرجوا" },
    { number: "95%", label: "نسبة التوظيف" },
    { number: "50+", label: "شريك صناعي" },
    { number: "4.9/5", label: "تقييم الطلاب" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            عن <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PR TEC Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن أكاديمية برمجة رائدة تهدف لتحويل المبتدئين إلى مطورين واثقين من أنفسهم من خلال تعليم عملي قائم على المشاريع ومحتوى مواكب للصناعة.
          </p>
        </div>

        {/* محتوى رئيسي */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* اليسار */}
          <div className="section-reveal">
            <h3 className="text-3xl font-bold mb-6">نؤهل الجيل القادم من المبرمجين</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                تأسست أكاديمية PR TEC في عام 2023، وسرعان ما أصبحت في طليعة تعليم البرمجة من خلال تقديم دورات متكاملة تربط بين الجانب الأكاديمي ومتطلبات سوق العمل.
              </p>
              <p>
                مهمتنا بسيطة: توفير تعليم برمجة عالي الجودة للجميع بغض النظر عن الخلفية أو الخبرة السابقة. نؤمن أن أي شخص يمكنه أن يصبح مبرمجًا مميزًا بالتوجيه الصحيح والتدريب العملي.
              </p>
              <p>
                من الأطفال الذين يخطون أولى خطواتهم في البرمجة إلى المحترفين الذين يسعون لتطوير مهاراتهم، نوفر بيئة تعليمية داعمة تشجع على الإبداع، وحل المشكلات، والتميز التقني.
              </p>
            </div>

            <div className="mt-8">
              <Button className="btn-glow">
                اعرف المزيد عن رحلتنا
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
            لماذا تختار <span className="text-primary">PR TEC Academy؟</span>
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
            <h3 className="text-2xl font-bold mb-4">جاهز تبدأ رحلتك في عالم البرمجة؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              انضم لآلاف الطلاب اللي غيروا حياتهم مع PR TEC Academy. ابدأ أول خطوة نحو مستقبل مهني احترافي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                استعرض الدورات
              </Button>
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                احجز تجربة مجانية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
