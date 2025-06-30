import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="order-2 md:order-1">
          <div className="w-80 h-80 bg-gray-200 rounded-sm mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
            <img src="/images/53967794-3c7a-411b-b2f9-89e8496ad573.jpeg" alt="Kenneth Lee" className="object-cover w-full h-full" />
          </div>
        </div>
        
        {/* Content */}
        <div className="order-1 md:order-2 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">
              Hi, I'm <span className="font-medium">Kenneth Lee</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a developer and data enthusiast who loves turning messy datasets into meaningful stories. 
              When I'm not coding, you'll find me exploring personal data projects or building tools that make life a bit easier.
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="mailto:kennethleeje8@gmail.com" className="p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/KennethLeeJE8" className="p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kenneth-lee-41188b175/" className="p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
