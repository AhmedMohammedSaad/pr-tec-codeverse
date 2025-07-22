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
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "We'll get back to you within 24 hours. Thank you for your interest!"
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [{
    icon: MapPin,
    title: "Visit Our Campus",
    details: ["123 Tech Street", "Innovation District", "Techville, TC 12345"],
    action: "Get Directions"
  }, {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-TECH", "+1 (555) 123-8324"],
    action: "Call Now"
  }, {
    icon: Mail,
    title: "Email Us",
    details: ["info@prtecacademy.com", "admissions@prtecacademy.com"],
    action: "Send Email"
  }, {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"],
    action: "Schedule Visit"
  }];
  const quickActions = [{
    icon: Calendar,
    title: "Book a Demo Class",
    description: "Experience our teaching style firsthand",
    badge: "Free"
  }, {
    icon: MessageCircle,
    title: "Chat with Counselor",
    description: "Get personalized course recommendations",
    badge: "Online"
  }, {
    icon: Users,
    title: "Join Info Session",
    description: "Weekly sessions every Saturday",
    badge: "Group"
  }];
  return <section id="contact" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your programming journey? We're here to help you choose the perfect course 
            and answer all your questions. Let's talk about your future in tech!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 section-reveal">
          {quickActions.map((action, index) => <Card key={index} className="course-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <action.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary" className="ml-2">
                    {action.badge}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {action.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {action.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="course-card section-reveal">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background border-border focus:border-primary" />
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-background border-border focus:border-primary" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="bg-background border-border focus:border-primary" />
                  </div>
                  <div>
                    <select name="course" value={formData.course} onChange={handleChange} className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="">Select Course Interest</option>
                      <option value="flutter">Flutter Development</option>
                      <option value="frontend">Front-End Web Development</option>
                      <option value="backend">Back-End Development</option>
                      <option value="basics">Programming Basics</option>
                      <option value="kids">Programming for Children</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Textarea name="message" placeholder="Tell us more about your goals and any questions you have..." value={formData.message} onChange={handleChange} rows={5} className="bg-background border-border focus:border-primary resize-none" />
                </div>
                
                <Button type="submit" className="w-full btn-glow" disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </> : <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 section-reveal">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                We're always happy to help! Reach out to us through any of the following channels 
                or visit our campus for a personal tour.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => <Card key={index} className="course-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <info.icon className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>)}
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                          {info.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Newsletter Signup */}
            <Card className="course-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Stay Updated</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Subscribe to our newsletter for course updates, tech tips, and exclusive offers.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="bg-background border-border focus:border-primary" />
                  <Button className="btn-glow whitespace-nowrap" onClick={() => {
                  toast({
                    title: "Subscribed! 📧",
                    description: "You've been added to our newsletter list."
                  });
                }}>
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 section-reveal">
          <Card className="course-card overflow-hidden">
            <CardContent className="p-0">
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;