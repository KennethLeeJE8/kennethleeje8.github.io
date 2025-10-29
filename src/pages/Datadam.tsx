import Header from "@/components/Header";

const Datadam = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6">
            DataDam
          </h1>
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
              <h2 className="text-2xl font-medium text-black mb-6">
                Introducing DataDam
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>DataDam</strong> is your personal database that works
                hand-in-hand with AI tools through{" "}
                <strong>MCP (Model Context Protocol)</strong>. It lets you{" "}
                <strong>store, retrieve, update, and delete</strong> your own
                datapoints — from preferences and notes to knowledge and
                resources — so your AI tools always respond with the right
                context.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">
                How It Works
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Think of DataDam as your AI’s{" "}
                <strong>personal memory bank</strong>. You decide what goes in —
                your favorite books, personal interests, or basic information.
                <br />
                <br />
                When you ask a connected AI a question, it draws from your
                DataDam to tailor responses around your life, habits, and
                preferences — like talking to an AI that truly remembers you.
              </p>

              <h3 className="text-xl font-medium text-black mb-4">
                Example: Tailored Book Recommendations
              </h3>

              <div className="mb-6">
                <video
                  controls
                  className="w-full rounded-lg shadow-sm"
                  poster=""
                >
                  <source
                    src="/videos/claude_code_read.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                In this demo, DataDam pulls my stored reading history. With 
                that context, the agent makes 3 recommendations (based on books 
                I've read) and puts them into the reading list I have on my 
                personal website that I manage.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Instead of repeating “I like self-help books and biographies and I've 
                read Atomic Habits and Henry Ford's biography” every time you ask for a
                recommendation, you save it once — and{" "}
                <strong>every connected AI remembers</strong>.
              </p>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  DataDam turns every AI interaction into a{" "}
                  <strong>personalized experience</strong> — smarter, faster,
                  and built around you.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Setting up and connecting to your favourite AI tool takes less than 10 minutes. <br/><br/>
                  Once connected, your AI tools will never forget your context again.
                </p>
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
