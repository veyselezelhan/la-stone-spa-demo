"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Isabella Chen",
      role: "Spa Director",
      specialty: "Holistic Wellness",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/11.jpg",
    },
    {
      id: 2,
      name: "Olga Smith",
      role: "Master Therapist",
      specialty: "Hot Stone Massage",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/12.webp",
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Aesthetician",
      specialty: "Facial Treatments",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/13.jpg",
    },
    {
      id: 4,
      name: "Dr. James Park",
      role: "Wellness Consultant",
      specialty: "Ayurvedic Medicine",
      image:
        "https://krrsme5shednx75x.public.blob.vercel-storage.com/la-stone/14.jpg",
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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF8F] font-playfair text-lg mb-2">
            Our Experts
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2421] mb-4">
            Meet the Team
          </h2>
          <p className="text-[#555] font-lora max-w-2xl mx-auto">
            Our highly trained professionals are dedicated to providing
            exceptional wellness experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-[#2D2421] mb-1">
                {member.name}
              </h3>
              <p className="text-[#8B7355] font-lora font-semibold text-sm mb-1">
                {member.role}
              </p>
              <p className="text-[#555] font-lora text-sm">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
