"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ruthvij R Chandan",
    rating: 5,
    text: "I’m currently staying in this PG, and my experience has been really great. The owner, Anna, is very kind and supportive, and the place has a warm, homely atmosphere. The food is tasty and hygienic, and the maintenance is always on point—clean rooms, tidy common areas, and quick help whenever needed. Special mention to Sirisha for managing everything smoothly. The cab facility by Sunny is reliable and convenient. Overall, I’m very happy and would highly recommend this PG.",
  },
  {
    id: 2,
    name: "Sujith Bayari",
    rating: 5,
    text: "I’m currently staying in this PG, and it’s been a very comfortable experience. Anna, the owner, is supportive, the food is clean and tasty, and the place is well maintained. Special thanks to Sirisha for managing everything smoothly and being approachable. The cab service by Sunny is reliable and convenient. A safe and well-managed PG.",
  },
  {
    id: 3,
    name: "Meghna Kushwaha",
    rating: 5,
    text: "This PG has a very comforting and homely feeling. The hall is nice and spacious, making it a great place to relax or spend time with others. The balcony is an added bonus, bringing in fresh air and light. Special thanks to the PG owners Bunny, Shrisha, and Reddy Anna for being friendly and ensuring our comfort.",
  },
  {
    id: 4,
    name: "Ruchitha Peddi",
    rating: 5,
    text: "The PG offers spacious and well-maintained rooms that provide a comfortable and peaceful atmosphere. Its convenient location makes it an excellent choice for a hassle-free stay. Managed by a kind and well-mannered family. Amenities like refrigerator and washing machine add to the comfort.",
  },
  {
    id: 5,
    name: "Darsh Vishwakarma",
    rating: 5,
    text: "I have been staying at Klinkaara for the past 5 months and it has been a very positive experience. The cleanliness and maintenance stand out. The management listens to feedback. Rooms are well-ventilated and amenities like Wi-Fi, water supply, and inverter have been consistent.",
  },
  {
    id: 6,
    name: "Andra Rohith",
    rating: 5,
    text: "Extraordinary co-living space with all facilities including sports area, workspace, and self-cooking options. Highly appreciated and recommended.",
  },
  {
    id: 7,
    name: "Atharva Agnihotri",
    rating: 5,
    text: "Large rooms and a calm environment. Very comfortable place to stay.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-xs">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Real experiences from people who call Klinkara their home.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
              >
                <Quote className="w-8 h-8 text-gold/40 mb-3" />

                <p className="text-gold/60 text-sm mb-3">
                  “Care Like a Mother”
                </p>

                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center">
                  <div>
                    <h4 className="text-white font-semibold text-base">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gold text-xs mt-1">
                      Verified Resident
                    </p>
                  </div>

                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="h-9 w-9 rounded-full border-white/20 text-black hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-6"
                      : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-9 w-9 rounded-full border-white/20 text-black hover:bg-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
