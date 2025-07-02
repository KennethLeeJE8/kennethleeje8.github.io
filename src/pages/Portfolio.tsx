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

const portfolioData: Project[] = [
  {
    id: 1,
    title: "IOI Properties Data Scraping",
    description: "This project was done during my time at IOI Properties Group, a property development company based in Malaysia. The goal of this project was to gain insight into the company's image by extracting information from relevant public forums.",
    fullDescription: "The goal of this project was to extract data from a popular website in Malaysia called Lowyat Forum, which is similar to Reddit. The client wanted to know what their brand image was on the website, taking comments from threads about their recent property developments. I extracted the text from multiple threads and forums using Python, developing a Microsoft Excel report that gave insight into the company's image.",
    image: "/images/portfolio/lowyat2.webp",
    technologies: ["Python", "Web Scraping", "Data Analysis", "NLP"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Amazon Sentiment Analysis",
    description: "This is an NLP project that uses Bag-of-Words and TFIDF to perform sentiment analysis on reviews left on multiple products. The model produced was able to correctly predict the sentiment a given comment 70% of the time.",
    fullDescription: "The dataset for this project was taken from Kaggle. The goal of this project was to be able to correctly predict whether a product review is positive or negative by identifying keywords. I used both SVC and Linear SVC for the classification of positive and negative reviews. The project features a model that is able to predict the sentiment of a given comment with a 70% accuracy.",
    image: "/placeholder.svg",
    technologies: ["Python", "NLP", "Scikit-learn", "Kaggle"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Health Inspection Data NY",
    description: "This project was done in my Database Management Class, where we ran SQL queries and made a data warehouse from Health Data NY data on health inspection with NY state.",
    fullDescription: "The goal of this project was to clean, process and query the data using Microsoft SQL Server. In class, we converted string variables into numerical representations, reformatted columns and finally built a data warehouse to access this processed data.",
    image: "/placeholder.svg",
    technologies: ["SQL", "Data Warehouse", "Data Cleaning"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Snapcart JSON Tabularization",
    description: "This project was done during my time interning at Snapcart, a consumer analytics company based in Indonesia.",
    fullDescription: "The project is a part of an OCR (Optical Character Recognition) program, specifically parsing items on physical receipts which came in as JSON files. The objective of the project was to correctly map item prices, quantity and discounts to the correct item on the receipt. 81 receipts, with 11 chains for testing, were processed with an accuracy of 94%. Due to confidentiality reasons, the code cannot be shared and thus I made a detailed presentation explaining the project.",
    image: "/placeholder.svg",
    technologies: ["Python", "OCR", "JSON", "Data Processing"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "KPI Dashboard",
    description: "This project was done for a client on Upwork. The dashboard tracks KPI's such as dollar/lead and conversion rate. The dashboard can be filtered for multiple variables including date and employee.",
    fullDescription: "The dashboard was created by connecting with a client on Upwork, a freelancing platform. The client wanted a dashboard to track their KPI's such as dollar/lead, conversion rate, proportion of leads in progress etc. Besides this, the client requested individual progress reports for his respective employees. Additionally, date, recruiter and client filters were added to get specific measurements of the company progress. Since this project was for a client, the source code is confidential.",
    image: "/placeholder.svg",
    technologies: ["Dashboard", "Data Visualization", "Upwork"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Portfolio = () => {
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
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6">Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of projects spanning data science, web development, and machine learning.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {portfolioData.map((project, index) => {
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
                          View Live
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

export default Portfolio;
