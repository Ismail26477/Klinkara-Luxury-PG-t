import { motion } from "framer-motion";
import { Play, Home, Star, Users } from "lucide-react";

const VideoShowcase = () => {
  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ"; // Placeholder - replace with your property tour video ID

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            Virtual Tour
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Take a Look Inside
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the luxury and comfort of Klinkara through our property tour video
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 hidden lg:block"
          >
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Premium Rooms</h4>
                <p className="text-white/60 text-sm">Fully furnished with modern amenities</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">5-Star Facilities</h4>
                <p className="text-white/60 text-sm">Hotel-like experience at PG prices</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Community Living</h4>
                <p className="text-white/60 text-sm">Connect with like-minded professionals</p>
              </div>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 col-span-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-navy-light">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="Klinkara Luxury PG Property Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-gold/30 rounded-2xl pointer-events-none" />
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-4"
            >
              <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                <Play className="w-4 h-4 text-gold" />
                Watch our complete property walkthrough
              </p>
            </motion.div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Schedule a Site Visit
              </h3>
              <p className="text-white/60 text-sm mb-4">
                See everything in person. We offer free pickup from Hinjawadi IT Park.
              </p>
              <a
                href="tel:+917799066011"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg transition-colors w-full justify-center"
              >
                <Play className="w-4 h-4" />
                Book Your Visit
              </a>
            </div>
            
            <div className="text-center text-white/40 text-sm">
              <p>Available 7 days a week</p>
              <p>9 AM - 8 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-10 lg:hidden"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2">
              <Home className="w-5 h-5 text-gold" />
            </div>
            <p className="text-white text-sm font-medium">Premium Rooms</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5 text-gold" />
            </div>
            <p className="text-white text-sm font-medium">5-Star Facilities</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-gold" />
            </div>
            <p className="text-white text-sm font-medium">Community</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
