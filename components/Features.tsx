'use client'

import { motion } from 'framer-motion'
import { Sparkles, Leaf, Heart, Wind } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'Pure Ingredients',
      description: 'All-natural, organic ingredients sourced from sustainable suppliers worldwide.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Committed to environmental sustainability with eco-conscious practices.',
    },
    {
      icon: Heart,
      title: 'Wellness Focus',
      description: 'Holistic approach to beauty and wellness for mind, body, and spirit.',
    },
    {
      icon: Wind,
      title: 'Relaxation',
      description: 'Serene atmosphere designed to promote ultimate tranquility and peace.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Premium Spa Experience
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Discover what makes La Stone Spa the premier destination for luxury wellness treatments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(139, 115, 85, 0.1)',
                }}
                className="p-8 bg-gradient-to-br from-white to-[#F5EFE7] rounded-2xl border border-[#E8E0D8] hover:border-[#D4AF8F] transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-[#8B7355]/10 rounded-full flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-[#8B7355]" />
                </motion.div>
                <h3 className="text-xl font-playfair font-bold text-[#2D2421] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#555] font-lora text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
