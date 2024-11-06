import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} JDWD40. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            Made with <Heart className="w-4 h-4 text-red-500" /> by John Driscoll
          </div>
        </div>
      </div>
    </footer>
  );
}