import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Quantified Self Project",
    description: "This is a personal analytics project that aims to improve awareness of daily activities so that I can implement positive changes to my lifestyle.",
    fullDescription: "I have to admit I'm not the most disciplined person, and so I have employed a dashboard to keep me in check. Working with data in a professional setting, I wondered why I could not apply this to myself, with my productivity, health and wellbeing being the KPI (Key Performance Indicators).",
    image: "/placeholder.svg",
    technologies: ["Analytics", "Dashboard", "Self-Tracking"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "TFT Analysis",
    description: "This is an analysis of the Riot Game TeamFight Tactics, which is an AutoChess Game.",
    fullDescription: "This is a game I play very often, so I thought I might as well make a project out of it. This analysis works on determining the most effective compositions and champions that are in the game based on past results, the statistics that are computed can help guide your decision making while playing the game.",
    image: "/placeholder.svg",
    technologies: ["Game Analysis", "Statistics", "Python"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Spotify Playlist Analysis",
    description: "This project focused on categorizing music based on attributes assigned to songs by Spotify, such as loudness, valence etc.",
    fullDescription: "This project focused on categorizing music into genres depending on attributes assigned to each song on Spotify. Spotify assigns attributes to each song, for example, danceability, loudness, acousticness, liveness etc. The end goal was to discover if there was a trend amongst genres, this could potentially be useful in making specialized playlists for people depending on attributes. I imported my personal playlists as test data.",
    image: "/placeholder.svg",
    technologies: ["Music Analysis", "Spotify API", "Python"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleExpanded = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6">Fun Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The playground where my weird ideas come to life. These are the projects I build when I should be sleeping, 
            but can't stop coding because they're just too fun! ✨
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {projectsData.map((project, index) => {
              const isExpanded = expandedProjects.has(project.id);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={project.id}
                  className={`flex flex-col lg:flex-row items-start gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Project Image */}
                  <div className="flex-1 max-w-md">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 max-w-xl">
                    <h2 className="text-2xl font-medium text-black mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Accordion Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black border-b border-gray-300 hover:border-black transition-colors mb-6"
                    >
                      {isExpanded ? 'Read Less' : 'Read More...'}
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 px-3 py-1 text-xs text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition-colors"
                        >
                          <Github size={16} />
                          View GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 text-sm rounded hover:border-black hover:text-black transition-colors"
                        >
                          <ExternalLink size={16} />
                          Try It Out
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
