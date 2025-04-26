import React from "react";

function Projects() {
  return (
    <section className="min-h-screen px-8 py-16 text-white bg-slate-950">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-blue-400">My Projects</h2>
        <p className="text-lg">
          Here are some of the projects I’ve worked on recently. They range from personal experiments to fully responsive web apps.
        </p>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <ProjectCard
            title="Portfolio Website"
            description="A modern, animated personal portfolio to showcase my web development skills and projects. Built using React and Tailwind CSS."
            tech="React, Tailwind CSS"
            link="https://yourportfolio.com"
            github="https://github.com/yourusername/portfolio"
          />

          {/* Project 2 */}
          <ProjectCard
            title="E-commerce Store"
            description="A multi-vendor online clothing store with product filtering, shopping cart, and customer/admin panels."
            tech="React, Node.js, MongoDB, Tailwind CSS"
            link="https://yourecommerce.com"
            github="https://github.com/yourusername/ecommerce-store"
          />

          {/* Project 3 */}
          <ProjectCard
            title="To-Do List App"
            description="A simple and sleek to-do app for daily task management. Includes animations and localStorage support."
            tech="JavaScript, HTML, CSS"
            link="#"
            github="https://github.com/yourusername/todo-app"
          />

          {/* Project 4 */}
          <ProjectCard
            title="Blog Platform"
            description="A fully responsive blog website where users can read, comment, and post articles."
            tech="React, Firebase, CSS Modules"
            link="#"
            github="https://github.com/yourusername/blog-platform"
          />
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, tech, link, github }) => (
  <div className="p-6 transition shadow-lg bg-slate-800 rounded-xl hover:shadow-blue-500/20">
    <h3 className="text-2xl font-semibold text-blue-300">{title}</h3>
    <p className="mt-2 mb-4 text-sm">{description}</p>
    <p className="mb-4 text-sm">
      <span className="font-semibold text-blue-400">Tech:</span> {tech}
    </p>
    <div className="flex gap-4 text-sm">
      {link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-white"
        >
          Live Demo
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-white"
      >
        GitHub
      </a>
    </div>
  </div>
);

export default Projects;
