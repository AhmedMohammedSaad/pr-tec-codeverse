import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "   ", href: "  " },
    { name: "من نحن", href: "#about" },
    { name: "الدورات", href: "#courses" },
    { name: "للأطفال", href: "#children" },
    { name: "الآراء", href: "#testimonials" },
   // { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* الشعار */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-8 w-8 text-primary" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              أكاديمية PR TEC
            </span>
          </div>

          {/* روابط سطح المكتب */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* <Button className="btn-glow">سجل الآن</Button> */}
          </div>

          {/* زر القائمة للجوال */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* قائمة الجوال */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-lg rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
               {/* <Button className="btn-glow w-full mt-4">سجل الآن</Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
