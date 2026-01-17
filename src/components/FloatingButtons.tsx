import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Bot, X, Send, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What are the room types available?",
    answer: "We offer Triple Sharing (₹7,500/month), Double Sharing (₹9,000/month), and Single Sharing (₹16,000/month) options with premium amenities."
  },
  {
    question: "What is included in the rent?",
    answer: "Rent includes AC rooms, high-speed Wi-Fi, daily housekeeping, 24/7 security, hot water, and access to all common areas."
  },
  {
    question: "Is food provided?",
    answer: "Yes, we provide nutritious vegetarian and non-vegetarian meal options with breakfast, lunch, and dinner included."
  },
  {
    question: "What is the security deposit?",
    answer: "We require a refundable security deposit equivalent to 2 months' rent, fully refundable at the time of checkout."
  },
  {
    question: "How can I schedule a site visit?",
    answer: "You can schedule a visit by calling +91 77990 66011 or WhatsApp us. We offer free pickup from Hinjawadi IT Park."
  },
  {
    question: "What are the working hours?",
    answer: "Our office is open Monday to Saturday, 9 AM to 8 PM. Site visits can be arranged on Sundays by appointment."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we provide dedicated two-wheeler parking. Limited four-wheeler parking is available on request."
  },
  {
    question: "What is the lock-in period?",
    answer: "We have a minimum stay requirement of 3 months. Early checkout is possible with 1 month notice."
  },
  {
    question: "Do you have laundry services?",
    answer: "Yes! We offer washing machine access and optional paid laundry services for your convenience."
  },
  {
    question: "What about guest policy?",
    answer: "Guests are allowed in common areas during visiting hours (10 AM - 8 PM). Overnight stays require prior approval."
  }
];

interface Message {
  type: 'user' | 'bot' | 'options';
  content: string;
  options?: typeof faqs;
}

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const startChat = () => {
    setIsChatOpen(true);
    if (messages.length === 0) {
      // Initial bot greeting
      setTimeout(() => {
        setMessages([
          {
            type: 'bot',
            content: "👋 Hello! Welcome to Klinkara Luxury PG. I'm here to help you with any questions!"
          }
        ]);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            content: "Please select a question below, or feel free to ask anything!"
          }]);
          setTimeout(() => {
            setMessages(prev => [...prev, {
              type: 'options',
              content: '',
              options: faqs
            }]);
          }, 500);
        }, 800);
      }, 300);
    }
  };

  const handleQuestionClick = (faq: typeof faqs[0]) => {
    // Add user message
    setMessages(prev => prev.filter(m => m.type !== 'options'));
    setMessages(prev => [...prev, { type: 'user', content: faq.question }]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Bot reply after delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', content: faq.answer }]);
      
      // Show more options after answer
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "Is there anything else you'd like to know?"
        }]);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'options',
            content: '',
            options: faqs.filter(f => f.question !== faq.question)
          }]);
        }, 400);
      }, 600);
    }, 1200);
  };

  const resetChat = () => {
    setMessages([]);
    setIsChatOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Chat Bot Button */}
        <motion.button
          onClick={isChatOpen ? () => setIsChatOpen(false) : startChat}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-lg flex items-center justify-center group relative overflow-hidden"
          aria-label="Chat with us"
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%', opacity: 0 }}
            whileHover={{ x: '100%', opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {isChatOpen ? (
            <X className="w-6 h-6 text-navy relative z-10" />
          ) : (
            <Bot className="w-6 h-6 text-navy relative z-10" />
          )}
          {!isChatOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-[8px] text-white font-bold">?</span>
            </motion.div>
          )}
        </motion.button>

        {/* Phone Button */}
        <motion.a
          href="tel:+917799066011"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
  className="hidden md:flex w-14 h-14 rounded-full bg-navy shadow-lg items-center justify-center group relative overflow-hidden"
          aria-label="Call us"
        >
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <Phone className="w-6 h-6 text-white relative z-10 group-hover:animate-bounce" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917799066011?text=Hi%2C%20I'm%20interested%20in%20Klinkara%20Luxury%20PG"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center group relative overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
          <MessageCircle className="w-6 h-6 text-white relative z-10" />
        </motion.a>
      </div>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsChatOpen(false)}
            />

            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md max-h-[75vh] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <motion.div 
                className="bg-gradient-to-r from-navy to-navy-light text-white p-4 flex items-center justify-between"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <Bot className="w-6 h-6 text-navy" />
                  </motion.div>
                  <div>
                    <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                      Klinkara Assistant
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Sparkles className="w-4 h-4 text-gold" />
                      </motion.span>
                    </h3>
                    <div className="flex items-center gap-2">
                      <motion.span 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      <p className="text-xs text-white/80">Online • Typically replies instantly</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsChatOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-cream/50 to-white min-h-[300px]">
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'bot' && (
                        <div className="flex items-end gap-2 max-w-[85%]">
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Bot className="w-4 h-4 text-gold" />
                          </motion.div>
                          <motion.div 
                            className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border border-border/50"
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                          >
                            <p className="text-sm text-navy leading-relaxed">{message.content}</p>
                          </motion.div>
                        </div>
                      )}
                      
                      {message.type === 'user' && (
                        <motion.div 
                          className="bg-gradient-to-r from-navy to-navy-light text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[85%] shadow-md"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </motion.div>
                      )}
                      
                      {message.type === 'options' && message.options && (
                        <div className="w-full space-y-2">
                          <p className="text-xs text-muted-foreground text-center mb-3">Select a question:</p>
                          <div className="flex flex-wrap gap-2">
                            {message.options.slice(0, 6).map((faq, faqIndex) => (
                              <motion.button
                                key={faqIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: faqIndex * 0.08 }}
                                whileHover={{ 
                                  scale: 1.05, 
                                  y: -2,
                                  boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleQuestionClick(faq)}
                                className="text-xs bg-gradient-to-r from-gold/10 to-gold/20 hover:from-gold/20 hover:to-gold/30 text-navy px-3 py-2 rounded-full border border-gold/30 hover:border-gold transition-all duration-300 shadow-sm"
                              >
                                {faq.question}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-end gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                        <Bot className="w-4 h-4 text-gold" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border border-border/50">
                        <div className="flex gap-1">
                          <motion.span
                            className="w-2 h-2 bg-navy/50 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                          />
                          <motion.span
                            className="w-2 h-2 bg-navy/50 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                          />
                          <motion.span
                            className="w-2 h-2 bg-navy/50 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={chatEndRef} />
              </div>

              {/* Footer */}
              <motion.div 
                className="p-4 bg-gradient-to-r from-cream to-cream/80 border-t border-border/50"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <div className="flex gap-2 mb-3">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={resetChat}
                    className="flex-1 py-2.5 bg-white hover:bg-gray-50 text-navy text-center rounded-xl font-medium text-sm transition-all duration-300 border border-border/50 shadow-sm"
                  >
                    Start New Chat
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/917799066011?text=Hi%2C%20I%20have%20a%20question%20about%20Klinkara%20Luxury%20PG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#25D366] to-[#20BA5C] hover:from-[#20BA5C] hover:to-[#1DA851] text-white text-center rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </motion.a>
                </div>
                <p className="text-[10px] text-muted-foreground text-center">
                  Powered by Klinkara • Available 24/7
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
