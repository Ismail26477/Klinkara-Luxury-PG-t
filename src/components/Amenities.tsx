"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Flame,
  Shield,
  UtensilsCrossed,
  Sparkles,
  Car,
  Building2,
  PartyPopper,
  Users,
  Dumbbell,
  Tv,
  Wind,
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "100 Mbps dedicated internet for seamless work & entertainment",
    image: "/high-speed-wifi-internet-connection.jpg",
  },
  {
    icon: Flame,
    title: "24/7 Hot Water",
    description: "Instant hot water supply with premium geysers",
    image: "/hot-water-geyser-bathroom.jpg",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV surveillance & trained security personnel",
    image: "/security-camera-surveillance-system.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Delicious Meals",
    description: "Hygienic home-style breakfast & dinner included",
    image: "/healthy-home-cooked-meals-food.jpg",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Professional cleaning service for common areas",
    image: "/professional-housekeeping-cleaning-service.jpg",
  },
  {
    icon: Car,
    title: "Pickup & Drop",
    description: "Complimentary shuttle service to IT Park",
    image: "/shuttle-bus-transportation-service.jpg",
  },
  {
    icon: Building2,
    title: "Near IT Park",
    description: "Walking distance to major IT companies",
    image: "/modern-it-park-office-building.jpg",
  },
  {
    icon: PartyPopper,
    title: "Party Hall",
    description: "Celebrate special occasions with friends",
    image: "/party-hall-event-venue-celebration.jpg",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Network with like-minded professionals",
    image: "/community-people-networking-social-gathering.jpg",
  },
  {
    icon: Dumbbell,
    title: "Fitness Area",
    description: "Well-equipped gym for your daily workout",
    image: "/modern-fitness-gym-equipment.jpg",
  },
  {
    icon: Tv,
    title: "Entertainment Room",
    description: "Smart TV & gaming zone for relaxation",
    image: "/entertainment-room-gaming-smart-tv.jpg",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Climate-controlled rooms for comfort",
    image: "/air-conditioning-climate-control-system.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const Amenities = () => {
  return (
<section id="amenities" className="pt-16 pb-24 bg-cream-dark">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Premium Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled comfort with our thoughtfully curated amenities designed for modern professionals.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300 group"
            >

              {/* Image */}
<div className="w-full h-52">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">

                {/* Icon */}
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
<amenity.icon className="w-5 h-5 text-gold" />
                </div>

                {/* Title */}
<h3 className="font-display text-lg font-semibold text-white mb-1">
                  {amenity.title}
                </h3>

                {/* Description */}
<p className="text-white/80 text-xs">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Amenities
