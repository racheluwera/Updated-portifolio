export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">Rachel Uwera</h1>
          <p className="text-sm">Web Developer | Next.js & Tailwind CSS</p>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>

        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
            GH
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
            in
          </a>
          <a href="mailto:your.email@example.com" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
            @
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm opacity-90">
        &copy; {new Date().getFullYear()} Rachel Uwera. All rights reserved.
      </div>
    </footer>
  );
}