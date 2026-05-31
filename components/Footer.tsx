"use client";

import { Code2, Link2, Share2, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Code2, href: "https://github.com", label: "GitHub" },
    { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Share2, href: "https://facebook.com", label: "Facebook" },
    { icon: Mail, href: "mailto:kent@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Kent<span className="text-neutral-600 dark:text-neutral-400">Dev</span>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
              Building modern web applications with passion and dedication. 
              Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            © {currentYear} KentDev. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
