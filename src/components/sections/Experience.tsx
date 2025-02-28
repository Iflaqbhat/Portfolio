import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../services/api';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the companies I've worked with."
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`relative pl-8 ${
                index !== experiences.length - 1 ? 'pb-12' : ''
              }`}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
              
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position} at {experience.company}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;