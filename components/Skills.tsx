export default function Skills() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5"];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
