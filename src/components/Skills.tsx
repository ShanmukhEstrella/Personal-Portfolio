import {
  Users,
  Code2,
  Server,
  Cpu,
  Command,
  BookOpen,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Users,
    title: 'Leadership & Mentoring',
    skills: [
      'Team Leadership',
      'Mentoring Students',
      'Project Management',
      'Cross-functional Collaboration',
      'Technical Interviews',
    ],
  },
  {
    icon: Code2,
    title: 'Competitive Programming',
    skills: [
      'Algorithms',
      'Data Structures',
      'Problem Solving',
      'C++ (STL, Optimizations)',
      'Contest Strategy',
    ],
  },
  {
    icon: Server,
    title: 'Jupyter & Data Platforms',
    skills: [
      'JupyterHub',
      'ILegend / ISQL MultiKernel',
      'Notebook Integrations',
      'Dockerized Notebooks',
      'Data Exploration',
    ],
  },
  {
    icon: Cpu,
    title: 'AI & ML Solutions',
    skills: [
      'Model Development',
      'Model Deployment (MLOps)',
      'PyTorch / TensorFlow',
      'Ollama & LLM Integrations',
      'Feature Engineering',
    ],
  },
  {
    icon: Command,
    title: 'Languages & Tools',
    skills: [
      'Python',
      'C++',
      'Git & CI/CD',
      'Linux / Bash',
      'SQL & Databases',
    ],
  },
  {
    icon: BookOpen,
    title: 'Teaching & Outreach',
    skills: [
      'Workshops & Talks',
      'Curriculum Design',
      'Code Reviews & Guidance',
      'Student Projects Mentoring',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          A concise overview of my core strengths — from leadership and mentoring to low-level
          competitive programming and production AI systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
