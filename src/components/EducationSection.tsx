import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import resumeData from '../data/resumeData';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-10">
          {resumeData.education.map((edu, index) => (
            <div 
              key={index}
              className="card p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-8/12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center mb-2">
                    <Award size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700 font-medium">{edu.institution}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-blue-600 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar size={16} className="text-blue-600 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-4/12 flex justify-end mt-4 md:mt-0">
                  <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg inline-block">
                    <span className="text-sm font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.certificates.map((cert, index) => (
              <div 
                key={index}
                className="card p-5 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-gray-700">{cert.issuer}</span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;