import React from 'react';
import { Calendar, Building } from 'lucide-react';
import resumeData from '../data/resumeData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          {resumeData.experience.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline circle for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'}`}>
                <div className="card hover:shadow-lg p-6 md:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-2 justify-start md:justify-end">
                    <Building size={18} className="text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 justify-start md:justify-end">
                    <Calendar size={16} className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-blue-800 mb-3">{exp.title}</h4>
                  
                  <ul className="space-y-2 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start md:justify-end">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for layout on desktop */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
        
        {resumeData.experience.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p>Currently gaining experience through projects and education.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;