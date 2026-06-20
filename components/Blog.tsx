"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Benefits of Hot Stone Therapy",
      excerpt:
        "Discover how ancient hot stone massage techniques can relieve tension and promote healing.",
      author: "Dr. Sarah Chen",
      date: "June 18, 2024",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/15.avif",
    },
    {
      id: 2,
      title: "Natural Skincare Rituals for Glowing Skin",
      excerpt:
        "Learn about our signature aromatherapy approach to achieving radiant, healthy skin.",
      author: "Isabella Martinez",
      date: "June 15, 2024",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/16.webp",
    },
    {
      id: 3,
      title: "Mindfulness and Wellness: Finding Your Balance",
      excerpt:
        "Explore how meditation and spa treatments work together for complete wellness.",
      author: "James Wilson",
      date: "June 12, 2024",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/17.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
            Wellness Hub
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Latest Wellness Insights
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Stay informed with expert tips and wellness advice from our team of
            professionals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl border border-[#E8E0D8] overflow-hidden hover:border-[#D4AF8F] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[#555] font-lora mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#8B7355]" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8B7355]" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-bold text-[#2D2421] mb-3 group-hover:text-[#8B7355] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#555] font-lora leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-block text-[#8B7355] font-semibold hover:text-[#6F5B47] transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
