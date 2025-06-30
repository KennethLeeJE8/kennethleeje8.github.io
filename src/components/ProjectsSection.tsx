import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-light text-black mb-6">Recent work</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            A few things I've been working on lately. Each project teaches me something new 
            about data, code, or both.
          </p>
          
          <div className="space-y-8">
            {/* Project 1: Quantified Self Project */}
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-medium text-black mb-2">Quantified Self Project</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                This is a personal analytics project that aims to improve awareness of daily activities so that I can implement positive changes to my lifestyle. I have to admit I'm not the most disciplined person, and so I have employed a dashboard to keep me in check. <br /><br />
                Working with data in a professional setting, I wondered why I could not apply this to myself, with my productivity, health and wellbeing being the KPI (Key Performance Indicators).
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">Analytics</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Dashboard</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Self-Tracking</span>
              </div>
            </div>
            
            {/* Project 2: TFT Analysis */}
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-medium text-black mb-2">TFT Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                This is an analysis of the Riot Game TeamFight Tactics, which is an AutoChess Game. This analysis works on determining the most effective compositions and champions that are in the game based on past results, the statistics that are computed can help guide your decision making while playing the game.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">Game Analysis</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Statistics</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Python</span>
              </div>
            </div>
            
            {/* Project 3: Spotify Playlist Analysis */}
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-medium text-black mb-2">Spotify Playlist Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                This project focused on categorizing music based on attributes assigned to songs by Spotify, such as loudness, valence, danceability, and more. The end goal was to discover if there was a trend amongst genres, and to potentially use this for making specialized playlists for people depending on attributes. I imported my personal playlists as test data.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">Music Analysis</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Spotify API</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Python</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-6 text-sm">
            <Link to="/portfolio" className="text-gray-600 hover:text-black border-b border-gray-300 hover:border-black transition-colors">
              view all projects
            </Link>
            <Link to="/books" className="text-gray-600 hover:text-black border-b border-gray-300 hover:border-black transition-colors">
              browse my books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
