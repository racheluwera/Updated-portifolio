'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-16">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl overflow-hidden relative ring-4 ring-orange-500 ring-offset-4">
          {!imageError ? (
            <Image
              src="/Rachel.png"
              alt="Profile"
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <span className="text-sm text-white">Add profile.jpg</span>
            </div>
          )}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Rachel Mukawera</h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">Frontend Developer | React Specialist</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition font-semibold">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition font-semibold">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}