import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ILegend Jupyter MultiKernel',
    description:
      'An enhanced Jupyter environment supporting multiple kernels within a single notebook, enabling seamless execution across Python, Legend query engine (developed by GoldmanSachs). Designed to boost productivity for data scientists and ML engineers.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Jupyter', 'Legend-Alloy Services', 'REST API'],
    github: 'https://github.com',
  },
  {
    title: 'ISQL Jupyter MultiKernel',
    description:
      'A powerful data exploration and analysis tool that integrates SQL engines directly into Jupyter notebooks, enabling hybrid execution of SQL and Python within a single environment. SQL is used for efficient data querying, while Python handles advanced data analysis and visualization, streamlining the entire analytics workflow.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SQL', 'Python', 'Jupyter', 'Typescript'],
    github: 'https://github.com/ShanmukhEstrella/ISQL-JupyterMultiKernel',
  },
  {
    title: 'Agros.ai',
    description:
      'An AI-powered precision agriculture platform that empowers farmers with data-driven insights to optimize irrigation, monitor soil health, predict crop diseases, and access localized market trends. Built using the Ollama open-source LLM, the system delivers conversational support through voice and chat interfaces, ensuring inclusive and accessible agricultural decision-making. Designed for scalability and rural connectivity, Agros.ai combines machine learning models and intelligent automation to transform farming efficiency.',
    image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Machine Learning', 'Streamlit' , 'Ollama', 'Python'],
    github: 'https://github.com/Agros-ai/Phase-1',
  },
  {
    title: 'ML-based Product Pricing System',
    description:
      'A production-ready, modular pipeline for product price prediction that combines heavy feature engineering, text and (optional) image modeling, gradient-boosted ensembles, a TabNet-style deep regressor, and meta-learning to achieve high accuracy on retail/catalog pricing tasks.',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Machine Learning', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/ShanmukhEstrella/ML-based-product-pricing',
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-slate-100"
                  >
                    <Github className="w-5 h-5 text-slate-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

