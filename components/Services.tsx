"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Hot Stone Massage",
      description:
        "Ancient therapy using heated stones to soothe muscles and relax the mind.",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/2.jpeg",
    },
    {
      id: 2,
      title: "Aromatherapy Facial",
      description:
        "Luxurious facial treatment infused with essential oils for glowing skin.",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/3.jpg",
    },
    {
      id: 3,
      title: "Body Scrub",
      description:
        "Exfoliating treatment with natural ingredients for silky smooth skin.",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/4.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">
            Signature Treatments
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Our Premium Services
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Indulge in our carefully curated selection of spa treatments
            designed for ultimate relaxation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#2D2421] mb-2">
                {service.title}
              </h3>
              <p className="text-[#555] font-lora leading-relaxed mb-4">
                {service.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="inline-block text-[#8B7355] font-semibold hover:text-[#6F5B47] transition-colors"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
