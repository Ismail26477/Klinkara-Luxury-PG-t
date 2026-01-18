"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const rooms = [
  {
    name: "Triple Sharing",
    price: "7,500",
    description: "Perfect for budget-conscious professionals",
    features: [
      "Spacious room with 3 beds",
      "Attached bathroom",
      "Air conditioning",
      "Personal wardrobe",
      "Study table & chair",
      "High-speed WiFi",
      "Daily housekeeping",
      "Breakfast & dinner included",
    ],
    popular: false,
  },
  {
    name: "Double Sharing",
    price: "9,000",
    description: "Ideal balance of privacy and value",
    features: [
      "Comfortable room with 2 beds",
      "Attached bathroom",
      "Air conditioning",
      "Spacious wardrobe",
      "Work desk setup",
      "High-speed WiFi",
      "Daily housekeeping",
      "Breakfast & dinner included",
      "Priority shuttle service",
    ],
    popular: true,
  },
  {
    name: "Single Sharing",
    price: "16,000",
    description: "Maximum privacy and comfort",
    features: [
      "Private room for one",
      "Premium attached bathroom",
      "Split AC with remote",
      "Large wardrobe",
      "Executive work desk",
      "High-speed WiFi",
      "Daily housekeeping",
      "All meals included",
      "VIP shuttle service",
      "Mini refrigerator",
    ],
    popular: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const RoomsPricing = () => {
  // ✅ WHATSAPP HANDLER WITH ROOM DETAILS
  const openWhatsApp = (roomName: string, price: string) => {
    const phoneNumber = "917799066011" // no +
    const message = encodeURIComponent(
      `Hi, I am interested in the ${roomName} room at Klinkara Luxury PG (₹${price}/month). Please share availability and next steps.`
    )

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            Accommodation Options
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Rooms & Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of thoughtfully designed rooms, each offering
            premium comfort and exceptional value.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl overflow-hidden ${
                room.popular
                  ? "bg-navy text-white ring-4 ring-gold"
                  : "bg-white border border-border"
              }`}
            >
              {/* Popular */}
              {room.popular && (
                <div className="absolute top-0 right-0 bg-gold text-navy px-4 py-1 rounded-bl-2xl font-semibold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-navy" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Name */}
                <h3
                  className={`font-display text-2xl font-bold mb-2 ${
                    room.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {room.name}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    room.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {room.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      room.popular ? "text-gold" : "text-navy"
                    }`}
                  >
                    ₹{room.price}
                  </span>
                  <span
                    className={
                      room.popular
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }
                  >
                    /month
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          room.popular ? "bg-gold" : "bg-gold/20"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            room.popular ? "text-navy" : "text-gold"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          room.popular
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* ✅ BOOK NOW → WHATSAPP */}
                <Button
                  onClick={() => openWhatsApp(room.name, room.price)}
                  className={`w-full py-6 font-semibold ${
                    room.popular
                      ? "bg-gold hover:bg-gold-dark text-navy"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-10"
        >
          * All prices are exclusive of GST. Security deposit of 1 months required.
        </motion.p>
      </div>
    </section>
  )
}

export default RoomsPricing
