"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University Name",
      location: "Philippines",
      period: "2021 - Present",
      status: "4th Year Student",
      description:
        "Pursuing a comprehensive education in information technology, focusing on software development, web technologies, database management, and system analysis.",
      highlights: [
        "Relevant Coursework: Web Development, Database Systems, Software Engineering",
        "Active participation in tech-related seminars and workshops",
        "Developing practical skills through academic and personal projects",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-3">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium">
                          {edu.status}
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2 flex-shrink-0" />
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
