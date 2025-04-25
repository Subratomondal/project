import React from 'react';
import { User, Calendar, GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resumeData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up">
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              {resumeData.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 bg-blue-100 p-3 rounded-lg">
                  <User className="text-blue-800" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Name</h3>
                  <p className="text-gray-700">{resumeData.name}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 bg-blue-100 p-3 rounded-lg">
                  <Award className="text-blue-800" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Expertise</h3>
                  <p className="text-gray-700">{resumeData.title}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 bg-blue-100 p-3 rounded-lg">
                  <Calendar className="text-blue-800" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Experience</h3>
                  <p className="text-gray-700">1 Year</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-800" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Education</h3>
                  <p className="text-gray-700">B.Tech in CSE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Professional Summary</h3>
              
              <ul className="space-y-3">
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Proficient in Java, JavaScript, and web technologies</span>
                </li>
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Skilled in data structures and algorithms</span>
                </li>
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Experienced in building responsive web applications</span>
                </li>
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Knowledgeable in MongoDB and MySQL databases</span>
                </li>
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Strong problem-solving skills with 200+ LeetCode problems solved</span>
                </li>
                <li className="flex">
                  <span className="inline-flex mr-3 h-5 w-5 rounded-full bg-blue-600 text-white justify-center items-center flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-700">Excellent team player with leadership qualities</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="btn btn-primary w-full"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;