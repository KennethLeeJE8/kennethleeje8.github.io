import { Github, Linkedin, Mail, Bookmark } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-light text-black mb-6">Get in touch</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            I'm always interested in hearing about interesting data projects, collaboration opportunities, 
            or just chatting about the latest tools and techniques. Drop me a line.
          </p>
          
          <div className="flex gap-4 items-center mb-8">
            <a href="mailto:kennethleeje8@gmail.com" className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/KennethLeeJE8" className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kenneth-lee-41188b175/" className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://kennethleeje.substack.com" className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <Bookmark size={20} />
            </a>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div>kennethleeje8@gmail.com</div>
            <div>github.com/KennethLeeJE8</div>
            <div>linkedin.com/in/kenneth-lee-41188b175</div>
            <div>kennethleeje.substack.com</div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © 2024 Kenneth Lee
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
