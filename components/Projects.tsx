"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  // Array reduced to only 2 projects
  const projects = [
    {
      title: "PapayaFresh",
      description:
        "Papaya Shelf-life Prediction System Using Convolutional Neural Networks (CNNs)",
      image: "/img/PapayaFresh.jpg",
      tags: ["Flutter", "TensorFlow Lite", "Firebase Firestore"],
      githubUrl: "#",
    },
    {
      title: "Atlas - Food delivery reimagined",
      description:
        "A web-based food delivery platform where users can explore restaurant menus, place orders seamlessly, and track deliveries — all powered by PHP and MySQL.",
      image: "/img/Atlas.jpg",
      tags: ["PHP", "MySQL"],
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience in web development
          </p>
        </motion.div>

        {/* UPDATED GRID CLASSES: Removed lg:grid-cols-3 and added max-w-5xl mx-auto to center the 2 cards beautifully */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="h-full cursor-pointer"
              style={{
                filter: "drop-shadow(0 0 0px transparent)",
              }}
            >
              <Card className="overflow-hidden h-full flex flex-col group border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.08)] transition-shadow duration-300">
                
                {/* Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-neutral-400 dark:text-neutral-600 opacity-50 transition-transform duration-500 group-hover:scale-110">
                        &lt;/&gt;
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col bg-white dark:bg-neutral-950">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm py-1 px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;