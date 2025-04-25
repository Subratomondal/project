import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import resumeData from '../data/resumeData';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden h-full flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 project-card">
                <img 
                  src={project.imageUrl || "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 project-overlay transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="flex space-x-2 mb-4">
                      <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors">
                        <ExternalLink size={16} className="text-blue-800" />
                      </a>
                      <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors">
                        <Code size={16} className="text-blue-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                
                <ul className="text-gray-700 space-y-2 mb-4 flex-grow">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Visit my GitHub for more projects and code samples.
          </p>
          <a 
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;