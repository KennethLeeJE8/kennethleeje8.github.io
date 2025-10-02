import Header from '@/components/Header';

const Datadam = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6">DataDam</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What I'm currently working on.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-medium text-black mb-6">Introducing DataDam</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Datadam is your personal database designed to work seamlessly with AI tools through MCP (Model Context Protocol). With Datadam, you can <strong>store, retrieve, update, and delete your own datapoints</strong>—from preferences and notes to knowledge and resources. Instead of re-explaining yourself to every AI client, Datadam connects once and ensures your answers are always <strong>personalized and tailored</strong> to you.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">How it Works</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Think of it as your own memory bank for AI. You decide what to put in—favorite books, project notes, travel details, even your writing style. When you ask an AI a question, it taps into your Datadam for context, making the response feel <strong>tailored to your life and interests</strong>.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">Demo Example</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                In the demo video, Datadam works across multiple platforms. One highlight shows how you can get <strong>personalized book recommendations</strong>: by storing your reading preferences in Datadam, the AI can instantly recommend titles with descriptions that are <strong>tailored to your exact tastes</strong>.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Instead of saying, "I like self-help books and I've read Atomic Habits" every time, you store it once—and every connected AI remembers.
              </p>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Datadam transforms your AI tools into a <strong>personalized companion</strong>: smarter, faster, and always aligned with your unique context.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://github.com/KennethLeeJE8/datadam_mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-800 transition-colors"
                >
                  View Project on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datadam;