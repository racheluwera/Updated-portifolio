export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center gap-10 px-6 py-20 bg-gray-600 text-white"
    >
      
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-relaxed mb-4">
          I am a passionate frontend developer specializing in React and Next.js.
          I build responsive and intuitive digital experiences using clean,
          maintainable code.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I combine modern web technologies with creative UI/UX thinking to craft 
          applications that deliver impact, performance, and seamless user interaction.
        </p>
        <a
          href="/cv.pdf" 
          download
          className="inline-block bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Download CV
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/ME.jpg"
          alt="My Profile"
          className="rounded-2xl shadow-lg w-80 h-80 object-cover border-4 border-white/30"
        />
      </div>
    </section>
  );
}
