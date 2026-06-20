"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      id: 1,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/5.jpg",
      title: "Relaxation Room",
    },
    {
      id: 2,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/6.jpg",
      title: "Treatment Suite",
    },
    {
      id: 3,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/7.jpg",
      title: "Wellness Center",
    },
    {
      id: 4,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/8.jpg",
      title: "Sauna Lounge",
    },
    {
      id: 5,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/9.jpg",
      title: "Meditation Room",
    },
    {
      id: 6,
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/10.jpg",
      title: "Spa Products",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

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
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">
            Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Experience Our Sanctuary
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Explore the serene beauty of our spa facilities and treatment
            spaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {images.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="p-6 w-full"
                >
                  <h3 className="text-white text-xl font-playfair font-bold">
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
