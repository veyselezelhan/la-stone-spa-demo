"use client";

import { motion } from "framer-motion";
import { Share2, Heart, Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Share2, href: "#", label: "Facebook" },
    { icon: Heart, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Twitter" },
  ];

  const footerLinks = {
    Services: [
      "Hot Stone Massage",
      "Facial Treatments",
      "Body Treatments",
      "Packages",
    ],
    Company: ["About Us", "Contact", "Careers", "Blog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer id="contact" className="bg-[#2D2421] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-bold mb-4">
              La Stone Spa
            </h2>
            <p className="text-white/60 font-lora leading-relaxed mb-4">
              Your sanctuary for luxury wellness and rejuvenation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: "#D4AF8F" }}
                    className="text-white/60 hover:text-[#D4AF8F] transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-playfair font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#D4AF8F] font-lora transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-playfair font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF8F] flex-shrink-0 mt-1" />
                <span className="text-white/60 font-lora">
                  Kemerağzı Mah. Yaşar Sobutay Bulv. No: 351 Lara Park Sitesi
                  Aksu/ANTALYA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF8F]" />
                <a
                  href="tel:+1234567890"
                  className="text-white/60 hover:text-[#D4AF8F] font-lora transition-colors"
                >
                  +90 242 352 55 55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF8F]" />
                <a
                  href="mailto:info@lastonespa.com"
                  className="text-white/60 hover:text-[#D4AF8F] font-lora transition-colors"
                >
                  info@lastonespa.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 font-lora text-sm"
          >
            <p>© {currentYear} La Stone Spa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4AF8F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF8F] transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-playfair font-bold hover:bg-[#6F5B47] transition-colors shadow-lg"
      >
        ↑
      </motion.button>
    </footer>
  );
}
