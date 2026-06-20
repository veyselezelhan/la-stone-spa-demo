'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Satisfied Clients' },
    { number: '50+', label: 'Signature Treatments' },
    { number: '98%', label: 'Satisfaction Rate' },
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8B7355] to-[#6F5B47]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
              >
                <p className="text-5xl md:text-6xl font-playfair font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 font-lora text-lg">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
