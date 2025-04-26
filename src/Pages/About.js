import React from "react";

function About() {
  return (
    <section className="min-h-screen px-8 py-16 text-white bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>

        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-blue-400">Ravindu</span>, a passionate and dedicated web developer based in Sri Lanka.
          I specialize in creating modern, user-friendly websites using HTML, CSS, JavaScript, and React. 
          My goal is to bring ideas to life through clean and efficient code while ensuring an excellent user experience.
        </p>

        <p className="text-lg leading-relaxed">
          Whether it’s a personal portfolio, a business site, or an e-commerce platform, I love the process of building something
          meaningful from scratch. When I'm not coding, you’ll find me exploring design trends, working on side projects,
          or learning new technologies to stay updated in this ever-evolving field.
        </p>

        {/* Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-slate-800 rounded-xl">
            <h4 className="mb-2 text-xl font-semibold text-blue-400">Education</h4>
            <p>BSc in Computer Science – University of Sri Jayewardenepura</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl">
            <h4 className="mb-2 text-xl font-semibold text-blue-400">Skills</h4>
            <p>HTML, CSS, JavaScript, React, Tailwind CSS, Git</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl">
            <h4 className="mb-2 text-xl font-semibold text-blue-400">Experience</h4>
            <p>2+ years building responsive websites and UI/UX focused applications.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl">
            <h4 className="mb-2 text-xl font-semibold text-blue-400">Interests</h4>
            <p>Graphic Design, Tech Blogging, Open-source Projects</p>
          </div>
        </div>

        {/* Quote or Motto */}
        <div className="mt-10 italic text-center text-blue-300">
          "Code is like poetry – clean, expressive, and powerful."
        </div>
      </div>
    </section>
  );
}

export default About;
