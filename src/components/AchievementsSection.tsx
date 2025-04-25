import React from 'react';
import { CheckCircle, Award, Code, Dumbbell } from 'lucide-react';
import resumeData from '../data/resumeData';

const AchievementsSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="card p-6 flex flex-col items-center text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Code className="text-blue-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">LeetCode Problems</h3>
            <p className="text-gray-700">Solved 200+ problems, enhancing algorithmic thinking and problem-solving skills.</p>
            <div className="mt-4 text-3xl font-bold text-blue-600">200+</div>
          </div>
          
          <div className="card p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-blue-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
            <p className="text-gray-700">Mastered multiple programming languages and frameworks through dedicated practice.</p>
            <div className="mt-4 text-3xl font-bold text-blue-600">6+</div>
          </div>
          
          <div className="card p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="text-blue-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fitness Journey</h3>
            <p className="text-gray-700">Consistent training regimen for 3+ years, demonstrating discipline and dedication.</p>
            <div className="mt-4 text-3xl font-bold text-blue-600">3+ yrs</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-6">Personal Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Extracurricular Activities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.extraCurricular.map((activity, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h4>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;