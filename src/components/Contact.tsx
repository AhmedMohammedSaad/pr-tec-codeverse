import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "تم إرسال الرسالة بنجاح! 🎉",
      description: "سنتواصل معك خلال 24 ساعة. شكرًا لاهتمامك!"
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Clock,
      title: "مواعيد العمل",
      details: ["السبت - الخميس : 9 صباحًا - 8 مساءً"],
      action: "اتصل الآن"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "احجز حصة تجريبية",
      description: "اختبر طريقة تدريسنا بنفسك",
      badge: "مجاني"
    },
    {
      icon: MessageCircle,
      title: "تحدث مع مستشار",
      description: "احصل على توصيات مخصصة للدورات",
      badge: "أونلاين"
    },
    {
      icon: Users,
      title: "انضم إلى جلسة تعريفية",
      description: "جلسات أسبوعية كل سبت",
      badge: "جماعية"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            تواصل <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مستعد لبدء رحلتك في البرمجة؟ نحن هنا لمساعدتك في اختيار الدورة المناسبة والإجابة على كل استفساراتك. دعنا نتحدث عن مستقبلك التقني!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 section-reveal">
          {quickActions.map((action, index) => (
            <Card key={index} className="course-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <action.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary" className="ml-2">{action.badge}</Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{action.title}</h3>
                <p className="text-muted-foreground text-sm">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="course-card section-reveal">
            <CardHeader>
              <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              <CardDescription>
                املأ النموذج وسنرد عليك بأسرع وقت ممكن.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="الاسم الكامل" value={formData.name} onChange={handleChange} required className="bg-background border-border focus:border-primary" />
                  <Input name="email" type="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={handleChange} required className="bg-background border-border focus:border-primary" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="phone" type="tel" placeholder="رقم الهاتف" value={formData.phone} onChange={handleChange} className="bg-background border-border focus:border-primary" />
                  <select name="course" value={formData.course} onChange={handleChange} className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">اختر الدورة التدريبية</option>
                    <option value="flutter">تطوير تطبيقات Flutter</option>
                    <option value="frontend">تطوير الواجهة الأمامية</option>
                    <option value="backend">تطوير الواجهة الخلفية</option>
                    <option value="basics">أساسيات البرمجة</option>
                    <option value="kids">برمجة للأطفال</option>
                    <option value="consultation">استشارة عامة</option>
                  </select>
                </div>

                <Textarea name="message" placeholder="حدثنا عن أهدافك أو استفساراتك..." value={formData.message} onChange={handleChange} rows={5} className="bg-background border-border focus:border-primary resize-none" />

                <Button type="submit" className="w-full btn-glow" disabled={isSubmitting}>
                  {isSubmitting ? (<><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>جاري الإرسال...</>) : (<><Send className="mr-2 h-4 w-4" /> أرسل الرسالة</>)}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 section-reveal">
            <div>
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <p className="text-muted-foreground mb-8">
                يسعدنا دائمًا مساعدتك! تواصل معنا من خلال أي من الوسائل التالية أو قم بزيارتنا.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="course-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <info.icon className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">{info.action} →</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
