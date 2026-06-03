"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, X } from "lucide-react";

const Certificates = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const certificates = [
    {
      title: "Advanced Seminar Series — Day 1",
      issuer: "BSIT 4th Year Advanced Seminar Series",
      date: "October 8, 2025",
      description: "Completed Day 1 of the Advanced Seminar Series with the topic \"Journey from Science Practitioner to Information Technology Specialist\", held via Microsoft Teams (Virtual Session).",
      skills: ["IT Career Development", "Professional Growth"],
      credentialUrl: "#",
      image: "/img/Day1.png",
    },
    {
      title: "Advanced Seminar Series — Day 2",
      issuer: "BSIT 4th Year Advanced Seminar Series",
      date: "November 5, 2025",
      description: "Completed Day 2 of the Advanced Seminar Series with the topic \"The Power of Color in Graphic Design: Theory, Psychology, and Practice\", held at Davao del Norte State College Gymnasium.",
      skills: ["Graphic Design", "Color Theory", "Design Psychology"],
      credentialUrl: "#",
      image: "/img/Day2.png",
    },
  ];

  return (
    <>
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certificates</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Continuous learning through courses, workshops, and certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                  {cert.image && (
                    <div
                      className="relative w-full h-40 mb-4 rounded-md overflow-hidden cursor-zoom-in group"
                      onClick={() => setLightbox(cert.image)}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view full
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 flex-1">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>


                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={lightbox}
                  alt="Certificate full view"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
