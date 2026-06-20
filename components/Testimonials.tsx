'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'CEO, Tech Company',
      content:
        'La Stone Spa transformed my wellness routine. The attention to detail and personalized service is unmatched. I visit every week now!',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Torres',
      role: 'Entrepreneur',
      content:
        'The hot stone massage completely relieved my chronic back pain. The therapists really understand the body and healing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Fashion Designer',
      content:
        'A sanctuary for self-care and rejuvenation. Every treatment leaves me feeling renewed and restored. Highly recommended!',
      rating: 5,
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Hear from Our Happy Clients
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Real experiences from real people who transformed their wellness journey with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#F5EFE7] rounded-2xl p-8 border border-[#E8E0D8] hover:border-[#D4AF8F] transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-[#D4AF8F] text-[#D4AF8F]" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#2D2421] font-lora leading-relaxed mb-6"
              >
                "{testimonial.content}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-playfair font-bold text-[#2D2421]">
                  {testimonial.name}
                </p>
                <p className="text-[#8B7355] font-lora text-sm">
                  {testimonial.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
