
const InterestsSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-light text-black mb-6">What I'm into</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            I'm fascinated by the stories hidden in data, especially the kind we generate every day. 
            Here are some areas I spend my time exploring:
          </p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Personal Data & Quantified Self</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tracking sleep patterns, analyzing spending habits, or mapping running routes - 
              I believe our personal data can help us understand ourselves better.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Data Analysis & Visualization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Making sense of complex datasets using Python, R, and creating interactive 
              visualizations that actually tell a story worth hearing.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building clean, functional web applications with React and TypeScript. 
              I believe good tools should feel invisible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
