import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="font-mono text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-2">
          <img src="/favicon.ico" alt="favicon" className="w-4 h-4" />
          kennethleeje.com
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm">
          <button 
            onClick={() => handleSectionClick('about')} 
            className="text-gray-700 hover:text-black transition-colors cursor-pointer"
          >
            about
          </button>
          <button 
            onClick={() => handleSectionClick('work')} 
            className="text-gray-700 hover:text-black transition-colors cursor-pointer"
          >
            work
          </button>
          <Link to="/portfolio" className="text-gray-700 hover:text-black transition-colors">portfolio</Link>
          <Link to="/projects" className="text-gray-700 hover:text-black transition-colors">projects</Link>
          <Link to="/articles" className="text-gray-700 hover:text-black transition-colors">articles</Link>
          <Link to="/books" className="text-gray-700 hover:text-black transition-colors">books</Link>
          <Link to="/datadam" className="text-gray-700 hover:text-black transition-colors">datadam</Link>
          <button 
            onClick={() => handleSectionClick('contact')} 
            className="text-gray-700 hover:text-black transition-colors cursor-pointer"
          >
            contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
