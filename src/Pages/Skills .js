import React from "react";

function Skills() {
  return (
    <section className="min-h-screen px-8 py-16 text-white bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-blue-400">Skills & Abilities</h2>

        <p className="text-lg">
          Here’s a breakdown of the technologies and tools I use regularly to craft modern, responsive, and interactive web experiences.
        </p>

        {/* Technical Skills */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-blue-300">Technical Skills</h3>
          <SkillBar skill="HTML" level="95" />
          <SkillBar skill="CSS / Tailwind CSS" level="90" />
          <SkillBar skill="JavaScript" level="85" />
          <SkillBar skill="React.js" level="80" />
          <SkillBar skill="Git & GitHub" level="85" />
          <SkillBar skill="Responsive Design" level="90" />
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-blue-300">Soft Skills</h3>
          <ul className="pl-6 space-y-2 text-base list-disc">
            <li>Creative problem solving</li>
            <li>Team collaboration & communication</li>
            <li>Time management</li>
            <li>Continuous learning mindset</li>
            <li>Attention to detail</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Reusable skill bar component
const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-slate-800">
        <div
          className="h-3 bg-blue-400 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
