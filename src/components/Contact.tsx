import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 77990 66011",
    link: "tel:+917799066011",
  },
  {
    icon: Mail,
    title: "Email",
    value: "klinkaraluxury@gmail.com",
    link: "mailto:klinkaraluxury@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value:
      "HPF2+3G9, Maan Road, Phase 3, Hinjawadi, Pimpri-Chinchwad, Pune, Maharashtra 411057",
    link: "https://maps.google.com/?q=Klinkara+Luxury+Hinjawadi+Pune",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sun: 9:00 AM - 9:00 PM",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();

  // ✅ ONLY ADD: missing fields so inputs work
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveInDate: "",
    roomType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ONLY CHANGE: Submit → WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "917799066011"; // WhatsApp number (no +)

    const whatsappMessage = encodeURIComponent(
      `Hi, I am interested in Klinkara Luxury PG. Please find my details below:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Move-in Date: ${formData.moveInDate}
Room Type: ${formData.roomType}
Budget: ${formData.budget}

Message:
${formData.message}
`
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      moveInDate: "",
      roomType: "",
      budget: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury living? Get in touch with us to schedule a
            visit or book your room.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-luxury"
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                />
              </div>

              <Input
                type="date"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
              />

              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="w-full h-12 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Select Room Type</option>
                <option value="Single Sharing – ₹16,000/month">
                  Single Sharing – ₹16,000 / month
                </option>
                <option value="Double Sharing – ₹9,000/month">
                  Double Sharing – ₹9,000 / month
                </option>
                <option value="Triple Sharing – ₹7,500/month">
                  Triple Sharing – ₹7,500 / month
                </option>
              </select>

              <Input
                type="text"
                name="budget"
                placeholder="Monthly Budget (e.g. ₹10,000 – ₹15,000)"
                value={formData.budget}
                onChange={handleChange}
                className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
              />

              <Textarea
                name="message"
                placeholder="Additional Notes (preferences, questions, etc.)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="rounded-xl border-border focus:border-gold focus:ring-gold resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gold hover:bg-gold-dark text-navy font-semibold rounded-xl"
              >
                {isSubmitting ? "Opening WhatsApp..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* RIGHT SIDE UNCHANGED */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg h-[300px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5897441655247!2d73.71854427601788!3d18.58920496664929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf6c6c49b33%3A0x9f4c3ac6f95c6e0a!2sHinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klinkara Luxury Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
