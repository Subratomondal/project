import React, { useState } from 'react';
import resumeData from '../data/resumeData';

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'language' | 'framework' | 'tool' | 'soft'>('all');
  
  const filterSkills = () => {
    if (activeTab === 'all') {
      return resumeData.skills;
    }
    return resumeData.skills.filter(skill => skill.category === activeTab);
  };

  const filteredSkills = filterSkills();
  
  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'language', label: 'Languages' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'tool', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center bg-white rounded-lg shadow-sm p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-sm md:text-base rounded-md transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="card p-6 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-blue-600 font-semibold">{skill.level}%</span>
              </div>
              
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="mt-3">
                <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {skill.category === 'language' && 'Programming Language'}
                  {skill.category === 'framework' && 'Framework'}
                  {skill.category === 'tool' && 'Tool/Platform'}
                  {skill.category === 'soft' && 'Soft Skill'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-800 rounded-xl p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Looking for a skilled developer?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm passionate about creating efficient, scalable solutions and continuously enhancing my technical expertise.
          </p>
          <a href="#contact" className="btn bg-white text-blue-800 hover:bg-blue-50">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;