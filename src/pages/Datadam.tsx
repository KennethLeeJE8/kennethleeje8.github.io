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
                DataDam is your personal database designed to work seamlessly with AI tools through MCP (Model Context Protocol). With DataDam, you can <strong>store, retrieve, update, and delete</strong> your own datapoints—from preferences and notes to knowledge and resources. <br /><br /> Instead of re-explaining yourself to every AI client, DataDam connects once and ensures your answers are always <strong>personalized and tailored</strong> to you.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">How it Works</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Think of it as your own memory bank for AI. You decide what to put in—favorite books, personal interests, basic information etc. When you ask the AI tool a question, it taps into your DataDam for context, making the response feel <strong>tailored to your life and interests</strong>.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">Tailored Book Recommendations</h3>
              
              <div className="mb-6">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-sm"
                  poster=""
                >
                  <source src="/videos/claude_desktop_read_spedup.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                In the demo video, DataDam is used to grab books I've read and my stored personal interests. With this personal context in hand, the AI tool can instantly recommend similar titles with descriptions that help justify why I would find the book interesting.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Instead of saying, "I like self-help and productivity and I've read Atomic Habits" every time, you store it once and <strong>every</strong> connected AI remembers.
              </p>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  DataDam transforms your AI tools into a <strong>personalized companion</strong>: smarter, faster, and always aligned with your unique context
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 leading-relaxed mb-6">It takes less than 5 minutes to set up and connect to your favourite AI tool.</p>
                <a
                  href="https://github.com/KennethLeeJE8/datadam_mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-800 transition-colors"
                >
                  Set Up DataDam
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