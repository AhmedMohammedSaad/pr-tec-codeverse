import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Code,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "footer.courses.flutter", href: "#courses" },
      { name: "footer.courses.frontend", href: "#courses" },
      { name: "footer.courses.backend", href: "#courses" },
      { name: "footer.courses.basics", href: "#courses" },
      { name: "footer.courses.kids", href: "#children" },
    ],
    company: [
      { name: t('footer.links.aboutUs'), href: "#about" },
      { name: t('footer.links.ourTrainers'), href: "#about" },
      { name: t('footer.links.successStories'), href: "#testimonials" },
      { name: t('footer.links.employmentServices'), href: "#contact" },
      { name: t('footer.links.blog'), href: "#" },
    ],
    support: [
      { name: t('footer.links.contactUs'), href: "#contact" },
      { name: t('footer.links.faq'), href: "#" },
      { name: t('footer.links.studentPortal'), href: "#" },
      { name: t('footer.links.technicalSupport'), href: "#" },
      { name: t('footer.links.courseMaterials'), href: "#" },
    ],
    legal: [
      { name: t('footer.links.privacyPolicy'), href: "#" },
      { name: t('footer.links.termsOfService'), href: "#" },
      { name: t('footer.links.refundPolicy'), href: "#" },
      { name: t('footer.links.cookiePolicy'), href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-card border-t border-border"
    >
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {t('footer.newsletter.title')}{" "}
              <span className="text-primary">PR TEC Academy</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('footer.newsletter.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1"
              />
              <Button className="btn-glow whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-primary" />
                <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PR TEC Academy
              </span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* <div className="space-y-2 text-sm text-muted-foreground"> */}
              {/* <div className="flex items-center gap-2"> */}
                {/* <MapPin className="h-4 w-4 text-primary" /> */}
                {/* <span>123 شارع التقنية، حي الابتكار</span> */}
              {/* </div> */}
              {/* <div className="flex items-center gap-2"> */}
                {/* <Phone className="h-4 w-4 text-primary" /> */}
                {/* <span>+1 (555) 123-TECH</span> */}
              {/* </div> */}
              {/* <div className="flex items-center gap-2"> */}
                {/* <Mail className="h-4 w-4 text-primary" /> */}
                {/* <span>info@prtecacademy.com</span> */}
              {/* </div> */}
            {/* </div> */}

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-10 h-10 p-0 border-border hover:border-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {[
              { title: t('footer.sections.courses'), links: footerLinks.courses },
              { title: t('footer.sections.company'), links: footerLinks.company },
              { title: t('footer.sections.support'), links: footerLinks.support },
              { title: t('footer.sections.legal'), links: footerLinks.legal },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-primary">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.name.startsWith('footer.') ? t(link.name) : link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright', { year: currentYear })}
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">

          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
