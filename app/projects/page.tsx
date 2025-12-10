import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Handbags",
      description: "A stylish handbags showcase website built with HTML, Tailwind CSS, and JavaScript.",
      image: "/image.png",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio created with Next.js & Tailwind CSS.",
      image: "/Rachel1.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}