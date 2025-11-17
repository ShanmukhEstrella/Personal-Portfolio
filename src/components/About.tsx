export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a final year Computer Science Undergradute at IIT Madras who loves programming, designing scalable solutions, and developing impactful products that solve meaningful problems. I enjoy turning ideas into reliable and efficient solutions.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community through
              blog posts.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
  <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-1.8xl font-extrabold text-slate-900 mb-2">CS Undergrad [2022-2026]</div>
    <div className="text-base text-slate-600">Bachelor of Technology, IIT Madras</div>
  </div>

  <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-1.8xl font-extrabold text-slate-900 mb-2">Goldman Sachs</div>
    <div className="text-base text-slate-600">Developer Intern, Core Data Platform</div>
  </div>

  <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-1.8xl font-extrabold text-slate-900 mb-2">Shaastra TechFest, IIT Madras</div>
    <div className="text-base text-slate-600">Team Lead, Events and Workshops</div>
  </div>

  <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-1.8xl font-extrabold text-slate-900 mb-2">Open Source</div>
    <div className="text-base text-slate-600">Contributor & Tech Enthusiast</div>
  </div>
</div>



          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-xl">
              <img
                src="https://i.postimg.cc/2SfDTYVF/Personal-pic.jpg"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
