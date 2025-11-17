import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            SR
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-slideUp">
          Shanmukh raj MSS
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Bridging the gap between code and cognition!
        </p>

        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Crafting elegant solutions to complex problems. Passionate about building scalable agentic AI applications
          and creating exceptional user experiences.
        </p>

        <div className="flex gap-4 justify-center mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/ShanmukhEstrella"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-slate-900"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shanmukh-raj-mss-b3903a250/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-slate-900"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:shannusairaj04@gmail.com"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-slate-900"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideUp"
          style={{ animationDelay: '0.4s' }}
        >
          View My Work
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
