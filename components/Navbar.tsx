'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Rachel</h1>
        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-orange-600 transition">About</a>
          <a href="#skills" className="hover:text-orange-600 transition">Skills</a>
          <a href="#projects" className="hover:text-orange-600 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}