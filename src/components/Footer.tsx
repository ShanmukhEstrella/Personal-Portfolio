import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">Shanmukh raj MSS</div>
            <p className="text-slate-400">Tech Enthusiast</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ShanmukhEstrella/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shanmukh-raj-mss-b3903a250/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shannusairaj04@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 flex items-center justify-center gap-2">
          <span>&copy; {currentYear} Shanmukh raj MSS. Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>and React</span>
        </div>
      </div>
    </footer>
  );
}
