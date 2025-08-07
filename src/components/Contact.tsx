import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
   

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Clock,
      title: t('contact.workingHours.title'),
      details: [t('contact.workingHours.schedule')],
      action: t('contact.workingHours.action')
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: t('contact.quickActions.trial.title'),
      description: t('contact.quickActions.trial.description'),
      badge: t('contact.quickActions.trial.badge')
    },
    {
      icon: MessageCircle,
      title: t('contact.quickActions.consultant.title'),
      description: t('contact.quickActions.consultant.description'),
      badge: t('contact.quickActions.consultant.badge')
    },
    {
      icon: Users,
      title: t('contact.quickActions.session.title'),
      description: t('contact.quickActions.session.description'),
      badge: t('contact.quickActions.session.badge')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
          <div className="section-reveal">
            <Card className="course-card">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                <CardDescription>{t('contact.form.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t('contact.form.name.label')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.name.placeholder')}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t('contact.form.email.label')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.email.placeholder')}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">{t('contact.form.phone.label')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.phone.placeholder')}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t('contact.form.message.label')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.message.placeholder')}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-glow" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 section-reveal">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contact.info.description')}
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
