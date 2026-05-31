"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      label: "Based in",
      value: "Philippines",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "4th Year BSIT Student",
    },
    {
      icon: Code2,
      label: "Focus",
      value: "Full-Stack Development",
    },
    {
      icon: Briefcase,
      label: "Status",
      value: "Open for Opportunities",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get to know more about who I am and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-4">Hello, I'm Kent</h3>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  I'm a 4th year Bachelor of Science in Information Technology student with a deep passion 
                  for web development and software engineering. My journey in tech has been driven by 
                  curiosity and a constant desire to learn and build innovative solutions.
                </p>
                <p>
                  I specialize in modern web technologies, focusing on creating responsive, user-friendly 
                  applications that solve real-world problems. From frontend interfaces to backend systems, 
                  I enjoy working across the full stack to bring ideas to life.
                </p>
                <p>
                  Beyond coding, I'm passionate about UI/UX design, problem-solving, and staying updated 
                  with the latest industry trends. I believe in writing clean, maintainable code and 
                  following best practices to deliver high-quality software.
                </p>
                <p>
                  I'm actively seeking internship opportunities, freelance projects, and collaborations 
                  where I can contribute my skills, learn from experienced professionals, and grow as a developer.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                    <item.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.label}</p>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
