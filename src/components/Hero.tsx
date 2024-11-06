import React, { useEffect, useRef } from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 pt-16">
      <div ref={heroRef} className="container mx-auto px-4 py-16 opacity-0">
        <div className="flex flex-col items-center text-center">
          <Code2 className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mb-6 animate-float" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              John Driscoll
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Full Stack Developer & Web Enthusiast
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Crafting elegant solutions with modern web technologies. 
            Passionate about creating responsive, accessible, and performant applications.
          </p>
          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/jdwd40" 
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus-ring"
               aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/john-driscoll" 
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus-ring"
               aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@jdwd40.dev" 
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus-ring"
               aria-label="Email Contact">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}