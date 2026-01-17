import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Amenities", href: "#amenities" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Triple Sharing Rooms",
  "Double Sharing Rooms",
  "Single Sharing Rooms",
  "Daily Meals",
  "Shuttle Service",
  "Housekeeping",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND (UPDATED LOGO) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/header-logo.png"
              alt="Klinkara Luxury PG"
              className="h-32 w-auto mb-6 object-contain"
            />

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Experience premium living at Klinkara Luxury PG. We provide world-class
              amenities, delicious meals, and a vibrant community for working
              professionals in Hinjawadi, Pune.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <span className="text-gold">Phone:</span>
                <br />
                <a
                  href="tel:+917799066011"
                  className="hover:text-gold transition-colors"
                >
                  +91 77990 66011
                </a>
              </li>
              <li>
                <span className="text-gold">Email:</span>
                <br />
                <a
                  href="mailto:klinkaraluxury@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  klinkaraluxury@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gold">Address:</span>
                <br />
                HPF2+3G9, Maan Road, Phase 3,
                <br />
                Hinjawadi, Pimpri-Chinchwad,
                <br />
                Pune, Maharashtra 411057
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Klinkara Luxury PG. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Pune
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
