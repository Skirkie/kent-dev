"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Bootcamp",
      issuer: "Online Learning Platform",
      date: "2024",
      description: "Comprehensive training in modern web development technologies and best practices.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      credentialUrl: "#",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "Certification Provider",
      date: "2023",
      description: "Advanced certification covering algorithms, data structures, and problem-solving techniques.",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
      credentialUrl: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Design Academy",
      date: "2023",
      description: "Foundational course in user interface and user experience design principles.",
      skills: ["UI Design", "UX Design", "Figma"],
      credentialUrl: "#",
    },
    {
      title: "Git & GitHub Workshop",
      issuer: "Tech Community",
      date: "2023",
      description: "Hands-on workshop covering version control, collaboration, and Git workflows.",
      skills: ["Git", "GitHub", "Version Control"],
      credentialUrl: "#",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certificates & Achievements</h2>
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
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
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

                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Credential
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
