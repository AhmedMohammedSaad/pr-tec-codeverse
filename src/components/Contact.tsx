import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
   

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
   
    </section>
  );
};

export default Contact;
