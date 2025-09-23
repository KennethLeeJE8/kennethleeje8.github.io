
const InterestsSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-light text-black mb-6">What I'm into</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            I'm focused on making everyone's personal data safe and accessible. 
            Here's what I'm focusing on at the moment:
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Personal Data Storage & Usage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ensuring that users can transfer personal data between systems conveniently and in a usable format. 
              I believe individuals should have control over their own data and be able to move it freely between platforms.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Data Integrations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Getting data from one system to another as easily as possible. This is essential in this day and age with the explosion of data. 
              I focus on not tying applications and storage too closely together, ensuring flexibility and interoperability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-black mb-2">AI/MCP as Integration Tools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Using AI and Model Context Protocol (MCP) as tools to help get this done, bringing personal data into systems that people are already using, 
              or that they want to use. Making AI work with your data. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
