'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for occasional visitors',
      features: [
        '2 treatments per month',
        'Access to facilities',
        'Consultation included',
        'Standard products',
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Premium',
      price: '$199',
      period: '/month',
      description: 'Our most popular choice',
      features: [
        '4 treatments per month',
        'Priority booking',
        'Premium products',
        'Personalized consultation',
        'VIP lounge access',
        '10% product discount',
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Luxury',
      price: '$299',
      period: '/month',
      description: 'Ultimate wellness experience',
      features: [
        'Unlimited treatments',
        'Private spa suite',
        'Exclusive treatments',
        'Personal spa therapist',
        'Luxury amenities',
        '20% product discount',
        'Priority concierge',
      ],
      highlighted: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">Membership Plans</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Choose the perfect plan for your wellness journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#8B7355] to-[#6F5B47] text-white shadow-2xl'
                  : 'bg-white border border-[#E8E0D8] text-[#2D2421]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF8F] text-[#2D2421] px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-playfair font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#2D2421]'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 text-sm ${plan.highlighted ? 'text-white/80' : 'text-[#555]'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-playfair font-bold ${plan.highlighted ? 'text-white' : 'text-[#8B7355]'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-white/80' : 'text-[#555]'}>
                  {plan.period}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-full font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-[#8B7355] hover:bg-white/90'
                    : 'bg-[#8B7355] text-white hover:bg-[#6F5B47]'
                }`}
              >
                Choose Plan
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className={`w-5 h-5 ${plan.highlighted ? 'text-[#D4AF8F]' : 'text-[#8B7355]'}`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-[#555]'}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
