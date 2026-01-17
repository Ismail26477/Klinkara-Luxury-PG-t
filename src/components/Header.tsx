"use client"

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
      {/* DESKTOP TOP BAR */}
      <div className="hidden md:block bg-navy text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+917799066011" className="flex items-center gap-2 hover:text-gold transition">
              <Phone className="w-4 h-4" /> +91 77990 66011
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Hinjawadi, Pune
            </span>
          </div>
          <span className="text-gold">★ Premium PG Accommodation</span>
        </div>
      </div>

      {/* HEADER */}
      <motion.header
        className={`
          fixed left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? "bg-gold shadow-lg" : "bg-transparent"}
          top-0
          ${!isScrolled ? "md:top-10" : "md:top-0"}
        `}
      >
        <div className="container mx-auto px-4">

          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between h-16 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hover:scale-110 transition"
            >
              <Menu className={`w-7 h-7 ${isScrolled ? "text-navy" : "text-white"}`} />
            </button>

            <img
              src="/logo.png"
              alt="Klinkara Luxury PG"
              className="h-16 w-auto object-contain hover:scale-105 transition  "
            />

            <a href="tel:+917799066011" className="hover:scale-110 transition">
              <Phone className={`w-6 h-6 ${isScrolled ? "text-navy" : "text-white"}`} />
            </a>
          </div>

          {/* DESKTOP HEADER */}
          <div className={`hidden lg:flex items-center justify-between ${isScrolled ? "h-16" : "h-20"}`}>

            {/* LOGO */}
            <img
              src="/logo.png"
              alt="Klinkara Luxury PG"
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled ? "h-12" : "h-24"
              } w-auto object-contain`}
            />

            {/* NAV */}
            <nav className="flex gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-medium transition-colors
                    ${isScrolled ? "text-navy" : "text-white"}
                    hover:text-black
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-black
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="tel:+917799066011"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                  hover:shadow-md hover:scale-105
                  ${isScrolled ? "bg-white/80 text-navy" : "bg-white/20 text-white"}
                `}
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>

              <Button className="bg-black text-gold font-semibold transition-all hover:scale-105 hover:shadow-xl">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-navy/95 backdrop-blur"
          >
            <div className="p-6 flex justify-between items-center">
              <img src="/logo.png" className="h-8 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-7 h-7 text-white hover:rotate-90 transition" />
              </button>
            </div>

            <div className="px-6 space-y-6 mt-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white text-lg w-full text-left transition-all hover:text-gold hover:translate-x-2"
                >
                  {link.name}
                </button>
              ))}

              <Button className="w-full mt-6 bg-gold text-navy font-semibold hover:scale-105 transition">
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
