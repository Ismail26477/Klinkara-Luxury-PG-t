import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Amenities", href: "#amenities" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-navy text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917799066011" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 77990 66011</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hinjawadi, Pune</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold">★ Premium PG Accommodation</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? "top-0 glass-effect shadow-lg" : "top-10 bg-transparent"
}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
<div
  className={`flex items-center justify-between ${
    isScrolled ? "h-16" : "h-20"
  } transition-all duration-300`}
>            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-display text-2xl font-bold">K</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-display text-xl font-semibold ${isScrolled ? "text-navy" : "text-white"}`}>
                  Klinkara
                </span>
                <span className={`text-xs tracking-widest uppercase ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                  Luxury PG
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-gold ${
                    isScrolled ? "text-navy" : "text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+917799066011"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? "bg-navy/10 text-navy hover:bg-navy/20" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium text-sm">Call Us</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-navy" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-navy" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-3 text-navy font-medium border-b border-border last:border-0 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full mt-4 bg-gold hover:bg-gold-dark text-navy font-semibold"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
