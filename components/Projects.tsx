'use client';

const projects = [
  {
    title: 'Handbags',
    description: 'A comprehensive web application built with Next.js and TypeScript, featuring real-time data processing and modern UI/UX design.'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with advanced filtering, payment integration, and responsive design for optimal mobile experience.'
  },
  {
    title: 'Project Three',
    description: 'A portfolio management system with data visualization, analytics dashboard, and automated reporting features.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20 bg-red-600 text-white">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="border border-white p-8 hover:bg-red-700 transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 border border-white bg-red-800 flex items-center justify-center">
                  <span className="text-xs text-gray-300">Project Image</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a href="#" className="underline hover:no-underline">View Project</a>
                    <a href="#" className="underline hover:no-underline">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
