'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition">
      <div className="h-48 relative bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        {!imageError ? (
          <Image 
            src={image} 
            fill
            alt={title} 
            className="object-contain p-4"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white text-lg font-semibold">
            {title}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold inline-block">
          View Project
        </a>
      </div>
    </div>
  );
}
