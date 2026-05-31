"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce web application with product management, shopping cart, and secure checkout functionality.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
      image: "/api/placeholder/600/400",
      tags: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Framer Motion", "shadcn/ui"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather application providing real-time weather data, forecasts, and location-based information.",
      image: "/api/placeholder/600/400",
      tags: ["React.js", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A content management system for creating, editing, and publishing blog posts with markdown support and SEO optimization.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A fitness tracking application to monitor workouts, set goals, and visualize progress with interactive charts.",
      image: "/api/placeholder/600/400",
      tags: ["React.js", "Firebase", "Chart.js", "Material-UI"],
      liveUrl: "#",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-neutral-400 dark:text-neutral-600 opacity-50">
                      &lt;/&gt;
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="default" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <Code2 className="h-4 w-4" />
                      </Button>
                    </a>
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

export default Projects;
