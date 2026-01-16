"use client"

import { motion } from "framer-motion"
import { Landmark, ShoppingCart, Hospital } from "lucide-react"

const nearbyPlaces = [
  {
    icon: Landmark,
    title: "Rajiv Gandhi InfoTech Park",
    distance: "5.7 km",
    image: "/nearby-it-park.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Hinjawadi Phase 1",
    distance: "5.8 km",
    image: "/nearby-hinjawadi-phase.jpg",
  },
  {
    icon: Hospital,
    title: "Kalpataru Hospital",
    distance: "1.2 km",
    image: "/nearby-hospital.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Grand High Street Mall",
    distance: "5.3 km",
    image: "/nearby-mall.jpg",
  },
]

const NearbyServices = () => {
  return (
    <section className="pt-20 pb-10 bg-cream-dark">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Nearby Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyPlaces.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300 group"
            >
              {/* Image */}
              <div className="w-full h-52">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <place.icon className="w-5 h-5 text-gold" />
                </div>

                <h3 className="font-display text-lg font-semibold text-white leading-tight">
                  {place.title}
                </h3>
                <p className="text-gold text-sm mt-1">
                  {place.distance}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NearbyServices
