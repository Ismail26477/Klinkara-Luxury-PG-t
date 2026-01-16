import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Amenities", href: "#amenities" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop top bar */}
      <div className="bg-navy text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex gap-6">
            <a href="tel:+917799066011" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 77990 66011
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Hinjawadi, Pune
            </span>
          </div>
          <span className="text-gold">★ Premium PG Accommodation</span>
        </div>
      </div>

      {/* Header */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? "top-0 glass-effect shadow-lg" : "top-10 bg-transparent"
}`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all ${isScrolled ? "h-16" : "h-20"}`}>
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="font-bold text-navy">K</span>
              </div>
              <div>
                <div className={`font-semibold ${isScrolled ? "text-navy" : "text-white"}`}>
                  Klinkara
                </div>
                <div className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/70"}`}>
                  Luxury PG
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-8">
              {navLinks.map((l) => (
                <button
                  key={l.name}
                  onClick={() => scrollToSection(l.href)}
                  className={`${isScrolled ? "text-navy" : "text-white"} hover:text-gold`}
                >
                  {l.name}
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
            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className={`w-7 h-7 ${isScrolled ? "text-navy" : "text-white"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-navy/95 backdrop-blur"
          >
            <div className="p-6 flex justify-between items-center">
              <span className="text-white font-semibold">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            <div className="px-6 space-y-6 mt-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white text-lg w-full text-left"
                >
                  {link.name}
                </button>
              ))}

              <Button className="w-full mt-6 bg-gold text-navy">
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
 
