import React from 'react';
import { Code, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Express", "Python", "Django"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"]
  },
  {
    category: "DevOps",
    icon: <Settings className="w-6 h-6" />,
    items: ["Docker", "AWS", "CI/CD", "Linux"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Languages",
    icon: <Code className="w-6 h-6" />,
    items: ["JavaScript", "TypeScript", "Python", "SQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}