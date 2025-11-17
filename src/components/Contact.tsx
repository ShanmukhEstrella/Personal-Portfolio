import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out. I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium text-slate-900 mb-1">Email</div>
                  <a href="mailto:shannusairaj04@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                    shannusairaj04@gmail.com
                  </a>
                </div>
              </div>

            

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium text-slate-900 mb-1">Location</div>
                  <div className="text-slate-600">Chennai, India</div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
